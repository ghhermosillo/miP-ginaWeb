// estoy seleccionando elementos del html y agregandole clases que interactuan con el css
console.log("hola");
const btnHamburguer = document.querySelector("#btnHamburguer");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const overflow = document.querySelector(".overflow");
const hover = document.querySelector(".hover");
const dropdown = document.querySelector("#dropdown");

btnHamburguer.addEventListener("click", function () {
  console.log("click hamburguer");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
btnHamburguer.addEventListener("click", function () {
  console.log("overflow works");
  if (overflow.classList.contains("overflow-hidden")) {
    overflow.classList.remove("overflow-hidden");
  } else {
    overflow.classList.add("overflow-hidden");
  }
});

let imagen = document.getElementsByTagName(`img`);

console.log(imagen);
for (let i = 0; i < imagen.length; i++) {
  imagen[i].setAttribute("loading", "lazy");
}
