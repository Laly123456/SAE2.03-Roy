let templateString = await (await fetch("./component/CategoryBar/template.html")).text();
let itemString = await (await fetch("./component/CategoryBar/item.html")).text();

let CategoryBar = {};

CategoryBar.format = function (categories) {
    if (!Array.isArray(categories)) categories = [categories];
    let allButtons = "";
    for (let i = 0; i < categories.length; i++) {
        let c = categories[i];
        if (c) {
            allButtons += itemString.replaceAll("{{id}}", c.id).replaceAll("{{name}}", c.name);
        }
    }
    return templateString.replace("{{content}}", allButtons);
};

export { CategoryBar };