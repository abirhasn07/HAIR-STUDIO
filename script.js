var sideNav = document.getElementById('side-nav')
var menuBtn = document.getElementById("menu-btn")
var menu = document.getElementById("menu")
var closeMenu = document.getElementById("close-menu")

menuBtn.onclick = function() {

    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";


    } else {
        sideNav.style.right = "-250px";

        sideNav.style.display = "block"

    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

// menuBtn.addEventListener("click", function() {
//     if (sideNav.style.display = "block") {
//         sideNav.style.display = "none"
//     } else {
//         sideNav.style.display = "block"
//     }
// })