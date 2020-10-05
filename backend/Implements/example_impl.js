/* global $, JitsiMeetJS */


const options1 = {
    hosts: {
        domain: 'https://dev.thebanknet.com/',
        muc: 'https://conference.dev.thebanknet.com' // FIXME: use XEP-0030
    },
    bosh: '//dev.thebanknet.com/http-bind?', // FIXME: use xep-0156 for that

    // The name of client node advertised in XEP-0115 'c' stanza
    clientNode: 'http://jitsi.org/jitsimeet'
};



const options = {
    hosts: {
        domain: 'beta.meet.jit.si',

        muc: 'conference.beta.meet.jit.si', // FIXME: use XEP-0030
        focus: 'focus.beta.meet.jit.si',
    },
    bosh:'https://beta.meet.jit.si/http-bind?', // FIXME: use xep-0156 for that
    // The name of client node advertised in XEP-0115 'c' stanza
    clientNode: 'http://jitsi.org/jitsimeet',

};


var commands = {
    "displayName": "display-name",
    "toggleAudio": "toggle-audio",
    "toggleVideo": "toggle-video",
    "toggleFilmStrip": "toggle-film-strip",
    "toggleChat": "toggle-chat",
    "toggleContactList": "toggle-contact-list",
    "toggleShareScreen": "toggle-share-screen"
};


const confOptions = {
    openBridgeChannel: true
};

let connection = null;
let isJoined = false;
let room = null;
let inVideo=false;

let localTracks = [];
const remoteTracks = {};




var events = {
    "incomingMessage": "incoming-message",
    "outgoingMessage": "outgoing-message",
    "displayNameChange": "display-name-change",
    "participantJoined": "participant-joined",
    "participantLeft": "participant-left",
    "videoConferenceJoined": "video-conference-joined",
    "videoConferenceLeft": "video-conference-left"
};

/**
 * Sends the passed object to Jitsi Meet
 * @param postis {Postis object} the postis instance that is going to be used
 * to send the message
 * @param object the object to be sent
 * - method {sting}
 * - params {object}
 */
function sendMessage(postis, object) {
    postis.send(object);
}

/**
 * Sends message for event enable/disable status change.
 * @param postis {Postis object} the postis instance that is going to be used.
 * @param event {string} the name of the event
 * @param status {boolean} true - enabled; false - disabled;
 */
function changeEventStatus(postis, event, status) {
    if (!(event in events)) {
        console.error("Not supported event name.");
        return;
    }
    sendMessage(postis, {
        method: "jitsiSystemMessage",
        params: { type: "eventStatus", name: events[event], value: status }
    });
}





/**
 * Handles local tracks.
 * @param tracks Array with JitsiTrack objects
 */
function onLocalTracks(tracks) {
    localTracks = tracks;
    for (let i = 0; i < localTracks.length; i++) {
        localTracks[i].addEventListener(
            JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
            audioLevel => console.log(`Audio Level local: ${audioLevel}`));
        localTracks[i].addEventListener(
            JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
            () => console.log('local track muted'));
        localTracks[i].addEventListener(
            JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
            () => console.log('local track stoped'));
        localTracks[i].addEventListener(
            JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,
            deviceId =>
                console.log(
                    `track audio output device was changed to ${deviceId}`));
        if (localTracks[i].getType() === 'video') {
            $('body').append(`<video autoplay='1' id='localVideo${i}' />`);
            localTracks[i].attach($(`#localVideo${i}`)[0]);
        } else {
            $('body').append(
                `<audio autoplay='1' muted='true' id='localAudio${i}' />`);
            localTracks[i].attach($(`#localAudio${i}`)[0]);
        }
        if (isJoined) {
            room.addTrack(localTracks[i]);
        }
    }
}

/**
 * Handles remote tracks
 * @param track JitsiTrack object
 */
function onRemoteTrack(track) {
    if (track.isLocal()) {
        return;
    }
    const participant = track.getParticipantId();

    if (!remoteTracks[participant]) {
        remoteTracks[participant] = [];
    }
    const idx = remoteTracks[participant].push(track);

    track.addEventListener(
        JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
        audioLevel => console.log(`Audio Level remote: ${audioLevel}`));
    track.addEventListener(
        JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
        () => console.log('remote track muted'));
    track.addEventListener(
        JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
        () => console.log('remote track stoped'));
    track.addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,
        deviceId =>
            console.log(
                `track audio output device was changed to ${deviceId}`));
    const id = participant + track.getType() + idx;

    if (track.getType() === 'video') {
        $('body').append(
            `<video autoplay='1' id='${participant}video${idx}' />`);
    } else {
        $('body').append(
            `<audio autoplay='1' id='${participant}audio${idx}' />`);
    }
    track.attach($(`#${id}`)[0]);
}

/**
 * That function is executed when the conference is joined
 */
function onConferenceJoined() {
    console.log('conference joined!');

    isJoined = true;
    for (let i = 0; i < localTracks.length; i++) {
        room.addTrack(localTracks[i]);
    }
}

/**
 *
 * @param id
 */
