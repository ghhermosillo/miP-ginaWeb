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
// dropdown.addEventListener("pointerover", function () {
//   console.log("hover works");
//   if (hover.classList.contains("hover-on")) {
//     hover.classList.remove("hover-on");
//     // hover.classList.add("hover-on");
//   } else {
//     hover.classList.add("hover-on");
//   }
// });
// const sub_content = document.querySelector(".sub-content")
// if (sub_content.)
// if(sub_content.classList.contains("hover")){

// }
