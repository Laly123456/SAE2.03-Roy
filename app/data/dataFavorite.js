let HOST_URL = "..";

let DataFavorite = {};
DataFavorite.read = async function(id_profile, age = 99) {
    let url = `${HOST_URL}/server/script.php?todo=readFavorites&id_profile=${id_profile}&age=${age}`;
    let answer = await fetch(url);
    return await answer.json();
};

DataFavorite.add = async function(id_movie, id_profile) {
    let url = `${HOST_URL}/server/script.php?todo=addFavorite&id_movie=${id_movie}&id_profile=${id_profile}`;
    let answer = await fetch(url);
    return await answer.json();
};

DataFavorite.delete = async function(id_movie, id_profile) {
    let url = `${HOST_URL}/server/script.php?todo=deleteFavorite&id_movie=${id_movie}&id_profile=${id_profile}`;
    let answer = await fetch(url);
    return await answer.json();
};

export { DataFavorite };