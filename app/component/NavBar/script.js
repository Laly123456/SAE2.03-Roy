let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout) {
    return template.replace("{{hAbout}}", hAbout);
};

NavBar.fillNames = function (categories) {
    setTimeout(function() {
        let list = document.querySelector("#dropdown-categories");
        if (!list) return; 

        let html = ""; 
        for (let i = 0; i < categories.length; i++) {
            let c = categories[i];
            html += `<li><a href="#" onclick="C.handlerMovieCategory(${c.id})">${c.name}</a></li>`;
        }
        list.innerHTML = html;
    }, 50);
};

NavBar.fillProfiles = function (profiles) {
    setTimeout(function() {
        let list = document.querySelector("#dropdown-profiles");
        if (!list) return;

        let html = "";
        for (let i = 0; i < profiles.length; i++) {
            let p = profiles[i];
            html += `<li>
                <a href="#" onclick="C.handlerSelectProfile(${p.id}, '${p.name}', '${p.avatar}', ${p.age})">
                    ${p.name}
                </a>
            </li>`;
        }
        list.innerHTML = html;
    }, 50);
};


NavBar.activeProfile = function (name, avatar) {
    let img = document.querySelector("#nav-avatar");
    if (!img) return;

    if (!avatar || avatar === "null" || avatar === "undefined") {
        img.src = "../server/images/Profile/profil.jpg";
    } else {
        img.src = "../server/images/Profile/" + avatar;
    }
};

export { NavBar };