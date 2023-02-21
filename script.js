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
      <h2>${person.name}</h2>
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

//team Start
const personBild = document.querySelectorAll(".name .person");

personBild.forEach((person) => {
  const bild = person.querySelector("img");
  const greyBox = person.querySelector(".greybox");
  bild.addEventListener("click", function () {
    greyBox.classList.toggle("click");
  });
  greyBox.addEventListener("click", function () {
    greyBox.classList.toggle("click");
  });
});

// const randomLandingPageColor = () => {
//   const randomNum = Math.ceil(Math.random() * 3);
// };
