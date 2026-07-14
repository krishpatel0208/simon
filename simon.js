let gameseq=[];
let userseq=[];

let btns=["yellow" , "blue" , "green" , "pink"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
  
    if(started==false){
        console.log("game started");
        started = true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup(){
    level++;
    h2.textContent = `Level ${level}`;


    let randIdx=Math.floor(Math.random()*4);
    let randcolor= btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    gameflash(randbtn);
}
function checkans() {
    let idx = userseq.length - 1;

    if (userseq[idx] === gameseq[idx]) {

        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
            userseq = [];
        }

    } else {
        h2.innerHTML = `Game Over! <b>Your score is ${level}</b>. <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset();
}
}

function btnpress() {
    let btn = this;

    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans();
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns ){
    btn.addEventListener("click", btnpress);
}

function reset(){
     started = false;
        level = 0;
        gameseq = [];
        userseq = [];
    }
