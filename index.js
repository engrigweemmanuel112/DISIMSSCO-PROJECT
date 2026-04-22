//SELECT THE HAMBURGER MENU
// SELECT THE NAV-LIST
//ADD EVENT LISTENER
//ADD  TOGGLE ACTIVE FOR HAMBURGER
//ADD TOGGLE ACTIVE FOR HAMBURGER

//SELECT THE HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");

// SELECT THE NAV-LIST
const navList = document.querySelector(".nav-list");

//ADD EVENT LISTENER
hamburger.addEventListener("click", mobileMenu);

//ADD A FUNCTION THEN
function mobileMenu() {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
}
//ADD  TOGGLE ACTIVE FOR HAMBURGER

//ADD TOGGLE ACTIVE FOR HAMBURGER
