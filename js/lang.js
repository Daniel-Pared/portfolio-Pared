
let langSelect = document.getElementById("page-selector");
let htmlLang = document.documentElement;
let page;
let route = window.document.URL;
let varLength;
let x;


function newURL () {
    x = route.split("/").pop();
    varLength = x.length + 1;
    route = route.substring(0, route.length - varLength);
}

function changeLanguage () {
    newURL()
    page = x;
    newURL()
    file = x;

    if (file == "es") {
        window.location.href = `${route}/pages/${page}`;

        
    }
    else {
        window.location.href = `${route}/es/${page}`;
    }
}

langSelect.addEventListener('click', changeLanguage);