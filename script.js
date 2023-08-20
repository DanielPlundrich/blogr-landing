// function toggleMenu() {
//     let menu = document.querySelector(".menu");
//     if (menu.style.display === "block") {
//       menu.style.display = "none";
//     } else {
//       menu.style.display = "block";
//     }
//   }



const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

menuToggle.addEventListener("click", () => {

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  // menu.style.display = (menu.style.display === "block") ? "none" : "black"

  menu.classList.toggle("show");
  hamburgerIcon.style.display = (hamburgerIcon.style.display === "none") ? "block" : "none";
  closeIcon.style.display = (closeIcon.style.display === "block") ? "none" : "block";
});



  function productOptions() {
    let productOptions = document.querySelector(".productOptions");
    if (productOptions.style.display === "block") {
      productOptions.style.display = "none";
    } else {
      productOptions.style.display = "block";
    }
  }


  function companyOptions() {
    let companyOptions = document.querySelector(".companyOptions");
    if (companyOptions.style.display === "block") {
      companyOptions.style.display = "none";
    } else {
      companyOptions.style.display = "block";
    }
  }


  function connectOptions() {
    let connectOptions = document.querySelector(".connectOptions");
    if (connectOptions.style.display === "block") {
      connectOptions.style.display = "none";
    } else {
      connectOptions.style.display = "block";
    }
  }

