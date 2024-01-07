let buttons = document.querySelectorAll(".btn");
let msgContainer=document.querySelector(".msgContainer");
let moveX = true;
let count = 0;
let draw=false;
let reset=document.querySelector(".reset"); 
let newGame=document.querySelector(".newGame");
let winner="";

const winCon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner=()=>{
    for(let i=0;i<8;i++){
        let idx1=winCon[i][0];
        let idx2=winCon[i][1];
        let idx3=winCon[i][2];
        if(buttons[idx1].innerText!=="" && buttons[idx1].innerText===buttons[idx2].innerText && buttons[idx2].innerText===buttons[idx3].innerText){
            return true;
        }
    }
    return false;
}

const disableButtons=()=>{
    for(let button of buttons){
        button.disabled=true;
    }
}

const enableButtons=()=>{
    for(let button of buttons){
        button.innerText=""
        button.disabled=false;
    }
}

reset.addEventListener("click",()=>{
        enableButtons();
        count=0;
        moveX=true;
        draw=false;
    });

const displaymsg=()=>{
    disableButtons();
    reset.classList.add("hide");
    let msg=document.querySelector(".msg");
    if(!draw){
        msg.innerText=`Congratulations, Winner is ${winner}`
    }
    else{
        msg.innerText="It's a Draw. Play Again?"
    }
    msgContainer.classList.remove("hide");
}

newGame.addEventListener("click",()=>{
    msgContainer.classList.add("hide");
    count=0;
    moveX=true;
    enableButtons();
    reset.classList.remove("hide");
    draw=false;
});

for (let button of buttons) {
  button.onclick = () => {
    if (moveX) {
      button.innerText = "X";
    } else {
      button.innerText = "O";
    }
    button.disabled = true;
    moveX = !moveX;
    count++;
    if(checkWinner()){
        if(moveX){
            winner="O";
        }
        else{
            winner="X";
            console.log("Winner is X");
        }
        displaymsg();
    }
    else if(count===9){
        draw=true;
        console.log("Draw");
        displaymsg();
    }
  };
}





