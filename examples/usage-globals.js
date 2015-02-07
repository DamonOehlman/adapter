var video = document.createElement('video');

video.setAttribute('autoplay', '');
video.setAttribute('muted', '');

function handleSuccess(stream) {
  attachMediaStream(video, stream);
}

function handleFail(err) {
  console.error('error capturing media: ', err);
}

document.body.appendChild(video);
navigator.getUserMedia({ audio: true, video: true }, handleSuccess, handleFail);

// create a new RTCPeerConnection
console.log(new RTCPeerConnection({ iceServers: [] }));
