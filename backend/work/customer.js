/* global $, JitsiMeetJS */



const options = {
	    hosts: {
		            domain: 'beta.meet.jit.si',

		            muc: 'conference.beta.meet.jit.si', // FIXME: use XEP-0030
		            focus: 'focus.beta.meet.jit.si',
		        },
	    bosh:'https://beta.meet.jit.si/http-bind?', // FIXME: use xep-0156 for that
	    // The name of client node advertised in XEP-0115 'c' stanza
    clientNode: 'http://jitsi.org/jitsimeet',
	//
	//        // openBridgeChannel: 'websocket',
	//
	//            /*configOverwrite: {
	//                openBridgeChannel: true,
	//                    }*/
	//
                 

analyticsScriptUrls: [
	        'https://beta.meet.jit.si/libs/jitsi-analytics-web-client.min.js'
	       
	    ],

	    
	    useNicks: false,
	    hiddenDomain: 'recorder.beta.meet.jit.si',
	    bosh: '//beta.meet.jit.si/http-bind',  
	    clientNode: 'http://jitsi.org/jitsimeet', 
	    etherpad_base: 'https://beta.meet.jit.si/etherpad/p/',
	 
	    desktopSharingChromeMethod: 'ext',
	    enableLayerSuspension: true,
	 
	    desktopSharingChromeExtId: 'kglhbbefdnlheedjiejgomgmfplipfeb',
	 
	    desktopSharingChromeSources: [ 'screen', 'window', 'tab' ],
	 
	    desktopSharingChromeMinExtVersion: '0.2.6.2',
	 
	    desktopSharingFirefoxExtId: '',

	    
	    desktopSharingFirefoxDisabled: false,
	 
	    desktopSharingFirefoxMaxVersionExtRequired: 51,

	    
	    desktopSharingFirefoxExtensionURL: '',

	    
	    webrtcIceUdpDisable: false,

	     
	    webrtcIceTcpDisable: false,

	    googleApiApplicationClientID: '39065779381-bbhnkrgibtf4p0j9ne5vsq7bm49t1tlf.apps.googleusercontent.com',
	    enableCalendarIntegration: true,
	    microsoftApiApplicationClientID: '00000000-0000-0000-0000-000044233A74',

	    openBridgeChannel: 'datachannel',
	    disableStats: false,
	    disableAudioLevels: false,
	    channelLastN: -1,  
	    adaptiveLastN: false,
	    adaptiveSimulcast: false,
	    enableRecording: true,
	    recordingType: 'jibri',
	    fileRecordingsEnabled: true,
	    dropbox: {
		            appKey: '3v5iyto7n7az02w'
		        },
	    liveStreamingEnabled: true,
	    enableWelcomePage: true,
	    resolution: '720',
	    constraints: {
		            video: {
				                aspectRatio: 16 / 9,
				                height: {
							                ideal: 720,
							                max: 720,
							                min: 240
							            }
				            }
		        },
	    disableSimulcast: false,  
	    disableRtx: false,
	    logStats: false,  
	  
	    startAudioMuted: 9,  
	    startVideoMuted: 9,  
	    
	    callStatsCustomScriptUrl: 'https://api.callstats.io/static/callstats-beta.min.js',
	    callStatsID: '549114654',  
	    callStatsSecret: 'OR5A7uDh06AhIg287rbyA5jyzDg=', 
	    enableStatsID: true,

	    minHDHeight: 540,
	    externalConnectUrl: '//beta.meet.jit.si/http-pre-bind',
	    enableLipSync: false,
	    enableTalkWhileMuted: true,
	        disableSuspendVideo: true,
		    dialInNumbersUrl: 'https://jitsi-api.jitsi.net/phoneNumberList',
		        dialInConfCodeUrl: 'https://jitsi-api.jitsi.net/conferenceMapper',
	    dialOutCodesUrl: 'https://jitsi-api.jitsi.net/countrycodes',
	    dialOutAuthUrl: 'https://jitsi-api.jitsi.net/authorizephone',

	   
	    p2pStunServers: [
		            { urls: 'stun:stun.l.google.com:19302' },
		            { urls: 'stun:stun1.l.google.com:19302' },
		            { urls: 'stun:stun2.l.google.com:19302' }
		        ],
	    p2p: {
		            enabled: true,
		            preferH264: true,
		            useStunTurn: true,
		            stunServers: [
				                { urls: 'stun:stun.l.google.com:19302' },
				                { urls: 'stun:stun1.l.google.com:19302' },
				                { urls: 'stun:stun2.l.google.com:19302' }
				            ]
		        },
	    stereo: true,
	    octo: { enabled: true},
	    deploymentInfo: {
		           // userRegion: 'antarctica',
		            envType: 'dev',
		            environment: 'beta.meet.jit.si',
		    	    shard: "shard1",
		            // region: "europe",
		             //userRegion: "asia"
		             region: 'eu-central-1',
		             userRegion: 'eu-central-1',
		        },
	    testing: {
		            octo:  {
				                probability: 0.5,
				    enabled:true
				            },
		           deploymentInfo: {

				   region: 'eu-central-1',
				   userRegion: 'eu-central-1',
			   },
		        },
	    transcribingEnabled: true,
	    e2eping: {
		            pingInterval: 10000,
		            analyticsInterval: 60000
		        },
	    rttMonitor: {
		            enabled: true,
		            initialDelay: 10000,
		            getStatsInterval: 10000,
		            analyticsInterval: 10000,
		            stunServers: [
				                {
							                address: '13.126.106.94:443',
							                region: 'ap-south-1'
							            },
				                {
							                address: '34.206.121.50:443',
							                region: 'us-east-1'
							            }
				            ]

		        }






};





const options1 = {
    hosts: {
        domain: 'jitsi-meet.example.com',
        muc: 'conference.jitsi-meet.example.com' // FIXME: use XEP-0030
    },
    bosh: '//jitsi-meet.example.com/http-bind', // FIXME: use xep-0156 for that

    // The name of client node advertised in XEP-0115 'c' stanza
    clientNode: 'http://jitsi.org/jitsimeet'
};

const confOptions = {
    openBridgeChannel: true
};

var connection = null;
var isJoined = false;
var room = null;

var localTracks = [];
const remoteTracks = {};

/**
 * Handles local tracks.
 * @param tracks Array with JitsiTrack objects
 */
function onLocalTracks(tracks) {
    localTracks = tracks;
    for (var i = 0; i < localTracks.length; i++) {
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
    for (var i = 0; i < localTracks.length; i++) {
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

    for (var i = 0; i < tracks.length; i++) {
        tracks[i].detach($(`#${id}${tracks[i].getType()}`));
    }
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
    for (var i = 0; i < localTracks.length; i++) {
        localTracks[i].dispose();
    }
    room.leave();
    connection.disconnect();
}

var isVideo = true;

/**
 *
 */
function switchVideo() { // eslint-disable-line no-unused-vars
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

JitsiMeetJS.init(initOptions);

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

JitsiMeetJS.createLocalTracks({ devices: [ 'audio', 'video' ] })
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
