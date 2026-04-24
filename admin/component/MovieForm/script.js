import { DataMovie } from "../../data/dataMovie.js";

let templateFile = await fetch("./component/MovieForm/template.html");
let template = await templateFile.text();

let MovieForm = {};

MovieForm.format = function () {
    return template;
};

MovieForm.listenSubmit = function () {
    const form = document.querySelector("#add-movie-form");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Stop le rechargement

            const formData = new FormData(form); // Récupère tout le formulaire
            const result = await DataMovie.add(formData); // Envoie au PHP

            if (result) {
                alert("Super ! Le film est dans phpMyAdmin.");
                C.handlerMovie(); // On revient à l'accueil pour voir le film
            } else {
                alert("Erreur lors de l'enregistrement.");
            }
        });
    }
};

export { MovieForm };