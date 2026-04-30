<?php


error_reporting(E_ALL);

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);




require(__DIR__ . "/controller.php");

if (isset($_REQUEST['todo'])) {
    header('Content-Type: application/json');
    $todo = $_REQUEST['todo'];
    $data = false; 
    $age = isset($_REQUEST['age']) ? $_REQUEST['age'] : 99;

    switch($todo) {
        case 'readmovies':
            $data = readMoviesController();
            break;

        case 'readMovieCategories':
            $data = readMovieCategoriesController();
            break;

        case 'addmovie':
            $data = addMovieController();
            break;

        case 'readMovieDetail':
            $data = readMovieDetailController();
            break;

        case 'readMoviesByCategory':
            $data = readMoviesByCategoryController();
            break;

         case 'addProfile':
            $data = addProfileController();
            break;

        case 'readProfiles':
            $data = readProfilesController();
            break;

        case 'addFavorite':
            $data = addFavoriteController();
            break;

        case 'readFavorites':
            $data = readFavoritesController();
            break;

        case 'deleteFavorite':
             $data = deleteFavoriteController();
             break;

        case 'getFeatured':
              $data = getFeaturedMovies($age); 
              break; 

        case 'getStats': 
              $data = getStatsController(); 
              break;

        case 'search':
              $data = searchMovies($_REQUEST['q'] ?? '', $age);
              break;

        default:
            http_response_code(400);
            echo json_encode('[error] Unknown todo value');
            exit();
    }

    if ($data === false) {
        http_response_code(500);
        echo json_encode('[error] Controller returns false');
        exit();
    }

    http_response_code(200);
    echo json_encode($data);
    exit();
}

http_response_code(404);
?>
