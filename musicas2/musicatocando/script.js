document.addEventListener("DOMContentLoaded", () => {
    const proximaBTN = document.querySelector(".depois");
    const aleatoriaBTN = document.querySelector(".aleatorio")

    proximaBTN.addEventListener("click", () => {
        window.location.href = "../musicatocando3/index.html";
    });

    aleatoriaBTN.addEventListener("click", () => {
        proximaBTN.addEventListener("click", () => {
            window.location.href = "../musicatocando2/index.html";
    });
    })
})
document.addEventListener("DOMContentLoaded", () => {
    const playBTN = document.querySelector(".play");
    const backgroundMusic = document.getElementById("backgroundMusic");

    playBTN.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play(); // Toca a música
            playBTN.textContent = "❚❚";
        } else {
            backgroundMusic.pause(); // Pausa a música
            playBTN.textContent = "►";
        }
    });
});

