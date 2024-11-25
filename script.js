var header = document.getElementById("main-title");

header.style.textAlign = "center";

var description = document.getElementById("description");

description.style.textAlign = "center";

var pizzaList = document.getElementById("pizza-list");

pizzaList.style.justifyContent = "space-around";

var pizzaImages = document.getElementsByClassName("pizza-img");

pizzaImages[1].src = "images/veggie.png";

var pizzaText = document.getElementsByClassName("pizza");

pizzaText[0].style.color = "red";
pizzaText[2].style.color = "orange";

function changeColor(color) {
    description.style.color = color;
}

pizzaImages[0].addEventListener("click", function() {
    changeColor("red");
})

pizzaImages[1].addEventListener("click", function() {
    changeColor("green");
})

pizzaImages[2].addEventListener("click", function() {
    changeColor("orange");
})