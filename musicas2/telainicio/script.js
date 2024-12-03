document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const anitta = document.querySelector(".item10");
    const Skyfall = document.querySelector(".item11");
    const albumAdl = document.querySelector(".albumAdl");
    const usuarioBTN = document.querySelector(".Usuario");
    const albumBebeto = document.querySelector(".bebeto");
    const albumMadonna = document.querySelector(".Madonna");
    const albumBeyonce = document.querySelector(".beyonce");
    const albumSnoop = document.querySelector(".snoop");
    const natal = document.querySelector(".item6");
    const leozin = document.querySelector(".item5");
    const simpatia = document.querySelector(".item");
    const sweet = document.querySelector(".item27")
    
    sweet.addEventListener("click", () => {
        window.location.href = "../musicatocando27/index.html"
    })

    simpatia.addEventListener("click", () => {
        window.location.href = "../musicatocando7/index.html";
    });

    musicaBtn.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });
    
    anitta.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });


    Skyfall.addEventListener("click", () => {
        window.location.href = "../musicatocando4/index.html";
    });

    albumAdl.addEventListener("click", () => {
        window.location.href = "../albumadele/index.html";
    });

    usuarioBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });

    albumBebeto.addEventListener("click", () => {
        window.location.href = "../albumroberto/index.html";
    });


    albumMadonna.addEventListener("click", () => {
        window.location.href = "../albummadonna/index.html";
    });

    albumBeyonce.addEventListener("click", () => {
        window.location.href = "../albumbeyonce/index.html";
    });

    albumSnoop.addEventListener("click", () => {
        window.location.href = "../albumsnoopy/index.html";
    });

    natal.addEventListener("click", () => {
        window.location.href = "../musicatocando5/index.html";
    });
    
    leozin.addEventListener("click", () => {
        window.location.href = "../musicatocando6/index.html";
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
