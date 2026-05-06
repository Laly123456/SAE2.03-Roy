let ProfilePicker = {};

ProfilePicker.format = function (profiles) {
    let html = `<div class="profile-selection">
                    <h1>Qui regarde ?</h1>
                    <div class="profile-list">`;

    profiles.forEach(p => {
        // On utilise une image par défaut si l'avatar est cassé
        let avatar = p.avatar ? p.avatar : "./img/default-avatar.png";
        html += `
            <div class="profile-card" onclick="C.handlerSelectProfile(${p.id}, '${p.name}')">
                <img src="${avatar}" alt="${p.name}">
                <p>${p.name}</p>
            </div>`;
    });

    html += `</div></div>`;
    return html;
};

export { ProfilePicker };