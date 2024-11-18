document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const anitta = document.querySelector(".item10");
    const Skyfall = document.querySelector(".item11");
    const albumAdl = document.querySelector(".albumAdl");
    const usuarioBTN = document.querySelector(".Usuario");
    const albumBebeto = document.querySelector(".bebeto");
    const albumMadonna = document.querySelector(".Madonna");
    const albumBeyonce = document.querySelector(".beyonce");
    const albumSnoop = document.querySelector(".snoop")

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
});
