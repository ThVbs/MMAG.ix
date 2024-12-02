
document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const inicioBTN = document.querySelector(".inicio");
    const cil = document.querySelector(".cil");
    const sl = document.querySelector(".sl");
    const texas = document.querySelector(".texas");
    const dy = document.querySelector(".dy");
    const usuarioBTN = document.querySelector(".user-button");
    const topBTN = document.querySelector(".top-hits");
    const confBTN = document.querySelector(".config-button");
    
    document.getElementById("txt").style.display = "none";
    
    usuarioBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });  
    confBTN.addEventListener("click", () => {
        window.location.href = "../configurações/index.html";
    });  
    topBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });    
    
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
