
let templateApp = `<template id="tiny-example">
<h1 id="title"></h1><button id="goTo">Click Me</button></template>`;
let mainTag = document.getElementById("app");
let buttonApp;

navigate();

function navigate() {

  //* Cant use swith here beacuse requires constant values,
  //* and OR its needed

  if (location.hash === "" || location.hash === "#" ||
    location.hash === "#homepage") {
    goToHomepage();
  }
  else if (location.hash === "#first-step") {
    goToFirstStep();
  }

}

function goToHomepage() {
  location.hash = "homepage";
  homepageDisplays();
}

function goToFirstStep() {
  location.hash = "first-step";
  firstStep();
}

// We will use it always, Better to define it !
function insertTemplate() {

  mainTag.insertAdjacentHTML("afterbegin", templateApp);

  let templateContent = document.getElementById("tiny-example").content;
  let cloneNode = templateContent.cloneNode(true);

  mainTag.lastChild.remove();
  mainTag.append(cloneNode);

}


function homepageDisplays() {
  //remove every peace of content and eventListeners before adding
  if (mainTag.content) {
    buttonApp.removeEventListener("click", goToHomepage)
    mainTag.childNodes.forEach(element => {
      element.remove()
    });
  }

  insertTemplate();
  document.getElementById("title").textContent =
    "Hey ! You are in the HomePage"
  buttonApp = document.querySelector("#goTo");
  buttonApp.textContent = "Go To First Step";
  buttonApp.addEventListener("click", goToFirstStep)
}






function firstStep() {

  if (mainTag.content) {
    buttonApp.removeEventListener("click", goToFirstStep)
    mainTag.childNodes.forEach(element => {
      element.remove()
    });
  }
  insertTemplate();
  document.getElementById("title").textContent =
    "Hey ! You are in the First Step"
  buttonApp = document.querySelector("#goTo");
  buttonApp.textContent = "Go To HomePage";
  buttonApp.addEventListener("click", goToHomepage)
}