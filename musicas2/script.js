document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".login-btn");
    const cadastroBtn = document.querySelector(".cadastro-btn");
    const container = document.querySelector(".container");
    
    loginBtn.addEventListener("click", () => {
        window.location.href = "./login/login.html";
    });

    cadastroBtn.addEventListener("click", () => {
        window.location.href = "./cadastro/cadastro.html";
    });
});
