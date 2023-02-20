//Team - members start

const alexander = document.querySelector(".Alexander");
const emma = document.querySelector(".Emma");
const josef = document.querySelector(".Josef");
const greybox = document.querySelector(".greybox");
const greybox2 = document.querySelector(".greybox2");
const greybox3 = document.querySelector(".greybox3");

// alexander.addEventListener("click", function () {
//   alexander.style.width = "100%";
//   emma.style.width = "0%";
//   josef.style.width = "0%";
// });

alexander.addEventListener("click", function () {
  greybox.classList.toggle("click");
});
emma.addEventListener("click", function () {
  greybox2.classList.toggle("click");
});
josef.addEventListener("click", function () {
  greybox3.classList.toggle("click");
});
greybox.addEventListener("click", function () {
  greybox.classList.toggle("click");
});
greybox2.addEventListener("click", function () {
  greybox2.classList.toggle("click");
});
greybox3.addEventListener("click", function () {
  greybox3.classList.toggle("click");
});

//Team - members stop
