let HOST_URL = ".."; 

let DataProfile = {};
DataProfile.add = async function (formData) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addProfile", {
        method: "POST",
        body: formData, 
    });
    return await answer.json();
};

export { DataProfile };