let mobileMenu = document.getElementsByClassName("navbar-nav-mobile");
let contentContainer = document.getElementsByClassName("content-container");
let menuActive = false;

function showMenu() {
  if (menuActive == false) {
    menuActive = true;
    mobileMenu[0].style.display = 'flex';
    contentContainer[0].style.display = 'none';
  } else if (menuActive == true) {
    menuActive = false;
    mobileMenu[0].style.display = "none";
    contentContainer[0].style.display = 'block';
  }
}