function onUserLeft(id) {
    console.log('user left');
    alert("user Left.............................");
    if (!remoteTracks[id]) {
        return;
    }
    const tracks = remoteTracks[id];

    for (let i = 0; i < tracks.length; i++) {
        tracks[i].detach($(`#${id}${tracks[i].getType()}`));
    }
}

function OnIncoming()
{
console.error("Incoming call...........");
}

/**
 * That function is called when connection is established successfully
 */
function onConnectionSuccess() {
    room = connection.initJitsiConference('conference', confOptions);
    room.on(JitsiMeetJS.events.conference.TRACK_ADDED, onRemoteTrack);
    room.on(JitsiMeetJS.events.conference.TRACK_REMOVED, track => {
        console.log(`track removed!!!${track}`);
    });
    room.on(
        JitsiMeetJS.events.conference.CONFERENCE_JOINED,
        onConferenceJoined);
    room.on(JitsiMeetJS.events.conference.USER_JOINED, id => {
     alert("user joined............................." +id);
        console.log('user join');
        remoteTracks[id] = [];
    });
    room.on(JitsiMeetJS.events.conference.USER_LEFT, onUserLeft);
    room.on(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED, track => {
        console.log(`${track.getType()} - ${track.isMuted()}`);
    });
    room.on(
        JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED,
        (userID, displayName) => console.log(`${userID} - ${displayName}`));
    room.on(
        JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED,
        (userID, audioLevel) => console.log(`${userID} - ${audioLevel}`));
    room.on(
        JitsiMeetJS.events.conference.PHONE_NUMBER_CHANGED,
        () => console.log(`${room.getPhoneNumber()} - ${room.getPhonePin()}`));

     room.setDisplayName("abhijit");
    // room.sendMessage(this, { method: commands['toggleVideo'], params: ' ' });

    room.join();
}
var achecked=false;
function toggleAudio()
{
if (achecked==false){
for (let i = 0; i < localTracks.length; i++)
if(localTracks[i].getType() === 'audio')
room.removeTrack(localTracks[i]);
achecked=true;
}
else
{
achecked=false;
for (let i = 0; i < localTracks.length; i++)
if(localTracks[i].getType() === 'audio')
room.addTrack(localTracks[i]);
}

}
var vchecked=false;
function toggleVideo()
{
if (vchecked==false){
for (let i = 0; i < localTracks.length; i++)
if(localTracks[i].getType() === 'video')
room.removeTrack(localTracks[i]);
vchecked=true;
}
else
{
vchecked=false;
for (let i = 0; i < localTracks.length; i++)
if(localTracks[i].getType() === 'video')
room.addTrack(localTracks[i]);
}

}

/**
 * This function is called when the connection fail.
 */
function onConnectionFailed() {
    console.error('Connection Failed!');
}

/**
 * This function is called when the connection fail.
 */
function onDeviceListChanged(devices) {
    console.info('current devices', devices);
}

/**
 * This function is called when we disconnect.
 */
function disconnect() {
    console.log('disconnect!');
    connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
        onConnectionSuccess);
    connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_FAILED,
        onConnectionFailed);
    connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
        disconnect);
}

/**
 *
 */
function unload() {
    for (let i = 0; i < localTracks.length; i++) {
        localTracks[i].dispose();
    }
    room.leave();
    connection.disconnect();

    location.reload(true);
    init();
}

let isVideo = true;

/**
 *
 */
function switchVideo() { // eslint-disable-line no-unused-vars

if(inVideo==true){
    isVideo = !isVideo;
    if (localTracks[1]) {
        localTracks[1].dispose();
        localTracks.pop();
    }
    JitsiMeetJS.createLocalTracks({
        devices: [ isVideo ? 'video' : 'desktop' ]
    })
        .then(tracks => {
            localTracks.push(tracks[0]);
            localTracks[1].addEventListener(
                JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
                () => console.log('local track muted'));
            localTracks[1].addEventListener(
                JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
                () => console.log('local track stoped'));
            localTracks[1].attach($('#localVideo1')[0]);
            room.addTrack(localTracks[1]);
        })
        .catch(error => console.log(error));
        }
        else
         alert("You should be in Video call to do screen share");
}

/**
 *
 * @param selected
 */
function changeAudioOutput(selected) { // eslint-disable-line no-unused-vars
    JitsiMeetJS.mediaDevices.setAudioOutputDevice(selected.value);
}

$(window).bind('beforeunload', unload);
$(window).bind('unload', unload);



// JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);
const initOptions = {
    disableAudioLevels: true
};

var id=0;

function init(){


var child=window.JitsiMeetJS.init(initOptions);
connection = new JitsiMeetJS.JitsiConnection(null, null, options);

connection.addEventListener(
    JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
    onConnectionSuccess);
connection.addEventListener(
    JitsiMeetJS.events.connection.CONNECTION_FAILED,
    onConnectionFailed);
connection.addEventListener(
    JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
    disconnect);

JitsiMeetJS.mediaDevices.addEventListener(
    JitsiMeetJS.events.mediaDevices.DEVICE_LIST_CHANGED,
    onDeviceListChanged);

connection.connect();

this.postis = Postis({
        window: child,
        scope: "jitsi_meet_external_api_" + id
    });
id++;
}

