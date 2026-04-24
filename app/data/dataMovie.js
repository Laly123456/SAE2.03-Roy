// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

// Pour la grille d'accueil
DataMovie.requestMovies = async function() {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    return await answer.json();
}

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

export { DataMovie };