const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");
const actionMenu = document.getElementsByClassName("action-menu");

// Responsive Navbar Toggle
if (burgerMenu) {
    burgerMenu.addEventListener("click", function () {
        if (navbarMenu) {
            navbarMenu.classList.toggle("active");
        }
        if (actionMenu) {
            actionMenu[0].classList.toggle("active");
        }
        burgerMenu.classList.toggle("active");
    });
}