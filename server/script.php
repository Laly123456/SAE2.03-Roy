<?php




// Activer le rapport d'erreurs PHP
error_reporting(E_ALL);

// Forcer l'affichage des erreurs à l'écran
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);










require("controller.php");

if (isset($_REQUEST['todo'])) {
    header('Content-Type: application/json');
    $todo = $_REQUEST['todo'];
    $data = false; // Par défaut

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
