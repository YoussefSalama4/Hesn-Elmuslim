let audio1 = new Audio('voice1.mp3');
audio1.volume = 0.3;
let pauseButton = document.querySelector(".pause-btn")
let pause = document.getElementById("pause");
pause.onclick = function(){
    if(audio1.paused){
        audio1.play();
        pauseButton.innerHTML = (`<i class="fa-solid fa-pause"></i>`);
    }
    else{
        audio1.pause();
        pauseButton.innerHTML = (`<i class="fa-solid fa-play"></i>`);
    }
}
audio1.addEventListener('ended', function() {
    pauseButton.innerHTML = (`<i class="fa-solid fa-play"></i>`);
});
let menuBtn = document.getElementById("menubtn")
let sideNav = document.getElementById("sideNav")
let menu = document.getElementById("menu")
sideNav.style.right = "-250px";
menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
         menu.src="images/close.png"; //////////////////////
    }
    else{
        sideNav.style.right = "-250px"; 
         menu.src="images/menu.png";  //////////////////////
    }
}
const rootStyles = document.documentElement.style;
let darkmode = document.getElementById("dark");
let lightmode = document.getElementById("light");
darkmode.onclick = function(){
    console.log("clicked")
    rootStyles.setProperty('--main-color', '#16161e');
    rootStyles.setProperty('--second-color', '#1a1b26');
    rootStyles.setProperty('--font-color', 'white');
    rootStyles.setProperty('--font-second-color', '#869ff6');
    rootStyles.setProperty('--zekr-background', '#16161e');

}
lightmode.onclick = function(){
    rootStyles.setProperty('--main-color', '#eaebec');
    rootStyles.setProperty('--second-color', '#eee');
    rootStyles.setProperty('--font-color', '#2c4755');
    rootStyles.setProperty('--font-second-color', '#10cab7');
    rootStyles.setProperty('--zekr-background', 'white');
    
}

let allPages = document.getElementsByClassName("allPgs");
let allLinks = document.getElementsByClassName("allLinks");
let height;
let activePageIdx = 0;
for(let i = 0; i < allLinks.length; i++){
    allLinks[i].onclick = function(){
        for(let j = 0; j < allPages.length; j++){
            allPages[j].style.display = "none";
        }
        allPages[i + 1].style.display = "block";
    }
}
let logo = document.getElementById("navLogo");
let mainPage = document.querySelector(".main-section")
logo.onclick = function(){
    for(let j = 0; j < allPages.length; j++){
        allPages[j].style.display = "none";
    }
    mainPage.style.display = "block";
}

let allZekrs = document.querySelectorAll(".zekr");
let zekrsArray = Array.from(allZekrs);
zekrsArray.forEach((element ,idx) => {
    element.onclick = function(){
        this.style.userSelect = "none";
        let childZekr = this.children[1].children[0].children[1];
        childZekr.innerText--;
        let zekrHeight = this.clientHeight;
        console.log(typeof(childZekr.innerText));
        if(childZekr.innerText === "0"){
            this.style.transform = "translateX(-100vw)";
            setTimeout(() => {
                this.style.display = "none";
            }, 900);
        }
    }
});

function resetZekr(){
    
}


