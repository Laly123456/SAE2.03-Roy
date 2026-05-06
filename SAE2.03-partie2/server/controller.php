<?php
require("model.php");

function readMoviesController() {
    return readMovies($_REQUEST['age'] ?? 99);
}

function readMovieCategoriesController() {
    return getAllCategories();
}

function readMoviesGroupedByCategoryController() {
    $age = $_REQUEST['age'] ?? 99;
    $categories = getAllCategories();
    foreach($categories as $cat) {
        $cat->movies = getMoviesByCategoryId($cat->id, $age);
    }
    return $categories;
}

function readMoviesByCategoryController() {
    if (isset($_REQUEST['id_cat'])) {
        return getMoviesByCategoryId($_REQUEST['id_cat'], $_REQUEST['age'] ?? 99);
    }
    return false;
}

function readMovieDetailController(){
    return isset($_REQUEST['id']) ? getMovieById($_REQUEST['id']) : false;
}

function addMovieController() {
    if (isset($_REQUEST['name'])) {
        return addMovie(
            $_REQUEST['name'], $_REQUEST['director'], $_REQUEST['year'],
            $_REQUEST['length'], $_REQUEST['description'], $_REQUEST['id_category'],
            $_REQUEST['image'], $_REQUEST['trailer'], $_REQUEST['min_age']
        );
    }
    return false; 
}

function saveProfileController() {
    return saveProfile($_REQUEST['id'] ?? null, $_REQUEST['name'], $_REQUEST['avatar'], $_REQUEST['age']);
}

function readProfilesController() {
    return readProfiles();
}

function addFavoriteController() {
    return addFavorite($_REQUEST['id_movie'], $_REQUEST['id_profile']);
}

function deleteFavoriteController() {
    return deleteFavorite($_REQUEST['id_movie'], $_REQUEST['id_profile']);
}

function readFavoritesController() {
    return getFavoritesByProfile($_REQUEST['id_profile'], $_REQUEST['age'] ?? 99);
}

function getFeaturedMoviesController() {
    return getFeaturedMovies($_REQUEST['age'] ?? 99);
}

function getStatsController() {
    return getStats();
}

function searchMoviesController() {
    $q = $_REQUEST['q'] ?? "";
    $age = $_REQUEST['age'] ?? 99;
    return searchMovies($q, $age); 
}

function setPromoController() {
    $id = $_REQUEST['id'] ?? 0;
    $status = $_REQUEST['status'] ?? 0;
    return set_promo($id, $status);
}