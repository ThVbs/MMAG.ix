
document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const inicioBTN = document.querySelector(".inicio");
    const cil = document.querySelector(".cil");
    const sl = document.querySelector(".sl");
    const texas = document.querySelector(".texas");
    const dy = document.querySelector(".dy");

    document.getElementById("txt").style.display = "none"; //oculta a barra
    
    musicaBtn.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });
    
    cil.addEventListener("click", () => {
        window.location.href = "../musicatocando11/index.html";
    });

    sl.addEventListener("click", () => {
        window.location.href = "../musicatocando12/index.html";
    });

    texas.addEventListener("click", () => {
        window.location.href = "../musicatocando13/index.html";
    });

    dy.addEventListener("click", () => {
        window.location.href = "../musicatocando14/index.html";
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
