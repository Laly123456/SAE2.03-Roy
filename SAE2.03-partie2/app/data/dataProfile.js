let HOST_URL = ".."; 

let DataProfile = {};

DataProfile.read = async function () {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
    if (answer.ok) {
        return await answer.json();
    }

    console.error("Erreur serveur : " + answer.status);
    return [];
};

DataProfile.add = async function(formData) {

    const name = formData.get('name');
    const avatar = formData.get('avatar');
    const age = formData.get('age');

    const url = "../server/script.php?todo=addProfile&name=" + name + "&avatar=" + avatar + "&age=" + age;
    const res = await fetch(url);
    return await res.json();
};

export { DataProfile };