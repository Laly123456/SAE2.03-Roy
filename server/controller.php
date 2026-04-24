<?php
require("model.php");

/* ITÉRATION 4  */
function readMoviesController() {
    return getAllMovies();
}

function readMovieCategoriesController() {
    return getAllCategories();
}

function readMoviesByCategoryController() {
    if (isset($_REQUEST['id_cat'])) {
        return getMoviesByCategoryId($_REQUEST['id_cat']);
    }
    return false;
}

/* ITÉRATION 2 */
function readMovieDetailController(){
    if(isset($_REQUEST['id'])){
        return getMovieById($_REQUEST['id']);
    }
    return false;
}

/*ITÉRATION 3 */
function addMovieController() {
    if (isset($_REQUEST['name']) && !empty($_REQUEST['name']) && isset($_REQUEST['image'])) {
        
        return addMovie(
            $_REQUEST['name'],
            $_REQUEST['director'] ,
            $_REQUEST['year'] ,
            $_REQUEST['length'] ,
            $_REQUEST['description'] ,
            $_REQUEST['id_category'] ,
            $_REQUEST['image'],
            $_REQUEST['trailer'] ,
            $_REQUEST['min_age'] 
        );
    }
    return false; 
}

//iteration 5

function addProfileController() {
    if (isset($_REQUEST['name']) && !empty($_REQUEST['name'])) {
        return addProfile(
            $_REQUEST['name'],
            $_REQUEST['avatar'] ?? "",
            $_REQUEST['min_age'] ?? 0
        );
    }
    return false;
}

//iteration 6 
function readProfilesController() {
    return readProfiles();
}
?>