<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require(__DIR__ . "/controller.php");

if (isset($_REQUEST['todo'])) {
    header('Content-Type: application/json');
    $todo = $_REQUEST['todo'];
    $data = false; 

    switch($todo) {
        case 'readmovies':
            $data = readMoviesController();
            break;

        case 'readMovieCategories':
            $data = readMovieCategoriesController();
            break;

        case 'readMoviesGroupedByCategory':
            $data = readMoviesGroupedByCategoryController();
            break;

        case 'readMovieDetail':
            $data = readMovieDetailController();
            break;

        case 'readMoviesByCategory':
            $data = readMoviesByCategoryController();
            break;

        case 'addmovie':
            $data = addMovieController();
            break;

        case 'saveProfile':
            $data = saveProfileController();
            break;

        case 'readProfiles':
            $data = readProfilesController();
            break;

        case 'addFavorite':
            $data = addFavoriteController();
            break;

        case 'deleteFavorite':
            $data = deleteFavoriteController();
            break;

        case 'readFavorites':
            $data = readFavoritesController();
            break;

        case 'getFeatured':
            $data = getFeaturedMoviesController();
            break;

        case 'getStats':
            $data = getStatsController();
            break;

        case 'search':
            $data = searchMoviesController();
            break;

        case 'setPromo':
            $data = setPromoController();
            break;

        default:
            http_response_code(400);
            echo json_encode(['error' => 'Action inconnue']);
            exit();
    }

    if ($data === false) {
        http_response_code(500);
        echo json_encode(['error' => 'Erreur controleur']);
        exit();
    }

    echo json_encode($data);
    exit();
}

http_response_code(404);
?>