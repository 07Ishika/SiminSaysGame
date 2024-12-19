let gameSeq=[];
let userSeq=[];

let btns=["red","green","purple","yellow"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let button=document.querySelector("button");
button.addEventListener("click",function(){
  if(started==false){
   console.log("game started");
   started=true;
    levelUp();
   
  }
 
});
// document.addEventListener("keypress",function(){
//        if(started==false){
//         console.log("game started");
//         started=true;
//          levelUp();
        
//        }
      
// });

function gameBtnFlash(btn){
   btn.classList.add("gameFlash");
   setTimeout(() => {
     btn.classList.remove("gameFlash")
   }, 250);
}
function userBtnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
      btn.classList.remove("userFlash")
    }, 250);
 }
 

function levelUp(){
    userSeq=[];
   level++;
   h2.innerText=`Level ${level}`;

  //random btn choose
   let randIndx=Math.floor(Math.random()*4);
   randColor=btns[randIndx];
   randbtn=document.querySelector(`.${randColor}`);
//    console.log(randIndx);
//    console.log(randbtn);
//    console.log(randColor);
   gameSeq.push(randColor);
   console.log(gameSeq);

  gameBtnFlash(randbtn);

}
function ansCheck(idx){
   if(gameSeq[idx]===userSeq[idx]){
    if(gameSeq.length==userSeq.length){
        setTimeout(levelUp,1000);
    }
   }else{
    h2.innerHTML=`Game Over! Your score was <b>${level} </b><br> Press any key to start the game again.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    resetGame();
   }
}


function btnPress(){
    let btn=this;
    userBtnFlash(this);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    ansCheck(userSeq.length-1);

}
 
let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
 
function resetGame(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}