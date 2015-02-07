define(['//cdnjs.cloudflare.com/ajax/libs/crel/2.1.8/crel.min.js', '../adapter.js'], function(crel, adapter) {
  var video = crel('video', { autoplay: true, muted: true });

  function handleSuccess(stream) {
    adapter.attachMediaStream(video, stream);
  }

  function handleFail(err) {
    console.error('error capturing media: ', err);
  }

  document.body.appendChild(video);
  adapter.getUserMedia({ audio: true, video: true }, handleSuccess, handleFail);

  // create a new RTCPeerConnection
  console.log(new adapter.RTCPeerConnection({ iceServers: [] }));
});
