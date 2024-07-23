var timer = 3;
var score = 0;
var hitrn = 0;

function makehit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector(".box").textContent = hitrn;
}

function maketimer() {
    clearInterval(timerInterval);
    timer = 3;
    document.querySelector("#time").textContent = timer;

    timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        } else {
            clearInterval(timerInterval);
            makehit();
            maketimer();
            makebubble();
        }
    }, 1000);
}

var timerInterval;

function makescore() {
    score += 10;
    document.querySelector("#scores").textContent = score;
}

function makebubble() {
    var bbl = "";
    for (var i = 0; i < 40; i++) {
        rn = Math.floor(Math.random() * 10)
        bbl += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = bbl;
}

document.querySelector("#pbtm").addEventListener(
    "click", function (dtls) {
        var clickednum = Number(dtls.target.textContent);
        if (clickednum === hitrn) {
            makescore();
            maketimer();
            makebubble();
            makehit();
        }
        else {
            alert("wrong one")
        }
    }
);

maketimer();
makebubble();
makehit();
