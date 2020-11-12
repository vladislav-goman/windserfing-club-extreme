const mainVideo = document.querySelector('#main-video');
mainVideo.onloadeddata = () => {
  const loadingMask = document.querySelector('#loading-mask');
  console.log('lol');
  loadingMask.remove();
};
