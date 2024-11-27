document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const inicioBTN = document.querySelector(".inicio");
    const ecse = document.querySelector(".ecse");
    const asl = document.querySelector(".asl");
    const rc71 = document.querySelector(".rc71");
    const sereia = document.querySelector(".sereia");

    document.getElementById("txt").style.display = "none"; //oculta a barra
    
    musicaBtn.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });
    
    ecse.addEventListener("click", () => {
        window.location.href = "../musicatocando19/index.html";
    });

    asl.addEventListener("click", () => {
        window.location.href = "../musicatocando20/index.html";
    });

    rc71.addEventListener("click", () => {
        window.location.href = "../musicatocando21/index.html";
    });

    sereia.addEventListener("click", () => {
        window.location.href = "../musicatocando22/index.html";
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

function menu(){
    document.getElementById("txt").style.display = "block"; //mostra a barra
    
}

