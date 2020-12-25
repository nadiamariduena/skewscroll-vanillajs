// 1
const section = document.querySelector("section");

//we use let because we are going to change this
// 2
let currentPixel = window.pageYOffset;
// 3
const looper = function () {
  //4
  const newPixel = window.pageYOffset;
  // 5
  const diff = newPixel - currentPixel;
  //
  // 8
  const speed = diff * 1.5;
  //   section.style.transform = "skewY(10deg)";
  section.style.transform = "skewY(" + speed + "deg)";
  //
  //
  //  7  NOW WE NEED to overwrite THE currentPixel with the new pixel
  currentPixel = newPixel;
  //
  // here you need to tell what to run
  //   6
  requestAnimationFrame(looper);
};

// 7
looper();
