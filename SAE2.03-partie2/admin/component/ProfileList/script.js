let res1 = await fetch("./component/ProfileList/template.html");
let template = await res1.text();

let res2 = await fetch("./component/ProfileList/profil.html");
let rowTemplate = await res2.text();

let ProfileList = {};

ProfileList.format = function(profiles) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = template;

    let list = tempDiv.querySelector("#list-profiles-items");
    
    let htmlFinal = "";
    for (let i = 0; i < profiles.length; i++) {
        let p = profiles[i];
        let ligne = rowTemplate.replace("NOM_PROFIL", p.name);
        ligne = ligne.replace("ID_PROFIL", p.id);
        htmlFinal += ligne;
    }

    if(list) {
        list.innerHTML = htmlFinal;
    }

    return tempDiv.innerHTML;
};

export { ProfileList };