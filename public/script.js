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
document.getElementById("opslaanbutton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
  // Voeg hier eventueel verdere acties toe, zoals het opslaan van de inhoud
});

// Sluit de pop-up als er ergens anders op de pagina wordt geklikt
window.addEventListener("click", function(event) {
  if (event.target != document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
});

function myfunction(){
  alert('artikel is opgeslagen')
}

myfunction();