const container = document.querySelector(".container");
const toggleButton = document.getElementById("toggleBackground");

let isWhite = true; // Variável para rastrear o estado do background atual

toggleButton.addEventListener("click", function () {
    // Alterna o background entre branco e preto
    if (isWhite) {
        container.style.backgroundColor = "black";
        container.style.color = "#0BFE14";

    } else {
        container.style.backgroundColor = "white";
        container.style.color = "black";

    }
    isWhite = !isWhite; // Inverte o estado do background
});
