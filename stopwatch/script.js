var b = document.querySelector(".buttons");
// console.log(b);
var strt = document.querySelector(".start");
// console.log(st);
const pause = document.getElementById("pause");
const resume = document.getElementById("resume");
const reset = document.getElementById("reset");

var sec = document.querySelector(".sec");
var min = document.querySelector(".min");
var hr = document.querySelector(".hr");

const clearActive = ()=>{
    var btns = document.querySelectorAll('.btn');
    for(var i=0;i<btns.length;i++){
        btns[i].classList.remove('active');
    }
}


const startCounter = ()=>{
    s+=1;

    seconds = s%60;
    minutes = Math.floor(s/60)%60;
    hours = Math.floor(s/3600)%12;

    if(Math.floor(seconds/10)==0){
        sec.textContent = '0'+seconds;
    }
    if(Math.floor(minutes/10)==0){
        min.textContent = '0'+minutes;
    }
    if(Math.floor(hours/10)==0){
        hr.textContent = '0'+hours;
    }
    else{
        sec.textContent = seconds;
        min.textContent = minutes;
        hr.textContent = hours;
    }
    
}

var s = 0;
var m = 0; 
var h = 0;
var watch;
var checker = true;

strt.addEventListener("click", ()=>{
    clearActive();
    strt.classList.add('active');
    if(checker){
        watch = setInterval(startCounter,1000);
    }
});


pause.addEventListener("click", ()=>{
    clearActive();
    pause.classList.add('active');
    clearInterval(watch);
});

resume.addEventListener("click", ()=>{
    clearActive();
    resume.classList.add('active');
    watch = setInterval(startCounter,1000);
});

reset.addEventListener("click", ()=>{
    clearActive();
    reset.classList.add('active');
    h=0;
    m=0;
    s=0;
    clearInterval(watch);
    sec.textContent = '00';
    min.textContent = '00';
    hr.textContent = '00';
});

