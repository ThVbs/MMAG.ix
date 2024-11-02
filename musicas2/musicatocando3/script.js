document.addEventListener("DOMContentLoaded", () => {
    const AnteriorBTN = document.querySelector(".antes");
    const container = document.querySelector(".container");
    
    AnteriorBTN.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

});
document.addEventListener("DOMContentLoaded", () => {
    const playBTN = document.querySelector(".play");
    const backgroundMusic = document.getElementById(".backgroundMusic");

    playBTN.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play(); 
            playBTN.textContent = "❚❚";
        } else {
            backgroundMusic.pause();
            playBTN.textContent = "►";
        }
    });
});