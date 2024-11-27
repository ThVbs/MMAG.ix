document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const inicioBTN = document.querySelector(".inicio");
    const hello = document.querySelector(".Hello");
    const setrain = document.querySelector(".SetRain");
    const Skyfall = document.querySelector(".Skyfall");
    const omg = document.querySelector(".OhMyGod");

    document.getElementById("txt").style.display = "none"; //oculta a barra
    
    musicaBtn.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });
    
    hello.addEventListener("click", () => {
        window.location.href = "../musicatocando8/index.html";
    });

    Skyfall.addEventListener("click", () => {
        window.location.href = "../musicatocando4/index.html";
    });

    setrain.addEventListener("click", () => {
        window.location.href = "../musicatocando9/index.html";
    });

    omg.addEventListener("click", () => {
        window.location.href = "../musicatocando10/index.html";
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

