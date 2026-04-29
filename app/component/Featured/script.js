let templateString = await (await fetch("./component/Featured/template.html")).text();
let slideString = await (await fetch("./component/Featured/slide.html")).text();

let Featured = {};

Featured.format = function (movies) {
    if (!Array.isArray(movies)) movies = [movies];// si on reçoit un seul film, on le met dans un tableau pour que le reste du code fonctionne
    
    
    let allSlides = "";
    for (let i = 0; i < movies.length; i++) {
        let m = movies[i];// on vérifie que le film existe, sinon on ne l'affiche pas
        if (m) {
            allSlides += slideString.replaceAll("{{id}}", m.id)
            .replaceAll("{{name}}", m.name)
            .replaceAll("{{description}}", m.description)
            .replaceAll("{{affiche}}", m.image_banner);
        }
    }
    return templateString.replace("{{content}}", allSlides);
};
window.C = window.C || {};

C.nextSlide = function() {
    let track = document.querySelector('.track');
    if (track) track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' }); //On vérifie que la track existe bien avant d'essayer de la faire bouger.
    // Faire glisser le rail d'une largeur d'écran avec une animation fluide.
};

C.prevSlide = function() {
    let track = document.querySelector('.track');
    if (track) track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
};

export { Featured };