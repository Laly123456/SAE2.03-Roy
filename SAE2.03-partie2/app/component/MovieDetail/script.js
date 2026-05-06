let MovieDetail = {}; 

let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

MovieDetail.format = function (movie, isFav) {
    let res = template;
    let text = isFav ? "Retirer des favoris" : "Ajouter aux favoris";

    let videoUrl = movie.trailer;


    res = res.replaceAll("{{id}}", movie.id);
    res = res.replaceAll("{{fav_text}}", text); 
    res = res.replaceAll("{{name}}", movie.name);
    res = res.replaceAll("{{image}}", movie.image_banner);
    res = res.replaceAll("{{trailer}}", videoUrl);
    res = res.replaceAll("{{year}}", movie.year);
    res = res.replaceAll("{{length}}", movie.length);
    res = res.replaceAll("{{min_age}}", movie.min_age);
    res = res.replaceAll("{{director}}", movie.director);
    res = res.replaceAll("{{description}}", movie.description);

    return res;
};

export { MovieDetail };