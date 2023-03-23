let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let codeIndex = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === konamiCode[codeIndex]) {
    codeIndex++;
} else {
    codeIndex = 0;
}

if (codeIndex === konamiCode.length) {
    console.log("hej från konami code");
    alert("You got 30 extra lives!");
    codeIndex = 0;
}
});

const meaningOfLife = document.getElementById("easter")
const mainColor = document.querySelector("main")
meaningOfLife.addEventListener("click", function(){
    alert("The meaning of life, the universe and everything!");
    mainColor.style.background = "linear-gradient(90deg,#433d6e, #9896b3)";
})
