const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateDOM();
  console.log(currentActive);
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  updateDOM;
});

function updateDOM() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
      circle.getElementsByClassName.backgroundColor = "#FF8FB1";
      circle.getElementsByClassName.transition = "2s ease";
    } else {
      circle.classList.remove("active");
      circle.getElementsByClassName.backgroundColor = "#ffffff";
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
