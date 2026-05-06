let HOST_URL = ".."; 

let DataMovie = {};

// 1. Pour l'accueil (tous les films)
DataMovie.requestMovies = async function() {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    return await answer.json();
};

// 2. Pour le menu déroulant (liste des catégories)
DataMovie.requestAllCategories = async function() {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieCategories");
    return await answer.json();
};

// 3. Pour filtrer par catégorie
DataMovie.requestMoviesByCategory = async function(id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMoviesByCategory&id_cat=" + id);
    return await answer.json();
};

// 4. Pour les détails d'un film
DataMovie.requestMovieById = async function(id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieDetail&id=" + id);
    return await answer.json();
};

// 5.  Pour ajouter un film par le formulaire
DataMovie.add = async function (formData) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=addmovie", {
    method: "POST",
    body: formData,
  });
  return await answer.json();
};

DataMovie.getCategories = async function() {
    let res = await fetch("../server/script.php?todo=readMovieCategories"); 
    return await res.json();
};


DataMovie.search = async function(q, age) {
    let response = await fetch("../server/script.php?todo=search&q=" + q + "&age=" + age);
    return await response.json();
};

DataMovie.toggleFeatured = async function(id, status) {
    let response = await fetch("../server/script.php?todo=setPromo&id=" + id + "&status=" + status);
    return await response.json();
};




export { DataMovie };