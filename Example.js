let userSquancs=[];
let gameSquancs=[];
let start = false;
let level = 0;
let clour =["red","green","yellow","pink"];
let h3 =document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelUp();
    }
});
  
function F(bal){
    bal.classList.add("flash");
    setTimeout(function(){
        bal.classList.remove("flash");
    }, 200);
};
function levelUp(){
    userSquancs=[];
    level++;
    h3.innerText=`level ${level}`;
    let randomidx = Math.floor(Math.random()*3);
    let randomColour=clour[randomidx];
    gameSquancs.push(randomColour);
    let btn = document.querySelector(`.${randomColour}`);
    F(btn);
};

function btn2(){
    let btn1=this;
    F(btn1);
    let userclour =btn1.getAttribute("id");
    userSquancs.push(userclour);
    ckAns(userSquancs.length-1);
};
let allbtn =document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click", btn2);
};

function ckAns(idx){
    if(gameSquancs[idx]==userSquancs[idx]){
        if(gameSquancs.length==userSquancs.length){
            setTimeout(levelUp, 200);
        };
    }else{
        let body =document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(() => {
            body.style.backgroundColor="white";
        }, 200);
        h3.innerText=`Game over!!!  Your score is ${level}`;
        restart();
    };
};
 
function restart(){
    gameSquancs=[];
    userSquancs=[];
    start = false;
    level =0;
}