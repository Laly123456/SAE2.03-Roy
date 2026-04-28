// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

// Pour la grille d'accueil
DataMovie.requestMovies = async function(age = 0) {
    let res = await fetch("../server/script.php?todo=readmovies&age=" + age);
    return await res.json();
};

// Pour remplir le menu déroulant
DataMovie.requestAllCategories = async function() {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieCategories");
    return await answer.json();
}


// Pour filtrer
DataMovie.requestMoviesByCategory = async function(id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMoviesByCategory&id_cat=" + id);
    return await answer.json();
}

// Pour les détails
DataMovie.requestMovieById = async function(id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieDetail&id=" + id);
    return await answer.json();
};

DataMovie.addFavorite = async function(id_p, id_m) {
    let url = "../server/script.php?todo=addFavorite&id_profile=" + id_p + "&id_movie=" + id_m;
    let res = await fetch(url);
    return await res.json();
};

DataMovie.requestFavorites = async function(id_p) {
    let res = await fetch("../server/script.php?todo=readFavorites&id_profile=" + id_p);
    return await res.json();
};
export { DataMovie };