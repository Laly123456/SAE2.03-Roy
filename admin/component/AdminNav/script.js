let response = await fetch("./component/AdminNav/template.html");
let template = await response.text();

let AdminNav = {};

AdminNav.format = function() {
    return template;
};

AdminNav.listen = function() {
    // Bouton Films
    document.querySelector("#btn-show-movies").addEventListener("click", () => {
        window.C.handlerShowMovieForm();
    });

    // Bouton Profils
    document.querySelector("#btn-show-profiles").addEventListener("click", () => {
        window.C.handlerShowProfileForm();
    });
};

export { AdminNav };