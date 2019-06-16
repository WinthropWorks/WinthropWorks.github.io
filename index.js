var slideIndex = 0;


function showSlides() {
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activedot";

}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function dotClickHandler(e) {
clearInterval(intervalId);
    var activeDotIndex = this.getAttribute("slideDot");
    slideIndex = activeDotIndex - 1;
    showSlides();
    intervalId =  setInterval(showSlides, 3000);
}
var dotNode = document.getElementsByClassName("dot");
for (var i=0;i<dotNode.length;i++) {
    dotNode[i].addEventListener("click", dotClickHandler);
}

var intervalId =  setInterval(showSlides, 3000);


