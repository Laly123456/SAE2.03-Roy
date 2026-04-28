let response = await fetch("./component/ProfileForm/template.html");
let template = await response.text();

let ProfileForm = {};

ProfileForm.format = function() {
    return template;
};

ProfileForm.fill = function(p) {
    const form = document.querySelector("#form-add-profile");
    if (form) {
        form.querySelector("input[name='id']").value = p.id;
        form.querySelector("input[name='name']").value = p.name;
        form.querySelector("input[name='avatar']").value = p.avatar;
        form.querySelector("input[name='age']").value = p.age;
document.querySelector("#form-title").innerText = "Modifier le profil de " + p.name;
        form.querySelector(".btn-submit").innerText = "Enregistrer les modifications";
    }
};

ProfileForm.listenSubmit = function() {
    const form = document.querySelector("#form-add-profile");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); 
            
            console.log("Envoi du profil...");
            let formData = new FormData(form);

            if (window.C && window.C.handlerAddProfile) {
                window.C.handlerAddProfile(formData);
            }
        });
    }
};

export { ProfileForm };