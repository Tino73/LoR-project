// function cardincrease(){
//     var cardelement = document.getElementById("card");
//     cardelement.style.height = "400px";
//     cardelement.style.width = "300px";
// }
// function carddecrease(){
//     var cardelement = document.getElementById("card");
//     cardelement.style.width = "100px";
//     cardelement.style.width = "500px";
// }
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } 
//     else {
//       x.className = "topnav";
//     }
// }


// function myFunction() {
//     var x = document.getElementById("mySidebar");
//     if (x.className === "sidebar") {
//       x.className += " responsive";
//     } 
//     else {
//       x.className = "sidebar";
//     }
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}