init();

function startChat(){

 room.sendTextMessage("Abhijit here .... text message should be input ");
    room.on(
       JitsiMeetJS.events.conference.MESSAGE_RECEIVED,
        (id, message, timestamp, nick) => {

                console.error('Recived messagess eventData ..............................'+message);

            });
 }

function videocall(){
 inVideo=true;

/*JitsiMeetJS.createLocalTracks({ devices: [ 'audio', 'video' ] })
    .then(onLocalTracks)
    .catch(error => {
        throw error;
    });
    */
JitsiMeetJS.createLocalTracks({ devices: [ 'audio', 'video' ],resolution: 50,
constraints: { video: {aspectRatio: 16 / 10 }}
 })
    .then(onLocalTracks)
    .catch(error => {
        throw error;
    });

if (JitsiMeetJS.mediaDevices.isDeviceChangeAvailable('output')) {
    JitsiMeetJS.mediaDevices.enumerateDevices(devices => {
        const audioOutputDevices
            = devices.filter(d => d.kind === 'audiooutput');

        if (audioOutputDevices.length > 1) {
            $('#audioOutputSelect').html(
                audioOutputDevices
                    .map(
                        d =>
                            `<option value="${d.deviceId}">${d.label}</option>`)
                    .join('\n'));

            $('#audioOutputSelectWrapper').show();
        }
    });
}

}

function startAudioCall(){
inVideo=false;
if(localTracks)
for (let i = 0; i < localTracks.length; i++) {
        localTracks[i].dispose();
    }

JitsiMeetJS.createLocalTracks({ devices: [ 'audio'] })
    .then(onLocalTracks)
    .catch(error => {
        throw error;
    });

if (JitsiMeetJS.mediaDevices.isDeviceChangeAvailable('output')) {
    JitsiMeetJS.mediaDevices.enumerateDevices(devices => {
        const audioOutputDevices
            = devices.filter(d => d.kind === 'audiooutput');

        if (audioOutputDevices.length > 1) {
            $('#audioOutputSelect').html(
                audioOutputDevices
                    .map(
                        d =>
                            `<option value="${d.deviceId}">${d.label}</option>`)
                    .join('\n'));

            $('#audioOutputSelectWrapper').show();
        }
    });
}
}

function co_browserstart()
{
TogetherJS(this);
}


function Postis(options) {
  var scope = options.scope;
  var targetWindow = options.window;
  var windowForEventListening = options.windowForEventListening || window;
  var listeners = {};
  var sendBuffer = [];
  var listenBuffer = {};
  var ready = false;
  var readyMethod = "__ready__";
  var readynessCheck;

  var listener = function(event) {
    var data;
    try {
      data = JSON.parse(event.data);
    } catch (e) {
      return;
    }

    if (data.postis && data.scope === scope) {
      var listenersForMethod = listeners[data.method];
      if (listenersForMethod) {
        for (var i = 0; i < listenersForMethod.length; i++) {
          listenersForMethod[i].call(null, data.params);
        }
      } else {
        listenBuffer[data.method] = listenBuffer[data.method] || [];
        listenBuffer[data.method].push(data.params);
      }
    }
  };

  windowForEventListening.addEventListener("message", listener, false);

  var postis = {
    listen: function (method, callback) {
      listeners[method] = listeners[method] || [];
      listeners[method].push(callback);

      var listenBufferForMethod = listenBuffer[method];
      if (listenBufferForMethod) {
        var listenersForMethod = listeners[method];
        for (var i = 0; i < listenersForMethod.length; i++) {
          for (var j = 0; j < listenBufferForMethod.length; j++) {
            listenersForMethod[i].call(null, listenBufferForMethod[j]);
          }
        }
      }
      delete listenBuffer[method];
    },

    send: function (opts) {
      var method = opts.method;

      if ((ready || opts.method === readyMethod) && (targetWindow && typeof targetWindow.postMessage === "function")) {
        targetWindow.postMessage(JSON.stringify({
          postis: true,
          scope: scope,
          method: method,
          params: opts.params
        }), "*");
      } else {
        sendBuffer.push(opts);
      }
    },

    ready: function (callback) {
      if (ready) {
        callback();
      } else {
        setTimeout(function () { postis.ready(callback); }, 50);
      }
    },

    destroy: function (callback) {
      clearInterval(readynessCheck);
      ready = false;
      if (windowForEventListening && typeof windowForEventListening.removeEventListener === "function") {
        windowForEventListening.removeEventListener("message", listener);
      }
      callback && callback();
    }
  };

  var readyCheckID = +new Date() + Math.random() + "";

  readynessCheck = setInterval(function () {
    postis.send({
      method: readyMethod,
      params: readyCheckID
    });
  }, 50);

  postis.listen(readyMethod, function (id) {
    if (id === readyCheckID) {
      clearInterval(readynessCheck);
      ready = true;

      for (var i = 0; i < sendBuffer.length; i++) {
        postis.send(sendBuffer[i]);
      }
      sendBuffer = [];
    } else {
      postis.send({
        method: readyMethod,
        params: id
      });
    }
  });

  return postis;
}