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
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } 
    else {
      x.className = "topnav";
    }
}


function myFunction() {
    var x = document.getElementById("mySidebar");
    if (x.className === "sidebar") {
      x.className += " responsive";
    } 
    else {
      x.className = "sidebar";
    }
}