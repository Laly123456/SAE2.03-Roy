<?php
define("HOST", "localhost");
define("DBNAME", "roy80");
define("DBLOGIN", "roy80");
define("DBPWD", "roy80");

function getConnexion() {
    return new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD, [PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"]);
}

function readMovies($age_max = 99) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Movie WHERE min_age <= :age");
    $stmt->execute([':age' => $age_max]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function getMovieById($id){
    $cnx = getConnexion();
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Movie WHERE id = :id");
    $stmt->execute([":id" => $id]);
    return $stmt->fetch(PDO::FETCH_OBJ);
}

function getMoviesByCategoryId($id_cat, $age_max = 99) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Movie WHERE id_category = :id_cat AND min_age <= :age");
    $stmt->execute([':id_cat' => $id_cat, ':age' => $age_max]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function getCategories() {
    return getConnexion()->query("SELECT * FROM SAE203_Category ORDER BY name ASC")->fetchAll(PDO::FETCH_ASSOC);
}

function getAllCategories() {
    return getConnexion()->query("SELECT id, name FROM SAE203_Category")->fetchAll(PDO::FETCH_OBJ);
}

function readProfiles() {
    return getConnexion()->query("SELECT * FROM SAE203_Profile")->fetchAll(PDO::FETCH_OBJ);
}

function addProfile($name, $avatar, $age, $id = null) {
    $cnx = getConnexion();
    $sql = $id ? "REPLACE INTO SAE203_Profile (id, name, avatar, age) VALUES (:id, :n, :av, :age)" 
               : "INSERT INTO SAE203_Profile (name, avatar, age) VALUES (:n, :av, :age)";
    $stmt = $cnx->prepare($sql);
    $params = [':n' => $name, ':av' => $avatar, ':age' => $age];
    if($id) $params[':id'] = $id;
    return $stmt->execute($params);
}

function getFavoritesByProfile($id_profile, $age_max = 99) {
    $cnx = getConnexion();
    $sql = "SELECT m.* FROM SAE203_Movie m JOIN SAE203_Favorite f ON m.id = f.id_movie 
            WHERE f.id_profile = :id_p AND m.min_age <= :age";
    $stmt = $cnx->prepare($sql);
    $stmt->execute([":id_p" => $id_profile, ":age" => $age_max]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age) {
    $cnx = getConnexion();
    $sql = "INSERT INTO SAE203_Movie (name, director, year, length, description, id_category, image, trailer, min_age) 
            VALUES (:name, :director, :year, :length, :description, :id_category, :image, :trailer, :min_age)";
    return $cnx->prepare($sql)->execute([
        ':name' => $name, ':director' => $director, ':year' => $year, ':length' => $length, 
        ':description' => $description, ':id_category' => $id_category, ':image' => $image, 
        ':trailer' => $trailer, ':min_age' => $min_age
    ]);
}

function saveProfile($id, $name, $avatar, $age) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("REPLACE INTO SAE203_Profile (id, name, avatar, age) VALUES (:id, :n, :av, :age)");
    return $stmt->execute([':id' => $id, ':n' => $name, ':av' => $avatar, ':age' => $age]);
} 

function addFavorite($id_movie, $id_profile) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("REPLACE INTO SAE203_Favorite (id_movie, id_profile) VALUES (:id_m, :id_p)");
    return $stmt->execute([":id_m" => $id_movie, ":id_p" => $id_profile]);
}

function deleteFavorite($id_movie, $id_profile) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("DELETE FROM SAE203_Favorite WHERE id_movie = :id_m AND id_profile = :id_p");
    return $stmt->execute([":id_m" => $id_movie, ":id_p" => $id_profile]);
}

function getFeaturedMovies($age_max = 99) {
    $cnx = getConnexion(); 
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Movie WHERE is_featured > 0 AND min_age <= :age ORDER BY is_featured ASC");
    $stmt->execute([':age' => $age_max]);
    
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}


function getStats() {
    $cnx = getConnexion(); 
    $stats = [];
    // Nombre total de films
    $res = $cnx->query("SELECT COUNT(*) as total FROM SAE203_Movie");
    $stats['total_films'] = $res->fetch(PDO::FETCH_ASSOC)['total'];
    // Nombre total de profils
    $res = $cnx->query("SELECT COUNT(*) as total FROM SAE203_Profile");
    $stats['total_profiles'] = $res->fetch(PDO::FETCH_ASSOC)['total'];
    // Catégorie la plus populaire
    $res = $cnx->query("SELECT c.name FROM SAE203_Favorite f 
                        JOIN SAE203_Movie m ON f.id_movie = m.id 
                        JOIN SAE203_Category c ON m.id_category = c.id 
                        GROUP BY c.id ORDER BY COUNT(*) DESC LIMIT 1");
    $stats['popular_cat'] = $res->fetch(PDO::FETCH_ASSOC)['name'] ?? "Aucune";

    return $stats;
}

function searchMovies($q, $age = 99) {
    $stmt = getConnexion()->prepare("SELECT * FROM SAE203_Movie WHERE name LIKE ? AND min_age <= ?");
    $stmt->execute(["%$q%", $age]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}
?>