function playVideo(src) {
  const videoPlayer = document.createElement('video');
  videoPlayer.src = src;
  videoPlayer.controls = true;
  videoPlayer.autoplay = true;
  document.body.innerHTML = '';
  document.body.appendChild(videoPlayer);
}
