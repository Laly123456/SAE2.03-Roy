let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movie) {
    let html = template;

    html = html.replaceAll("{{id}}", movie.id);
    html = html.replaceAll("{{affiche}}", movie.image);
    html = html.replaceAll("{{titre}}", movie.name);

    return html;
};

export { Movie };