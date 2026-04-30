let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout) {
    return template; // Simplifié car hAbout n'est pas utilisé ici
};

NavBar.fillNames = function (categories) {
    setTimeout(function() {
        let list = document.querySelector("#app-nav-categories");
        if (!list) return; 

        let html = ""; 
        for (let c of categories) {
            html += `<li><a href="#" class="nav-dropdown__item" onclick="C.handlerMovieCategory(${c.id})">${c.name}</a></li>`;
        }
        list.innerHTML = html;
    }, 50);
};

NavBar.fillProfiles = function (profiles) {
    setTimeout(function() {
        let list = document.querySelector("#app-nav-profiles");
        if (!list) return;

        let html = "";
        for (let p of profiles) {
            html += `<li>
                <a href="#" class="nav-dropdown__item" onclick="C.handlerSelectProfile(${p.id}, '${p.name}', '${p.avatar}', ${p.age})">
                    ${p.name}
                </a>
            </li>`;
        }
        list.innerHTML = html;
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