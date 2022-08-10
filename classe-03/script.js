const botaoInscrever = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const botoesModal = document.querySelectorAll(".modal button");
const botaoConfirmar = document.querySelector(".confirmar");

const inscrever = (event) => {
    const botaoClicado = event.target;

    botaoClicado.textContent = "INSCRITO";
    botaoClicado.classList.add("inscrito");

    botaoClicado.addEventListener("click", function () {
        modal.classList.remove("escondido");
    })
};

botaoInscrever.addEventListener("click", inscrever);

const esconderModal = () => {
    modal.classList.add("escondido")
};

botoesModal.forEach(botao => {
    botao.addEventListener("click", esconderModal)
});

const desinscrever = () => {
    botaoInscrever.textContent = "INSCREVER-SE";
    botaoInscrever.classList.remove("inscrito");
};

botaoConfirmar.addEventListener("click", desinscrever);