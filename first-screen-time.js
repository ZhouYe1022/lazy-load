//首屏时间是指在屏幕可视范围内的所有元素都加载完成的时间，一般来说图片和iframe的加载是最耗时的。
//在不考虑iframe的情况下，请写一个函数，可以计算出页面的首屏加载时间，只需要兼容高级浏览器。
//代码模板如下：
var firstScreen = function () {
    var startTime = Date.now();
    var firstScreenImgNumber = 0;
    var firstScreenLoadedCount = 0;
    var screenHeight = window.innerHeight;
    // 内容
    // 提示：获取图片位置可以使用getBoundingClientRect，
    // 获取屏幕高度可以用window.pageYOffset
    // 
    var countUp = function() {
      firstScreenLoadedCount++;
      if (firstScreenLoadedCount === firstScreenImgNumber) {
        console.log('FirstScreen Time:', Date.now() - startTime, 'ms');
      }
    };
    [].forEach.call(document.querySelectorAll('img[src]'), function(imgEl) {
      var rect = imgEl.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < screenHeight) {
        firstScreenImgNumber++;
        imgEl.addEventListener('load', countUp, false);
      }
    });

  }
  document.addEventListener('DOMContentLoaded', firstScreen, false);
