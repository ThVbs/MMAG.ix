document.addEventListener("DOMContentLoaded", () => {
    const inicioBTN = document.querySelector(".logo");
    
    inicioBTN.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });

});
const usuarioBTN = document.querySelector(".Usuario");
usuarioBTN.addEventListener("click", () => {
    window.location.href = "../paginicial/inicio.html";
});