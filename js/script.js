// //toggle class active product menu
// const navbarNav = document.querySelector(".navbar-nav");
// //ketika product menu di klik
// const product = document.querySelector("#hamburger-menu");

// product.addEventListener("click", () => {
//   navbarNav.classList.toggle("active");
// });

// // toggle class active search form
// const seacrhForm = document.querySelector(".search-form");
// const searchBox = document.querySelector("#search-box");

// document.querySelector("#search-button").onclick = (e) => {
//   seacrhForm.classList.toggle("active");
//   searchBox.focus();
//   e.preventDefault();
// };

// // klik diluar elemen
// const hm = document.querySelector("#hamburger-menu");
// const sb = document.querySelector("#search-button");
// const button = document.querySelector(".button");
// document.addEventListener("click", function (e) {
//   if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
//   if (!sb.contains(e.target) && !seacrhForm.contains(e.target)) {
//     seacrhForm.classList.remove("active");
//   }
//   if (!button.contains(e.target) && !tolls.contains(e.target)) {
//   }
// });

const navbar2 = document.getElementById("navbar2");
navbar2.style.top = "30%";
function boxKekanan() {
  // navbar2.style.top = "30%";
  navbar2.style.right = "15px";

  var elem = document.getElementById("navbar2");
  var pos = 25; //jarak tempuh
  // clearInterval(navbar2);
  navbar2 = setInterval(frame, 1); //waktu transisi
  function frame() {
    if (pos == 200) {
      //jarak tempuh
    } else {
      pos++;
      elem.style.top = pos + "-100px";
      elem.style.left = pos + "px";
    }
  }
}

// const navbar2 = document.getElementById("navbar2");
// document.addEventListener("click", function (e) {
//   if (!navbar2.contains(e.target)) {
//     navbar2.classList.remove("active");
//   }
// });

const hamburgerMenu = document.getElementById("hamburger-menu");
document.getElementById("hamburger-menu").onclick = (e) =>
  function myFunction() {
    document.getElementById("hamburger-menu").innerHTML = "fuck";
  };
// slideshow #shopping.html

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
