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
    document.body.classList.add("eight-bit");
    alert("You got 30 extra lives!");
    codeIndex = 0;
}
});
