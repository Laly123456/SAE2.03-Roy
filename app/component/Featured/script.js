let templateString = await (await fetch("./component/Featured/template.html")).text();
let slideString = await (await fetch("./component/Featured/slide.html")).text();

let Featured = {};

Featured.format = function (movies) {
    if (!Array.isArray(movies)) movies = [movies];
    
    let allSlides = "";
    for (let m of movies) {
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
    let track = document.querySelector('.hero-carousel__track');
    if (track) track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
};

C.prevSlide = function() {
    let track = document.querySelector('.hero-carousel__track');
    if (track) track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
};

export { Featured };