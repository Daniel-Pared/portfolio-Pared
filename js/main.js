

const filePage = "pages"
const fileEs = "es";
const index = "index.html";
let langSelect = document.getElementById("lang-select");
let route;
let page;
let file;
let varLength;

function asingValues () {
    route = window.document.URL;
    page = route.split("/").pop();
    varLength = page.length + 1;
    file = route.substring(0, route.length - varLength).split("/").pop();
    route = route.substring(0, route.length - varLength);
};

function newURL() {
    if (file.localeCompare(filePage) == 0 || file.localeCompare(fileEs) == 0) {
        varLength = file.length + 1;
        route = route.substring(0, route.length - varLength);    
    }
};


//Change the language website.

langSelect.addEventListener('click', changeLang);

function changeLang() {
    asingValues();
    newURL();

    if  (langSelect.checked === true) {
        window.location.href = `${route}/${fileEs}/${page}`;
    }
    else if (langSelect.checked == false) {
        window.location.href = `${route}/${filePage}/${page}`;
    }
};


// Menu activation.

let menuButton = document.getElementById("menu-icon");
let hideMenu = document.getElementById("down-header");
let active = true;


menuButton.addEventListener('click', activeMenu);

function activeMenu() {
    if (active == true) {
        hideMenu.style.display="block";
        active = false;
    }
    else {
        hideMenu.style.display="none";
        active = true;
    }
    return active;        
};