let URL = "../server/script.php?todo=";

let DataProfile = {};

DataProfile.read = async function () {
    let res = await fetch(URL + "readProfiles");
    return await res.json();
};

DataProfile.add = async function(formData) {
    let query = "saveProfile"; 
    
    query += "&id=" + (formData.get('id') || ""); 
    query += "&name=" + formData.get('name');
    query += "&avatar=" + formData.get('avatar');
    query += "&age=" + formData.get('age');

    let res = await fetch("../server/script.php?todo=" + query);
    return await res.json();
};

export { DataProfile };