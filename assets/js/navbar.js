// =================================
// NAVBAR SCROLL
// =================================

const navbar =
document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    navbar.classList.add("scrolled");

  }else{

    navbar.classList.remove("scrolled");

  }

});

// =================================
// MOBILE MENU
// =================================

const mobileBtn =
document.getElementById("mobile-btn");

const mobileMenu =
document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});