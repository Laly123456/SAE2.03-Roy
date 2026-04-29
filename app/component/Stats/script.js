let templateString = await (await fetch("./component/Stats/template.html")).text();

let Stats = {};

Stats.format = function (data) {
    let res = templateString;
    res = res.replaceAll("{{total_films}}", data.total_films)
             .replaceAll("{{total_profiles}}", data.total_profiles)
             .replaceAll("{{popular_cat}}", data.popular_cat);
    return res;
};

export { Stats };