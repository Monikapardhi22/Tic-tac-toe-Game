let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true;

let count = 0;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

//for resentting the game
const resetGame = () =>{
    trunO =true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//inner text x,o 

 box.forEach((box2)=>{

    box2.addEventListener("click",()=>{
        console.log("clicked");

        if(trunO){
            box2.innerText ="O";
            trunO = false;
        }else{
            box2.innerText ="X";
            trunO = true;
        }

        box2.disabled = true;

        count++;

        let isWinner =checkWin();
        if(count === 9 && !isWinner){
            gamedraw();
        }

    });

 });

 //if both players are not win the game so game is gamedraw

 const gamedraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disable();
};

//showing the winner X/O 

 let shoWinnner = (Winner) =>{
    msg.innerText = `Congrates You win the Game ${Winner}`;
    msgContainer.classList.remove("hide");

    disable();

 }


 // check  the winner patterns 

 const checkWin =()=>{
    for(let pattern of winPatterns){
        let pos1Val =box[pattern[0]].innerText;
        let pos2Val =box[pattern[1]].innerText;
        let pos3Val =box[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !=""  &&  pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                
                shoWinnner(pos1Val);
                return true ;
            }
        }

    }
 }

 //if winner getting show so boxes are clean 


 const disable = () =>{
    for(let box0 of box){
        box0.disabled = true ;
    }
 }


 const enableBoxes = () =>{
    for(let box1 of box){
        box1.disabled =false;
        box1.innerText="";
    }
 }


//  buttons js reset/new game for new button and reset buttton 





newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
 