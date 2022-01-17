
let langSelect = document.getElementById("lang-select");

//Change background video.

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

window.addEventListener("resize", videoSource);

//Change language.

function changeLanguage () {
    let htmlLang = document.documentElement;
    let enterLink = document.getElementById('enter-btn');

    if (langSelect.checked == true) {
        htmlLang.setAttribute("lang", "es");
        document.getElementById('subtittle').innerText = "DESARROLLADOR FRONT-END";
        enterLink.innerText = "ENTRAR";
        enterLink.setAttribute("href", "./es/home.html");
        
    }
    else {
        htmlLang.setAttribute("lang", "en");
        document.getElementById('subtittle').innerText = "FRONT-END DEVELOPER";
        enterLink.innerText = "ENTER";
        enterLink.setAttribute("href", "./pages/home.html");
    }
}

langSelect.addEventListener('click', changeLanguage);

//Used when the page is open the first time.

function watch () {
    videoSource();
}

watch();

function newURL() {
    route = window.document.URL;
    page = route.split("/").pop();
    varLength = page.length + 1;
    file = route.substring(0, route.length - varLength).split("/").pop();
    route = route.substring(0, route.length - varLength);
}


//Use of Enter key to go to home page.

window.addEventListener("keydown", (event) => {
<<<<<<< HEAD
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
=======

    if (event.key === 'Enter') {
        if (langSelect.checked == true) {
            window.location.href = "./es/home.html";
        }
        else {
            window.location.href = "./pages/home.html";
        }
    } 
});
>>>>>>> script
