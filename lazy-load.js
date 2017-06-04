//图片懒加载

document.addEventListener('DOMContentLoaded', function() {
  var timeHandler;
  var imgList = Array.from(document.querySelectorAll('.my-lazy-load'));
  var screenHeight = window.innerHeight;
  var screenWidth = window.innerWidth;

  function delay() {

    if (typeof timeHandler !== 'undefined') {
      return;
    }

    timeHandler = setTimeout(function() {
      loadImg();

      timeHandler = undefined;
    }, 300);
  }

  function loadImg() {
    imgList.forEach(function(imgEl, i) {
      var rect = imgEl.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < screenHeight && rect.right > 0 && rect.left < screenWidth) {
        imgEl.src = imgEl.dataset.src;
        imgEl.classList.remove('my-lazy-load');
        imgList.splice(i, 1);
      }
    })
  }
  window.addEventListener('scroll', delay, false);
});
