
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


//Use of Enter key to go to home page.

window.addEventListener("keydown", (event) => {

    if (event.key === 'Enter') {
        if (langSelect.checked == true) {
            window.location.href = "./es/home.html";
        }
        else {
            window.location.href = "./pages/home.html";
        }
    } 
});