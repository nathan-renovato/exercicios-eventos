const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("change", function (event) {
        if (input.dataset.resposta === event.target.value) {
            input.classList.add("acerto");
        } else {
            input.classList.add("erro");
        }
    });
});