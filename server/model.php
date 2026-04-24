<?php
define("HOST", "localhost");
define("DBNAME", "roy80");
define("DBLOGIN", "roy80");
define("DBPWD", "roy80");


//iteration 1 
function getAllMovies() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT id, name, image FROM SAE203_Movie";
    $stmt = $cnx->query($sql);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}


//iteration 
function getAllCategories() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT id, name FROM SAE203_Category";
    $stmt = $cnx->query($sql);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}


function getMovieById($id){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT * FROM SAE203_Movie WHERE id = :id"; 
    $stmt = $cnx->prepare($sql);
    $stmt->execute([":id" => $id]);
    return $stmt->fetch(PDO::FETCH_OBJ);
}

//iteration 2
function addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "INSERT INTO SAE203_Movie (name, director, year, length, description, id_category, image, trailer, min_age) 
            VALUES (:name, :director, :year, :length, :description, :id_category, :image, :trailer, :min_age)";
    
    $stmt = $cnx->prepare($sql);
    
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':director', $director);
    $stmt->bindParam(':year', $year);
    $stmt->bindParam(':length', $length);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':id_category', $id_category);
    $stmt->bindParam(':image', $image);
    $stmt->bindParam(':trailer', $trailer);
    $stmt->bindParam(':min_age', $min_age);
    
    return $stmt->execute(); 
}

function getMoviesByCategoryId($id_cat) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT id, name, image FROM SAE203_Movie WHERE id_category = :id_cat";
    $stmt = $cnx->prepare($sql);
    $stmt->execute([':id_cat' => $id_cat]);
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

//iteration5
function addProfile($name, $avatar, $min_age) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "INSERT INTO SAE203_Profile (name, avatar, min_age) VALUES (:name, :avatar, :min_age)";
    $stmt = $cnx->prepare($sql);
    return $stmt->execute([
        ":name" => $name,
        ":avatar" => $avatar,
        ":min_age" => $min_age
    ]);
}


// iteration 6 
function readProfiles() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    $rs = $cnx->query("SELECT * FROM SAE203_Profile"); 
    if ($rs) {
        return $rs->fetchAll(PDO::FETCH_ASSOC);
    }
    return []; 
}
?>