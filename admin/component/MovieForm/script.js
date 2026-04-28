import { DataMovie } from "../../data/dataMovie.js";

let templateFile = await fetch("./component/MovieForm/template.html");
let template = await templateFile.text();

let MovieForm = {};

MovieForm.format = function () {
    return template;
};
MovieForm.fillCategories = function (categories) {
    const select = document.querySelector("select[name='id_category']");
    if (select) {
        let html = "";
        categories.forEach(cat => {
            html += `<option value="${cat.id}">${cat.name}</option>`;
        });
        select.innerHTML = html;
    }
};

MovieForm.listenSubmit = function () {
    const form = document.querySelector("#add-movie-form");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); 

            const formData = new FormData(form); 
            const result = await DataMovie.add(formData); 

            if (result) {
                alert("Super ! Le film est dans phpMyAdmin.");
                C.handlerMovie();
            } else {
                alert("Erreur lors de l'enregistrement.");
            }
        });
    }
};

export { MovieForm };