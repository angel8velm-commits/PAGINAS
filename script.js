document.addEventListener("DOMContentLoaded", function() {

    const acordeones = document.querySelectorAll(".acordeon");

    acordeones.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

        });

    });
});

const botonMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu-desplegable");

if(botonMenu){

    botonMenu.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

}

function calificarQuiz(){

    let puntos = 0;

    const respuestas = document.querySelectorAll(
        'input[type="radio"]:checked'
    );

    respuestas.forEach(respuesta => {
        puntos += parseInt(respuesta.value);
    });

    document.getElementById("resultado").innerHTML =
        "Tu puntuación es: " + puntos + " / 5";

}