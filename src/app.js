/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator() {
  //Empezamos declarando las variables
  let who = ["my father", "my cat", "my aunt", "my neighbour"];
  let whoImage = [
    "src/assets/img/Father.png",
    "src/assets/img/Cat.png",
    "src/assets/img/Aunt.png",
    "src/assets/img/Neighbour.png"
  ];
  let verb = ["recked", "broke", "threw", "borrowed"];
  let what = ["my computer", "all my pencils", "my pendrive"];
  let when = ["yesterday", "this morning", "last weekend"];
  //Generamos numeros aleatorios
  let whoIndex = Math.floor(Math.random() * who.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  //Generamos la excusa
  let excuse =
    "I am so sorry but " +
    who[whoIndex] +
    " " +
    verb[verbIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    ".";
  //Llamando al elemento del HTML
  let paragraph = document.getElementById("excuse");
  paragraph.textContent = excuse;
  //Llamando a la imagen
  let image = document.getElementById("image");
  image.setAttribute("src", whoImage[whoIndex]);
}

window.onload = function() {
  excuseGenerator();
};

//Haciendo un boton extra
let button = document.getElementById("button");
button.addEventListener("click", excuseGenerator);
