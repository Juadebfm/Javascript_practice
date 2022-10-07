const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let load = 0;
let percent = setInterval(blurImage, 30);

setTimeout(() => {
  alert(
    "Welcome to the blurry loading page, refresh the page to see the loading animation again!!!"
  );
}, 3000);

function blurImage() {
  load++;
  if (load > 99) {
    clearInterval(percent);
  }
  loadText.innerText = `${load}`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
const scale = (num, in_min, in_max, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
