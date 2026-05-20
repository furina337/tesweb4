async function loadComponent(id, file){

  try{

    const response = await fetch(file);

    const data = await response.text();

    document.getElementById(id).innerHTML = data;

  } catch(error){

    console.error(error);

  }

}

// NAVBAR
loadComponent(
  "navbar-component",
  "./components/navbar.html"
);

// FOOTER
loadComponent(
  "footer-component",
  "./components/footer.html"
);

// =================================
// LOADING SCREEN
// =================================

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  const navbar =
  document.querySelector(".navbar");

  setTimeout(() => {

    // HIDE LOADER
    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    // SHOW NAVBAR
    navbar.classList.add("show");

  }, 1800);

});