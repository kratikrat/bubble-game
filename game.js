
var timer = 60;
var score = 0;
var hitrn;
function eventBubbling() {
    document.querySelector("#p-btm").addEventListener("click", function (dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum == hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }

    });
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

function makeBubble() {
    var clutter = ''
    for (var i = 0; i <= 107; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#p-btm").innerHTML = clutter
    gsap.from(".bubble", {
        
        duration: 0.7,
        opacity: 0,
        delay: 0.1,
        backgroundColor:"transparent"
        
    })
}

function runTime() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeinterval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#p-btm").innerHTML = `<div class="game-over">
        <h1 id="game-over">Game Over</h1>
        <div class="elem">
            <h4>High Score:</h4>
            <div id="finalscore">0</div>
        </div>
    </div>`;
            gameOver();
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

function gameOver() {
    function breakText() {
        var h1 = document.querySelector("#game-over")
        var h1Text = h1.textContent
        var splittedText = h1Text.split("")
        var clutter = ""
        splittedText.forEach(function (e) {
            clutter += `<span class="a">${e}</span>`

        })
        h1.innerHTML = clutter

    }
    breakText()
    gsap.from(".a", {
        y: 50,
        duration: 1,
        opacity: 0,
        delay: 0.5,
        stagger: 0.17,
    })
    gsap.from(".game-over .elem", {
        y: 50,
        duration: 1,
        opacity: 0,
        delay: 0.5,
        
    })
document.querySelector("#finalscore").innerHTML=score;

}

function footer(){
    document.getElementById("year").textContent = new Date().getFullYear();}
    footer()
makeBubble();
runTime();
getNewHit();
eventBubbling();
