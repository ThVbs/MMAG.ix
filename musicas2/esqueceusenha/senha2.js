document.addEventListener("DOMContentLoaded", () => {
    const senhas = document.querySelector(".senhaAN-btn");
    const senha1 = document.querySelector(".senhaA");
    const senha2 = document.querySelector(".senhaN");

    senhas.addEventListener("click", (event) => {
        event.preventDefault();

        if (senha1.value !== senha2.value) {
            window.location.href = "../login/login.html";
        }else{
            alert("As senhas sao iguais. Tente novamente.");
        }
    });

});
