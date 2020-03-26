const body = document.querySelector("body");
const wrap = document.querySelector(".wrap");

const IMG_NUM = 22;

function paintImg(imgNumber) {
  const image = new Image();
  // const image.src = `/img/${imgNumber + 1}.jpg`;
  // image.classList.add("bgImage");
  // body.prepend(image);
  wrap.style.backgroundImage = `url(./img/${imgNumber + 1}.jpg)`;
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}
//Math.ceil = 올림, Math.ceil = 버림

function init() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
}
init();
