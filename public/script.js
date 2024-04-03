  //Menu komt tevoorschijn!
  // let dropdownButton = document.getElementById('dropdownButton')
  // dropdownButton.addEventListener('click', menu)
  // function menu() {
  //   dropdownMenu.classList.toggle('active');
  // };

// Functie om schaduw toe te voegen wanneer naar beneden wordt gescrold
function addShadowOnScroll() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
      navbar.classList.add('navbar-shadow');
  } else {
      navbar.classList.remove('navbar-shadow');
  }
}

// Eventlistener toevoegen voor scrollen
window.addEventListener('scroll', addShadowOnScroll);