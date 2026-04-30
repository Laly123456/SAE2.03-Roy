let template = await (await fetch("./component/Search/template.html")).text();
let itemTpl = await (await fetch("./component/Search/item.html")).text();
let Search = {}; 
Search.format = function () {
    return template;
};

Search.renderResults = function (movies) {
    var area = document.getElementById("list-area");
    var html = "";
    for (var i = 0; i < movies.length; i++) {
        var m = movies[i];
        var isOn = m.is_featured > 0;
        var row = itemTpl; 
        
        row = row.replace("{{id}}", m.id);
        row = row.replaceAll("{{name}}", m.name);
        row = row.replaceAll("{{image}}", m.image);
        row = row.replaceAll("{{status}}", m.is_featured);
        row = row.replaceAll("{{status_text}}", isOn ? "(En avant)" : "");
        row = row.replaceAll("{{btn_text}}", isOn ? "Retirer" : "Mettre en avant");
        row = row.replaceAll("{{class}}", isOn ? "btn-status--on" : "btn-status--off");
        
        html = html + row;
    }
    area.innerHTML = html;
};

export { Search };