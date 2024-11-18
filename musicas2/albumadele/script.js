document.addEventListener("DOMContentLoaded", () => {
    const musicaBtn = document.querySelector(".musica");
    const inicioBTN = document.querySelector(".inicio");
    const musica1BTN = document.querySelector(".Skyfall")
    
    musicaBtn.addEventListener("click", () => {
        window.location.href = "../musicatocando/index.html";
    });

    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });
    
    musica1BTN.addEventListener("click", () => {
        window.location.href = "../musicatocando4/index.html";
    });
});
