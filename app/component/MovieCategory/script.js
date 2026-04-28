import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (category) {
    let html = template;
    html = html.replace("{{name}}", category.name);

    let moviesHtml = "";
    if (category.movies && category.movies.length > 0) {
        for (let movie of category.movies) {
            moviesHtml += Movie.format(movie);
        }
    } else {
        moviesHtml = "<p class='no-movie'>Aucun film dans cette catégorie.</p>";
    }
    html = html.replace("{{movie_list}}", moviesHtml);
    return html;
};
export { MovieCategory };