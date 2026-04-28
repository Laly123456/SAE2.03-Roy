let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (movie) {
    let res = template;

 res = res.replaceAll("{{id}}", movie.id);
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