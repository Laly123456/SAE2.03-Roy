let HOST_URL = ".."; 

let DataProfile = {}; 

DataProfile.read = async function () {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
    return await answer.json();
};

DataProfile.add = async function(formData) {
    const id = formData.get('id'); 
    const name = formData.get('name');
    const avatar = formData.get('avatar');
    const age = formData.get('age');

    let url = `${HOST_URL}/server/script.php?todo=addProfile&name=${name}&avatar=${avatar}&age=${age}`;
    if (id) {
        url += `&id=${id}`;
    }

    let res = await fetch(url);
    return await res.json();
};

export { DataProfile };