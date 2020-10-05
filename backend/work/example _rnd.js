/* global $, JitsiMeetJS */

var config = {
  hosts1: {
    domain: 'meet.jit.si',

    muc: 'muc.meet.jit.si', // FIXME: use XEP-0030
    focus: 'focus.meet.jit.si',
  },
  hosts: {
    domain: 'meeting.thebanknet.com',

    muc: 'muc.meeting.thebanknet.com', // FIXME: use XEP-0030
    focus: 'focus.meeting.thebanknet.com',
  },

  disableSimulcast: false,
  enableRemb: false,
  enableTcc: true,
  resolution: 720,
  constraints: {
    video: {
      aspectRatio: 16 / 9,
      height: {
        ideal: 720,
        max: 720,
        min: 180
      },
      width: {
        ideal: 1280,
        max: 1280,
        min: 320
      }
    }
  },
  externalConnectUrl: '//meeting.thebanknet.com/http-pre-bind',
  analytics: {
    amplitudeAPPKey: "fafdba4c3b47fe5f151060ca37f02d2f",
    scriptURLs: [
      "https://meeting.thebanknet.com/libs/analytics-ga.min.js",
    ],
    googleAnalyticsTrackingId: "UA-319188-14",
    whiteListedEvents: ['audio.output.problem', 'peer.conn.status.duration'],
  },
  p2pStunServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
    { urls: "stun:stun2.l.google.com:19302" }
  ],
  enableP2P: true, // flag to control P2P connections
  // New P2P options
  p2p: {
    enabled: true,
    preferH264: true,
    disableH264: true,
    useStunTurn: true, // use XEP-0215 to fetch STUN and TURN server for the P2P connection
    stunServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
      { urls: "stun:stun2.l.google.com:19302" }
    ]
  },
  useStunTurn: true, // use XEP-0215 to fetch STUN and TURN server for the JVB connection
  useIPv6: false, // ipv6 support. use at your own risk
  useNicks: false,
  bosh: 'https://meeting.thebanknet.com/http-bind?siptest', // FIXME: use xep-0156 for that

  etherpad_base: 'https://meeting.thebanknet.com/etherpad/p/',
  clientNode: 'http://jitsi.org/jitsimeet', // The name of client node advertised in XEP-0115 'c' stanza
  //deprecated desktop sharing settings, included only because older version of jitsi-meet require them
  desktopSharing: 'ext', // Desktop sharing method. Can be set to 'ext', 'webrtc' or false to disable.
  chromeExtensionId: 'kglhbbefdnlheedjiejgomgmfplipfeb', // Id of desktop streamer Chrome extension
  desktopSharingSources: ['screen', 'window'],
  googleApiApplicationClientID: "39065779381-bbhnkrgibtf4p0j9ne5vsq7bm49t1tlf.apps.googleusercontent.com",
  microsoftApiApplicationClientID: "00000000-0000-0000-0000-000040240063",
  enableCalendarIntegration: true,
  //new desktop sharing settings
  desktopSharingChromeExtId: 'kglhbbefdnlheedjiejgomgmfplipfeb', // Id of desktop streamer Chrome extension
  desktopSharingChromeDisabled: false,
  desktopSharingChromeSources: ['screen', 'window', 'tab'],
  desktopSharingChromeMinExtVersion: '0.2.6.2', // Required version of Chrome extension
  desktopSharingFirefoxExtId: "",
  desktopSharingFirefoxDisabled: false,
  desktopSharingFirefoxMaxVersionExtRequired: '0',
  desktopSharingFirefoxExtensionURL: "",
  useRoomAsSharedDocumentName: false,
  enableLipSync: false,
  disableRtx: false, // Enables RTX everywhere
  enableRtpStats: false, // Enables RTP stats processing
  enableStatsID: true,
  openBridgeChannel: 'websocket', // One of true, 'datachannel', or 'websocket'
  channelLastN: -1, // The default value of the channel attribute last-n.
  minHDHeight: 540,
  startBitrate: "800",
  disableAudioLevels: false,
  useRtcpMux: true,
  useBundle: true,
  disableSuspendVideo: true,
  stereo: false,
  forceJVB121Ratio: -1,
  enableTalkWhileMuted: true,

  enableClosePage: true,

  callStatsCustomScriptUrl: "https://api.callstats.io/static/callstats-ws.min.js",

  hiddenDomain: 'recorder.meet.jit.si',
  dropbox: {
    appKey: '3v5iyto7n7az02w'
  },
  transcribingEnabled: false,
  enableRecording: true,
  liveStreamingEnabled: true,
  fileRecordingsEnabled: true,
  fileRecordingsServiceEnabled: false,
  fileRecordingsServiceSharingEnabled: false,
  requireDisplayName: false,
  recordingType: 'jibri',
  enableWelcomePage: true,
  isBrand: false,
  logStats: false,
  // To enable sending statistics to callstats.io you should provide Applicaiton ID and Secret.
  callStatsID: "347489791",//Application ID for callstats.io API
  callStatsSecret: "169aw6v+hk9TbVuHN2SiDCgfkkU=",//Secret for callstats.io API
  dialInNumbersUrl: 'https://api.jitsi.net/phoneNumberList',
  dialInConfCodeUrl: 'https://api.jitsi.net/conferenceMapper',

  dialOutCodesUrl: 'https://api.jitsi.net/countrycodes',
  dialOutAuthUrl: 'https://api.jitsi.net/authorizephone',
  peopleSearchUrl: 'https://api.jitsi.net/directorySearch',
  inviteServiceUrl: 'https://api.jitsi.net/conferenceInvite',
  inviteServiceCallFlowsUrl: 'https://api.jitsi.net/conferenceinvitecallflows',
  peopleSearchQueryTypes: ['user', 'conferenceRooms'],
  startAudioMuted: 9,
  startVideoMuted: 9,
  enableUserRolesBasedOnToken: false,
  enableLayerSuspension: false,
  hepopAnalyticsUrl: "",
  hepopAnalyticsEvent: {
    product: "lib-jitsi-meet",
    subproduct: "meet-jit-si",
    name: "jitsi.page.load.failed",
    action: "page.load.failed",
    actionSubject: "page.load",
    type: "page.load.failed",
    source: "page.load",
    attributes: {
      type: "operational",
      source: 'page.load'
    },
    server: "meet.jit.si"
  },
  deploymentInfo: {
    environment: 'meet-jit-si',
    envType: 'prod',
    releaseNumber: '262',
    shard: 'meet-jit-si-eu-central-1a-s4',
    region: 'eu-central-1',
    userRegion: 'eu-central-1',
    crossRegion: (!'eu-central-1' || 'eu-central-1' === 'eu-central-1') ? 0 : 1
  },
  rttMonitor: {
    enabled: false,
    initialDelay: 30000,
    getStatsInterval: 10000,
    analyticsInterval: 60000,
    stunServers: { "us-east-1": "all-us-east-1-turn.jitsi.net:443", "ap-se-2": "all-ap-se-2-turn.jitsi.net:443", "ap-se-1": "all-ap-se-1-turn.jitsi.net:443", "us-west-2": "all-us-west-2-turn.jitsi.net:443", "eu-central-1": "all-eu-central-1-turn.jitsi.net:443", "eu-west-1": "all-eu-west-1-turn.jitsi.net:443" }
  },
  abTesting: {
  },
  testing: {
    capScreenshareBitrate: 1,
    octo: {
      probability: 0
    }
  }
};

