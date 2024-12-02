document.addEventListener("DOMContentLoaded", () => {
    const TeleInicio = document.querySelector(".logo");
    const mudarSenha = document.querySelector(".senha2");
    const logout = document.querySelector(".logout");
    const deletar = document.querySelector(".delete");
    
    mudarSenha.addEventListener("click", () => {
        window.location.href = "../esqueceusenha/senha2.html";
    });

    logout.addEventListener("click", () => {
        window.location.href = "../index.html";
    });
    
    deletar.addEventListener("click", () => {
        window.location.href = "../index.html";
    });

    TeleInicio.addEventListener("click", () => {
        window.location.href = "../telainicio/index.html";
    });

});
