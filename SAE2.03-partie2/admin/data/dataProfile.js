let URL = "../server/script.php?todo=";

let DataProfile = {};

DataProfile.read = async function () {
    let res = await fetch(URL + "readProfiles");
    return await res.json();
};

DataProfile.add = async function(formData) {
    let p = "addProfile";
    p += "&id=" + formData.get('id');
    p += "&name=" + formData.get('name');
    p += "&avatar=" + formData.get('avatar');
    p += "&age=" + formData.get('age');

    let res = await fetch("../server/script.php?todo=" + p);
    return await res.json();
};

export { DataProfile };