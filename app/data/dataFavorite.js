let HOST_URL = ".."; 

let DataFavorite = {};

/** 
 // Ajoute un film aux favoris d'un profil
 * @param {number} id_movie 
 * @param {number} id_profile 
 
/**
 * Récupère la liste des favoris pour un profil spécifique
 * @param {number} id_profile 
 * @param {number} age 
*/
DataFavorite.read = async function(id_profile, age = 99) {
    let url = `${HOST_URL}/server/script.php?todo=readFavorites&id_profile=${id_profile}&age=${age}`;
    let answer = await fetch(url);
    return await answer.json();
};

export { DataFavorite };