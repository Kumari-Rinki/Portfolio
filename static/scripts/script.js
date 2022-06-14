// To create parallax scrolling effect in the background of main div
document.body.onscroll = () => {
    let scrolltotop = document.scrollingElement.scrollTop;
    let target = document.getElementById("main-body");
    let xvalue = "center";
    let factor = 0.5;
    let yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}