document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const inicioBTN = document.querySelector(".inicio")
    
    musicaBtn.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });
    

});
document.addEventListener("DOMContentLoaded", () => {
    const playBTN = document.querySelector(".play");
    const backgroundMusic = document.getElementById("backgroundMusic");

    playBTN.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play(); 
            playBTN.textContent = "❚❚";
        } else {
            backgroundMusic.pause();
            playBTN.textContent = "►";
        }
    })
})
