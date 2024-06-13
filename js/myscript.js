let container = document.getElementById("prisultato")

for (let i = 0; i < 64; i++) {
    let quadro = document.createElement("div");
    quadro.classList.add("risultato");

    quadro.addEventListener("click",
        function () {
            this.classList.toggle("sfondoclick");
        }
    );
    console.log(quadro);
    container.appendChild(quadro);

}

