let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout) {
    return template.replace("{{hAbout}}", hAbout);
};

NavBar.fillNames = function (categories) {
    let list = document.querySelector("#dropdown-categories");
    if (list) {
        list.innerHTML = categories.map(c => 
            `<li><a href="#" onclick="C.handlerMovieCategory(${c.id})">${c.name}</a></li>`
        ).join('');
    }
};

NavBar.fillNames = function (categories) {
    let list = document.querySelector("#dropdown-categories");
    // On vérifie si l'élément existe vraiment avant de remplir
    if (list) {
        list.innerHTML = categories.map(c => 
            `<li><a href="#" onclick="C.handlerMovieCategory(${c.id})">${c.name}</a></li>`
        ).join('');
    }
};

NavBar.activeProfile = function (name, avatar) {
    // On ne cherche plus le texte "PROFIL" car il n'est pas dans ton HTML
    const img = document.querySelector("#nav-avatar");
    
    // On met à jour l'image de l'avatar dans la Nav
    if (img && avatar && avatar !== "undefined" && avatar !== "null") {
        img.src = avatar;
    }
};

export { NavBar };