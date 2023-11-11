let bookCloseNav = document.querySelector(".book-close-btn");
let bookOpenNav = document.querySelector(".book-open-btn");
let menuBar = document.querySelector(".menu-bar");

bookCloseNav.onclick = () => {
    menuBar.classList.toggle("active");
};