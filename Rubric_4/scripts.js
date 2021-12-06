// function that will run on page load
function pageLoad(){
    alert("Welcome to Rubric 4!");
}

// Click event for the click-text h3 element
var clickText = document.getElementById("click-text");

clickText.addEventListener("click", function(){
    clickText.style.fontSize = "50px";
    clickText.style.color = "orange";
    clickText.innerText = "It Works! I'm orange now."
})

// Mouse over event for the mouse-over-text p element
var mouseOverText = document.getElementById("mouse-over-text");

mouseOverText.addEventListener("mouseover", function(){
    mouseOverText.style.textAlign = "center";
    mouseOverText.style.backgroundColor = "yellow";
    mouseOverText.style.color = "red";
})

