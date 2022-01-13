

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

//Change background video [---- IN CONSTRUCTION -----].

let screenWidth = window.screen.width;
console.log(screenWidth);

window.addEventListener("resize", getScreenReSize);

function getScreenReSize () {
    let x = window.screen.width;
    console.log(x);
};

//let video = document.getElementById("bg-video");
//var videoSource = video.getElementsByTagName("source");
//var video1 = videoSource[1];
//console.log(video1);

//if (screenW >= 576) {
//    video1.onplay();
 //   console.log(videoSource);
//}






//Use of Enter key to go to home page.

window.addEventListener("keydown", (event) => {
    asingValues();
    if (event.key === 'Enter' && page.localeCompare(index) === 0) {
        let indexEs = file.localeCompare(fileEs);

        if (indexEs === 0) {
            window.location.href = `${route}/home.html`;
        }
        else {
            window.location.href = `${route}/${filePage}/home.html`;
        };
    };
    
});


//Change the language website.

langSelect.addEventListener('click', changeLang);

function changeLang() {
    asingValues();
    newURL();

    if  (langSelect.checked === false && page.localeCompare(index) === 0) {
        window.location.href = `${route}/${page}`;
    }
    else if (langSelect.checked == false && page.localeCompare(index) !== 0) {
        window.location.href = `${route}/${filePage}/${page}`;
    }
    else {
        window.location.href = `${route}/${fileEs}/${page}`;
    };
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