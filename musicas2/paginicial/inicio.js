document.addEventListener("DOMContentLoaded", () => {
    const inicioBTN = document.querySelector(".logo");
    const playlist = document.querySelector(".playlist");
    const album = document.querySelector(".albuns");
    
    album.addEventListener("click", () => {
        window.location.href = "../albuns/index.html";
    });

    playlist.addEventListener("click", () => {
        window.location.href = "../playlist_pers/index.html";
    });

    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });

});
