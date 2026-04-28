<?php
require("model.php");

function readMoviesController() {
    $age = isset($_REQUEST['age']) ? $_REQUEST['age'] : 99;
    return readMovies($age);
}

function getCategoriesController() {
    return getCategories();
}

function readMovieCategoriesController() {
    return getAllCategories();
}

function readMoviesByCategoryController() {
    if (isset($_REQUEST['id_cat'])) {
        $age = isset($_REQUEST['age']) ? $_REQUEST['age'] : 99;
        return getMoviesByCategoryId($_REQUEST['id_cat'], $age);
    }
    return false;
}

function readMovieDetailController(){
    return isset($_REQUEST['id']) ? getMovieById($_REQUEST['id']) : false;
}

function addMovieController() {
    if (isset($_REQUEST['name'], $_REQUEST['image'])) {
        return addMovie(
            $_REQUEST['name'], $_REQUEST['director'], $_REQUEST['year'],
            $_REQUEST['length'], $_REQUEST['description'], $_REQUEST['id_category'],
            $_REQUEST['image'], $_REQUEST['trailer'], $_REQUEST['min_age']
        );
    }
    return false; 
}

function addProfileController() {
    return addProfile($_REQUEST['name'], $_REQUEST['avatar'], $_REQUEST['age'], $_REQUEST['id'] ?? null);
}

function readProfilesController() {
    return readProfiles();
}

function addFavoriteController() {
    if (isset($_REQUEST['id_movie'], $_REQUEST['id_profile'])) {
        return addFavorite($_REQUEST['id_movie'], $_REQUEST['id_profile']);
    }
    return false;
}

function readFavoritesController() {
    $age = isset($_REQUEST['age']) ? $_REQUEST['age'] : 99;
    return getFavoritesByProfile($_REQUEST['id_profile'], $age);
}

function saveProfileController() {
    return saveProfile($_REQUEST['id'] ?? null, $_REQUEST['name'], $_REQUEST['avatar'], $_REQUEST['age']);
}

function deleteFavoriteController() {
    if (isset($_REQUEST['id_movie'], $_REQUEST['id_profile'])) {
        return deleteFavorite($_REQUEST['id_movie'], $_REQUEST['id_profile']);
    }
    return false;
}
?>