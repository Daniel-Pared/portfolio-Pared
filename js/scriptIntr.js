
const fileEs = "es";
let langSelect = document.getElementById("lang-select");
let route;
let page;
let file;
let varLength;


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

//langSelect.addEventListener('click', changeLang);


langSelect.addEventListener('click', changeLanguage);

function changeLanguage () {
    element.lang = "es";
}

function newURL() {
    route = window.document.URL;
    page = route.split("/").pop();
    varLength = page.length + 1;
    file = route.substring(0, route.length - varLength).split("/").pop();
    route = route.substring(0, route.length - varLength);
}

//function changeLang() {
//    newURL();
//
//    if (file.localeCompare(fileEs) !== 0) {
//        window.location.href = `${route}/${fileEs}/${page}`;
//    }
//    else {
//        varLength = file.length + 1;
//        route = route.substring(0, route.length - varLength);
//        window.location.href = `${route}/${page}`;
//    }
//}

//Change background video.

window.addEventListener("resize", videoSource)


function videoSource () {
    let size = window.screen.width;
    let vid = document.getElementById("bg-video");

    if(size >= 500)  {
        if (size >= 1024){
            vid.setAttribute("src", "./media/video/bg_video_lg.mp4");
        }
        else {
            vid.setAttribute("src", "./media/video/bg_video_md.mp4");
        }    
    }
    else {
        vid.setAttribute("src", "./media/video/bg_video_xs.mp4")
    }
}