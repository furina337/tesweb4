// =================================
// COUNTER ANIMATION
// =================================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target =
    +counter.getAttribute("data-target");

    const current =
    +counter.innerText;

    const increment =
    target / 100;

    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// NAVBAR
fetch("./components/navbar.html")

.then(response => response.text())

.then(data => {

  document.getElementById(
    "navbar-placeholder"
  ).innerHTML = data;

});

// FOOTER
fetch("./components/footer.html")

.then(response => response.text())

.then(data => {

  document.getElementById(
    "footer-placeholder"
  ).innerHTML = data;

});