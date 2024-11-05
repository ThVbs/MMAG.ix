document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const anitta = document.querySelector(".item10");
    const Skyfall = document.querySelector(".item11");
    const albumAdl = document.querySelector(".albumAdl");
    const usuarioBTN = document.querySelector(".Usuario")

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
});
