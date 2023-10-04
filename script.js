var timer = 60;
var score = 0;
var hit = 0;
var mob = window.matchMedia("(max-width: 480px)");
var ob = window.matchMedia("(max-width: 351px)");

function bubble(mob,ob) {
    if (ob.matches) {
        var bub = document.querySelector("#bot");
        var bubls = "";
        for (let i = 0; i <48; i++) {
            bubls += `<div class="bubble">${Math.floor(Math.random() * 10)} </div>`;
        }
        bub.innerHTML = bubls;
    }
    else if(mob.matches)
    {
        var bub = document.querySelector("#bot");
        var bubls = "";
        for (let i = 0; i <56; i++) {
            bubls += `<div class="bubble">${Math.floor(Math.random() * 10)} </div>`;
        }
        bub.innerHTML = bubls;
    }
    else 
    {
        var bub = document.querySelector("#bot");
        var bubls = "";
        for (let i = 0; i < 225; i++) {
            bubls += `<div class="bubble">${Math.floor(Math.random() * 10)} </div>`;
        }
        bub.innerHTML = bubls;
    }
}


function runt() {
    var ty = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#bb").textContent = timer;
        }
        else {
            document.querySelector("#bot").innerHTML = "<h2>Game Over</h2> <div id='na'>Host :- Hrishav ratan</div> ";
            document.querySelector("#bot").style.backgroundColor = "rgb(32, 204, 32)";
            window.alert("Your Score is " + score);
            clearInterval(ty);
        }
    }, 1000)
}

function ghit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
}

function inr(sr) {
    return sr += 10;
}

document.querySelector("#bot").addEventListener("click", function (dets) 
{
        if (Number(dets.target.textContent) === hit) {
            score = inr(score);
            document.querySelector("#sr").textContent = score;
            ghit();
            bubble();
        }
})


bubble(mob,ob);
runt();
ghit();