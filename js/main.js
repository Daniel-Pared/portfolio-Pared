
let langSelect = document.getElementById("intro-lng-selector");
let size = window.screen.width;
let vid = document.getElementById("bg-video");
let htmlLang = document.documentElement;
let enterLink = document.getElementById('enter-btn');

//Change background video.

function videoSource () {
    if(size >= 913)  {
        if (size >= 1400){
            vid.setAttribute("src", "./media/video/production_ID_4884233-xl.mp4");
        }
        else {
            vid.setAttribute("src", "./media/video/production_ID_4884233-lg.mp4");
        }    
    }
    else {
        vid.setAttribute("src", "./media/video/production_ID_4884233-xs.mp4")
    }
}

window.addEventListener("resize", videoSource);

//Change language.

function changeLanguage () {
    if (langSelect.checked == true) {
        htmlLang.setAttribute("lang", "es");
        document.getElementById('subtitle').innerText = "DESARROLLADOR FRONT-END";
        enterLink.innerText = "ENTRAR";
        enterLink.setAttribute("href", "./es/home.html");
    }
    else {
        htmlLang.setAttribute("lang", "en");
        document.getElementById('subtitle').innerText = "FRONT-END DEVELOPER";
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
