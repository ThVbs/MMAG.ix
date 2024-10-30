document.addEventListener("DOMContentLoaded", () => {
    const forgotPassword = document.querySelector(".forgot-password");
    const loginBTN = document.querySelector(".login-btn")

    if (forgotPassword) {
        forgotPassword.addEventListener("click", (event) => {
            event.preventDefault(); 
            window.location.href = "../esqueceusenha/senha2.html";
        });
    }

    loginBTN.addEventListener("click", () => {
        window.location.href = "../paginicial/inicio.html";
    });
});