let connection = null;
let isJoined = false;
let room = null;

let localTracks = [];
const remoteTracks = {};

/**
 * Handles local tracks.
 * @param tracks Array with JitsiTrack objects
 */
function onLocalTracks(tracks) {
  localTracks = tracks;
  for (let i = 0; i < localTracks.length; i++) {
    // localTracks[i].addEventListener(
    //     JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
    //     audioLevel => console.log(`Audio Level local: ${audioLevel}`));
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
  if (!remoteTracks[id]) {
    return;
  }
  const tracks = remoteTracks[id];

  for (let i = 0; i < tracks.length; i++) {
    tracks[i].detach($(`#${id}${tracks[i].getType()}`));
  }
}

/**
 * That function is called when connection is established successfully
 */
function onConnectionSuccess() {
  console.log('onConnectionSuccess!');
  room = connection.initJitsiConference('siptest', config);
  room.on(JitsiMeetJS.events.conference.TRACK_ADDED, onRemoteTrack);
  room.on(JitsiMeetJS.events.conference.TRACK_REMOVED, track => {
    console.log(`track removed!!!${track}`);
  });
  room.on(
    JitsiMeetJS.events.conference.CONFERENCE_JOINED,
    onConferenceJoined);
  room.on(JitsiMeetJS.events.conference.USER_JOINED, id => {
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
  room.join();
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
}

let isVideo = true;

/**
 *
 */
function switchVideo() { // eslint-disable-line no-unused-vars
  isVideo = !isVideo;
  if (localTracks[1]) {
    console.log(localTracks[1]);
    localTracks[1].dispose();
    localTracks.pop();
  }
  JitsiMeetJS.createLocalTracks({
    devices: [isVideo ? 'video' : 'desktop']
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

/**
 *
 * @param selected
 */
function changeAudioOutput(selected) { // eslint-disable-line no-unused-vars
  JitsiMeetJS.mediaDevices.setAudioOutputDevice(selected.value);
}

$(window).bind('beforeunload', unload);
$(window).bind('unload', unload);

// JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.LOG);

function initVideo()
{
  JitsiMeetJS.init(config);

  connection = new JitsiMeetJS.JitsiConnection(null, null, config);

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

  let id = 'asarkar';
  let passwd = 'bhD6MUr11$';
  connection.connect({ id, passwd });

 // connection.connect();

  JitsiMeetJS.createLocalTracks({ devices: ['audio', 'video'] })
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


function videoCall()
{
  initVideo();
}