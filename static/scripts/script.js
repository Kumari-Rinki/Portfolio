// Navbar appearing animation when hidden on scrolling
let navbar = document.getElementById("nav-bar");
let mybutton = document.getElementById("my-btn");
let lastScrollTop = Number.NEGATIVE_INFINITY;

// To create parallax scrolling effect in the background of main div
document.body.onscroll = () => {
    let scrolltotop = document.scrollingElement.scrollTop;
    let target = document.getElementById("main-body");
    let xvalue = "center";
    let factor = 0.5;
    let yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";

    // For navbar
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let height = navbar.offsetHeight;
    //This line will get the location on scroll

    if (scrollTop > lastScrollTop) {
        navbar.style.top = -height + "px";
    }
    else {
        navbar.style.top = "0px";
    }
    lastScrollTop = scrollTop;

    // For Back to top button
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});