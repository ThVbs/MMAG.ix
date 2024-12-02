document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const inicioBTN = document.querySelector(".inicio");
    const mg = document.querySelector(".mg");
    const lap = document.querySelector(".lap");
    const papa = document.querySelector(".papa");
    const joan = document.querySelector(".joan");
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
    
    mg.addEventListener("click", () => {
        window.location.href = "../musicatocando15/index.html";
    });

    lap.addEventListener("click", () => {
        window.location.href = "../musicatocando16/index.html";
    });

    papa.addEventListener("click", () => {
        window.location.href = "../musicatocando17/index.html";
    });

    joan.addEventListener("click", () => {
        window.location.href = "../musicatocando18/index.html";
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

