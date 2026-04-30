<?php
// define("HOST", "localhost");
// define("DBNAME", "SAE203");
// define("DBLOGIN", "laly");
// define("DBPWD", "Laly08122007");
define("HOST", "localhost");
define("DBNAME", "roy80");
define("DBLOGIN", "roy80");
define("DBPWD", "roy80");

function getConnexion() {
    return new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD, [
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
}

function readMovies($age_max = 99) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Movie WHERE min_age <= :age_max");
    $stmt->execute([':age_max' => $age_max]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function getMovieById($id){
    $cnx = getConnexion();
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Movie WHERE id = :id");
    $stmt->execute([":id" => $id]);
    return $stmt->fetch(PDO::FETCH_OBJ);
}

function getMoviesByCategoryId($id_category, $age_max = 99) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Movie WHERE id_category = :id_category AND min_age <= :age_max");
    $stmt->execute([':id_category' => $id_category, ':age_max' => $age_max]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age) {
    $cnx = getConnexion();
    $sql = "INSERT INTO SAE203_Movie (name, director, year, length, description, id_category, image, trailer, min_age) 
            VALUES (:name, :director, :year, :length, :description, :id_category, :image, :trailer, :min_age)";
    $stmt = $cnx->prepare($sql);
    return $stmt->execute([
        ':name' => $name, ':director' => $director, ':year' => $year, ':length' => $length, 
        ':description' => $description, ':id_category' => $id_category, ':image' => $image, 
        ':trailer' => $trailer, ':min_age' => $min_age
    ]);
}

function getAllCategories() {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("SELECT id, name FROM SAE203_Category");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function readProfiles() {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Profile");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function saveProfile($id, $name, $avatar, $age) {
    $cnx = getConnexion();
    $sql = "REPLACE INTO SAE203_Profile (id, name, avatar, age) VALUES (:id, :name, :avatar, :age)";
    $stmt = $cnx->prepare($sql);
    return $stmt->execute([
        ':id'     => $id, 
        ':name'   => $name, 
        ':avatar' => $avatar, 
        ':age'    => $age
    ]);
}

function getFavoritesByProfile($id_profile, $age_max = 99) {
    $cnx = getConnexion();
    $sql = "SELECT m.* FROM SAE203_Movie m JOIN SAE203_Favorite f ON m.id = f.id_movie 
            WHERE f.id_profile = :id_profile AND m.min_age <= :age_max";
    $stmt = $cnx->prepare($sql);
    $stmt->execute([":id_profile" => $id_profile, ":age_max" => $age_max]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function addFavorite($id_movie, $id_profile) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("REPLACE INTO SAE203_Favorite (id_movie, id_profile) VALUES (:id_movie, :id_profile)");
    return $stmt->execute([":id_movie" => $id_movie, ":id_profile" => $id_profile]);
}

function deleteFavorite($id_movie, $id_profile) {
    $cnx = getConnexion();
    $stmt = $cnx->prepare("DELETE FROM SAE203_Favorite WHERE id_movie = :id_movie AND id_profile = :id_profile");
    return $stmt->execute([":id_movie" => $id_movie, ":id_profile" => $id_profile]);
}

function getFeaturedMovies($age_max = 99) {
    $cnx = getConnexion(); 
    $stmt = $cnx->prepare("SELECT * FROM SAE203_Movie WHERE is_featured > 0 AND min_age <= :age_max ORDER BY is_featured ASC");
    $stmt->execute([':age_max' => $age_max]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function getStats() {
    $cnx = getConnexion(); 
    $stats = [];
    $stats['total_films'] = $cnx->query("SELECT COUNT(*) FROM SAE203_Movie")->fetchColumn();
    $stats['total_profiles'] = $cnx->query("SELECT COUNT(*) FROM SAE203_Profile")->fetchColumn();
    
    $res = $cnx->query("SELECT c.name FROM SAE203_Favorite f 
                        JOIN SAE203_Movie m ON f.id_movie = m.id 
                        JOIN SAE203_Category c ON m.id_category = c.id 
                        GROUP BY c.id ORDER BY COUNT(*) DESC LIMIT 1");
    $stats['popular_cat'] = $res->fetch(PDO::FETCH_ASSOC)['name'] ?? "Aucune";
    return $stats;
}

function searchMovies($query, $age_max = 99) {
    $stmt = getConnexion()->prepare("SELECT * FROM SAE203_Movie WHERE name LIKE ? AND min_age <= ?");
    $stmt->execute(["%$query%", $age_max]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}


function set_promo($id, $val) {
    $db = getConnexion();
    $sql = "UPDATE SAE203_Movie SET is_featured = ? WHERE id = ?";
    return $db->prepare($sql)->execute([$val, $id]);
}

?>