const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

function randomColor() {
  var cArr = "1234567890ABCDEF".split("");
  var c = "#";

  for (var i = 0; i < 6; i++) {
    c += cArr[Math.floor(Math.random() * 16)];
  }
  return c;
}

const headingText = document.querySelectorAll("h2");
headingText.forEach((heading) => {
  heading.style.color = randomColor();
});
