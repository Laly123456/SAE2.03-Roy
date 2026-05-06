let response = await fetch("./component/MovieForm/template.html");
let template = await response.text();

let MovieForm = {};

MovieForm.format = function () {
    return template;
};

MovieForm.fillCategories = function (categories) {
    let select = document.querySelector("select[name='id_category']");
    if (!select) return;

    let html = "";
    for (let i = 0; i < categories.length; i++) {
        let c = categories[i]; 
        html = html + "<option value='" + c.id + "'>" + c.name + "</option>";
    }
    select.innerHTML = html;
};

MovieForm.listenSubmit = function () {
    let form = document.getElementById("add-movie-form");
    if (form) {
        form.onsubmit = function (event) {
            event.preventDefault();
            C.handlerAddMovie(new FormData(form));
        };
    }
};

export { MovieForm };