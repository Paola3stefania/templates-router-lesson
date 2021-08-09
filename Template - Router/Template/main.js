let contentDom = document.getElementById("content");

let templateVar = `<template id="template-card"><div id="card" class="content__card"><h1 id="title" class="card__title"></h1><p id="text" class="card__text"></p></div></template>`;

contentDom.insertAdjacentHTML("beforeend", templateVar);
let templateNode = document.getElementById("template-card").content;

for (let index = 0; index < 10; index++) {
  let cardClone = templateNode.cloneNode(true);
  contentDom.appendChild(cardClone);
}

let index = 0;
document.querySelectorAll("#card").forEach(element => {
  element.firstChild.textContent =
    "Title number: " + `${index}`;
  element.firstChild.nextSibling.textContent =
    "Im the awesome text, and my fav number is " +
    `${parseInt(Math.random() * 10000)}`;
  index++;
});

contentDom.firstChild.remove();