const frutas = document.querySelectorAll("li");
const frutaPesquisada = document.querySelector("input");

const teclouEnter = (tecla) => {
    return tecla === "Enter";
};

const filtrarFruta = (array, pesquisa) => {
    array.forEach(item => {
        item.classList.remove("escondida");

        if (pesquisa.value && item.textContent !== pesquisa.value) {
            item.classList.add("escondida");
        }
    })
};

frutaPesquisada.addEventListener("keydown", function (event) {
    if (!teclouEnter(event.code)) {
        return;
    }

    filtrarFruta(frutas, event.target);
});

const limparPesquisa = (pesquisa) => {
    pesquisa.value = "";
}

frutaPesquisada.addEventListener("keydown", function (event) {
    if (!teclouEnter(event.code)) {
        return;
    }

    limparPesquisa(event.target);
});