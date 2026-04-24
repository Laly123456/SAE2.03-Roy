let response = await fetch("./component/ProfileForm/template.html");
let template = await response.text();

let ProfileForm = {};

// Cette fonction sert à afficher le formulaire
ProfileForm.format = function() {
    return template;
};

// Cette fonction active l'écoute du bouton submit
ProfileForm.listenSubmit = function() {
    const form = document.querySelector("#form-add-profile");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            
            console.log("Envoi du profil...");
            
            // On récupère toutes les données du formulaire
            let formData = new FormData(form);
            
            // On appelle le handler dans l'index.html
            // C'est ce handler qui appellera DataProfile.add
            if (window.C && window.C.handlerAddProfile) {
                window.C.handlerAddProfile(formData);
            }
        });
    }
};

export { ProfileForm };