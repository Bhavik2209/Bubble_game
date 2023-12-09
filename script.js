var timer = 60;
var score = 0;
var hitrn = 0;

function scoreInt(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter='';
for(var i=1;i<=102;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector('#pbtm').innerHTML=clutter;
}

function runTimer(){
    let ti =setInterval(function(){
        if(timer>=0){
            document.querySelector("#timerval").textContent = timer;
            timer--;
        }
        else{
            clearInterval(ti);
            endgame();
        }
    },1000)
}

document.querySelector("#pbtm")
.addEventListener('click',function(dets){
    cNumber = (Number(dets.target.textContent));
    if(cNumber === hitrn){
        scoreInt();
        makeBubble();
        getNewHit();
    }
});

function endgame(){
    document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER </h1>`;
}

runTimer();
makeBubble();
getNewHit();
