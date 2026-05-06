let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.toggleMenu = function(id) {
    let menu = document.querySelector("#" + id);
    if (menu) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }
};

NavBar.format = function (hAbout) {
    return template; 
};


NavBar.fillProfiles = function (profiles) {
    setTimeout(function() {
        const list = document.querySelector("#app-nav-profiles");
        const template = document.querySelector("#tpl-profile-item");
        if (!list || !template) return;

        list.innerHTML = ""; // On vide la liste actuelle

        profiles.forEach(p => {
            // 1. On clone le modèle HTML défini dans le template
            const clone = template.content.cloneNode(true);
            const link = clone.querySelector(".nav-dropdown__item");

            // 2. On remplit les données issues de la BDD
            link.textContent = p.name;
            
            // 3. On définit l'action au clic
            link.onclick = (e) => {
                e.preventDefault();
                C.handlerSelectProfile(p.id, p.name, p.avatar, p.age);
            };

            // 4. On ajoute le résultat dans le menu
            list.appendChild(clone);
        });
    }, 50);
};

NavBar.activeProfile = function (name, avatar) {
    let img = document.querySelector("#nav-avatar-img");
    if (!img) return;

    if (!avatar || avatar === "null" || avatar === "undefined") {
        img.src = "../server/images/Profile/profil.jpg";
    } else {
        img.src = "../server/images/Profile/" + avatar;
    }
};

export { NavBar };