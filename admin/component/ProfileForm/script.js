let response = await fetch("./component/ProfileForm/template.html");
let template = await response.text();

let ProfileForm = {};

ProfileForm.format = function() {
    return template;
};

ProfileForm.fill = function(p) {
    let form = document.getElementById("form-add-profile");
    if (!form) return;

    form.elements["id"].value = p.id;
    form.elements["name"].value = p.name;
    form.elements["avatar"].value = p.avatar;
    form.elements["age"].value = p.age;

    document.getElementById("form-title").innerText = "Modifier " + p.name;
    form.querySelector("button").innerText = "Enregistrer";
};

ProfileForm.listenSubmit = function() {
    let form = document.getElementById("form-add-profile");
    if (!form) return;

    form.onsubmit = function(e) {
        e.preventDefault();
        C.handlerAddProfile(new FormData(form));
    };
};

export { ProfileForm };