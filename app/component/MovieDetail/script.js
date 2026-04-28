let MovieDetail = {}; 
let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();
MovieDetail.format = function (movie, isFav) {
    let res = template;
    let text = isFav ? "Retirer des favoris" : "Ajouter aux favoris";

    res = res.replaceAll("{{id}}", movie.id);
    res = res.replace("{{fav_text}}", text); 
    res = res.replace("{{name}}", movie.name);
    res = res.replace("{{trailer}}", movie.trailer);
    res = res.replace("{{year}}", movie.year);
    res = res.replace("{{length}}", movie.length);
    res = res.replace("{{min_age}}", movie.min_age);
    res = res.replace("{{director}}", movie.director);
    res = res.replace("{{description}}", movie.description);

    return res;
};

export { MovieDetail };