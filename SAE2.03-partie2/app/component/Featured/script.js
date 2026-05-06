let templateString = await (await fetch("./component/Featured/template.html")).text();
let slideString = await (await fetch("./component/Featured/slide.html")).text();

let Featured = {};

Featured.format = function (movies) {
    if (!Array.isArray(movies)) {
        movies = [movies];
    }
    
    let allSlides = "";
    for (let i = 0; i < movies.length; i++) {
        let m = movies[i];
        if (m) {
            let slide = slideString.replaceAll("{{id}}", m.id);
            slide = slide.replaceAll("{{name}}", m.name);
            slide = slide.replaceAll("{{description}}", m.description);
            slide = slide.replaceAll("{{affiche}}", m.image_banner);
            allSlides += slide;
        }
    }

    setTimeout(function() {
        Featured.initAutoPlay();
    }, 500);

    return templateString.replace("{{content}}", allSlides);
};

Featured.initAutoPlay = function() {
    let track = document.querySelector('.hero-carousel__content');
    if (!track) return;

    if (window.carouselInterval) {
        clearInterval(window.carouselInterval);
    }

    window.carouselInterval = setInterval(function() {
        let positionActuelle = track.scrollLeft + track.offsetWidth;
        let finDuContenu = track.scrollWidth - 10;

        if (positionActuelle >= finDuContenu) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
        }
    }, 5000);
};

window.C = window.C || {};

C.nextSlide = function() {
    let track = document.querySelector('.hero-carousel__content');
    if (track) {
        track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
    }
};

C.prevSlide = function() {
    let track = document.querySelector('.hero-carousel__content');
    if (track) {
        track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
    }
};

export { Featured };