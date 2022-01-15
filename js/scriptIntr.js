
const fileEs = "es";
let langSelect = document.getElementById("lang-select");
let route;
let page;
let file;
let varLength;

function newURL() {
    route = window.document.URL;
    page = route.split("/").pop();
    varLength = page.length + 1;
    file = route.substring(0, route.length - varLength).split("/").pop();
    route = route.substring(0, route.length - varLength);
}


//Use of Enter key to go to home page.

window.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        newURL();

        if (file.localeCompare(fileEs) !== 0) {
            window.location.href = `${route}/pages/home.html`;
        }
        else {
            window.location.href = `${route}/home.html`;
        };
    };
    
});


//Change the language website.

langSelect.addEventListener('click', changeLang);

function changeLang() {
    newURL();

    if (file.localeCompare(fileEs) !== 0) {
        window.location.href = `${route}/${fileEs}/${page}`;
    }
    else {
        varLength = file.length + 1;
        route = route.substring(0, route.length - varLength);
        window.location.href = `${route}/${page}`;
    }
}

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
