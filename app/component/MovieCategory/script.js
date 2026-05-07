let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (category) {
    if (!category) return "";

    let html = template;
    html = html.replaceAll("{{name}}", category.name);

    let moviesHtml = "";
    
    if (category.movies && category.movies.length > 0) {
        for (let i = 0; i < category.movies.length; i++) {
            let movie = category.movies[i];
            if (window.Movie) {
                moviesHtml += window.Movie.format(movie);
            }
        }
    } else {
        moviesHtml = "<p class='no-movie'>Aucun film dans cette catégorie.</p>";
    }

    html = html.replace("{{movie_list}}", moviesHtml);
    return html;
};

window.MovieCategory = MovieCategory;

export { MovieCategory };