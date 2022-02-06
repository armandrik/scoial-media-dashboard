const body = document.querySelector(".body");
const header = document.querySelector(".header");
const dark_mode = document.querySelectorAll("input");
var isColored = true;
dark_mode[0].addEventListener("click", () => {
    if (isColored) {
        body.style.background = "hsl(230, 17%, 14%)";
        header.style.backgroundColor = "hsl(232, 19%, 15%)";
        let text = document.querySelectorAll(".text");
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "hsl(0, 0%, 100%)";
        }
        let mainContent = document.querySelectorAll(".mian-content");
        for (let x = 0; x < mainContent.length; x++) {
            mainContent[x].style.backgroundColor = "hsl(228, 28%, 20%)";
        }
        isColored = false;
    } else {
        body.style.background = "hsl(0, 0%, 100%)";
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
        let textW = document.querySelectorAll(".text");
        for (let m = 0; m < textW.length; m++) {
            textW[m].style.color = "hsl(230, 17%, 14%)";
        }
        let mainContent = document.querySelectorAll(".mian-content");
        for (let y = 0; y < mainContent.length; y++) {
            mainContent[y].style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        isColored = true;
    }
})