"use strict";
const imageDiv = document.querySelector(".image");
const characterInfo = document.querySelector(".info");
const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
const character = document.querySelector(".character");

let count = 1;

const getFetch = () => {
  imageDiv.innerHTML = "";

  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  fetch(`https://rickandmortyapi.com/api/character/${count}`, options)
    .then((response) => response.json())
    .then((person) => {
      character.innerHTML = `
      <h1>${person.name}</h1>
      `;
      const image = document.createElement("img");
      image.src = person.image;
      imageDiv.appendChild(image);

      characterInfo.innerHTML = `
    <ul>
    <li>Status: ${person.status}</li>
    <li>Species: ${person.species}</li>
    <li>Gender: ${person.gender}</li>
    </ul>
    `;
    });
};

getFetch();
buttonPrev.disabled = true;

const checkStatus = () => {
  if (count > 1) {
    buttonPrev.disabled = false;
  } else {
    buttonPrev.disabled = true;
  }

  if (count === maxNumber) {
    buttonNext.disabled = true;
  } else {
    buttonNext.disabled = false;
  }
};

buttonNext.onclick = () => {
  count++;
  getFetch();
  checkStatus();
};

buttonPrev.onclick = () => {
  count--;
  getFetch();
  checkStatus();
};

const alexander = document.querySelector(".Alexander");
const emma = document.querySelector(".Emma");
const josef = document.querySelector(".Josef");
const greybox = document.querySelector(".greybox");
const greybox2 = document.querySelector(".greybox2");
const greybox3 = document.querySelector(".greybox3");

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
