let HOST_URL = ".."; 

let DataProfile = {};

DataProfile.read = async function () {
    // On enlève le "/" devant server pour éviter les erreurs de chemin absolu
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
    if (answer.ok) {
        return await answer.json();
    }
    // Si ça ne marche pas, on affiche l'erreur pour comprendre pourquoi
    console.error("Erreur serveur : " + answer.status);
    return [];
};

export { DataProfile };