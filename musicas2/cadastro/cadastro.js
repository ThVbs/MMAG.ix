document.addEventListener("DOMContentLoaded", () => {
    const cadastroBTN = document.querySelector(".cadastro-btn");
    const senha1 = document.querySelector(".senha1");
    const senha2 = document.querySelector(".senha2");

    cadastroBTN.addEventListener("click", (event) => {
        event.preventDefault();

        if (senha1.value !== senha2.value) {
            alert("As senhas não correspondem. Tente novamente.");
        }else{
            window.location.href = "../paginicial/inicio.html";
        }
    });

});
