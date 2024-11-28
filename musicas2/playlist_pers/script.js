document.addEventListener("DOMContentLoaded", () => {
    const playlistItems = document.querySelectorAll(".playlist-item");

    playlistItems.forEach(item => {
        item.addEventListener("click", () => {
            const link = item.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });

    // Botão para logo
    const inicioBTN = document.querySelector(".logo");
    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });

    // Botão para usuário
    const usuarioBTN = document.querySelector(".Usuario");
    usuarioBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });
});
