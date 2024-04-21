let prev = document.getElementById("prev");
let next = document.getElementById("next");
let progress = document.getElementById("progress");
let circles = document.querySelectorAll("div.circle");
let counter = 1;
prev.addEventListener("click", () => {
  counter--;
  if (counter < 1) {
    counter = 1;
  }
  update();
});
next.addEventListener("click", () => {
  counter++;
  if (counter > circles.length) {
    counter = circles.length;
  }
  update();
});
function update() {
  circles.forEach((elem, index) => {
    if (index < counter) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
  let actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (counter == 1) {
    prev.disabled = true;
  } else if (counter == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
