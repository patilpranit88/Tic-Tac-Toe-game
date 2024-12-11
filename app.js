let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turno  =  true;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
 turno =true;
 enableBlxes();
 msgContainer.classList.add("hide");

}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turno){
            box.innerHTML = "O";
            turno = false;

        }
        else{
            box.innerHTML = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// const checkWinner = () => {
//   for(let pattern of winPatterns){


//     let pos1val = boxes[pattern[0]].innerText;
//     let pos2val = boxes[pattern[1]].innerText
//     let pos3val = boxes[pattern[3]].innerText

//     if(pos1val != "" && pos2val != "" && pos3val != ""){
//         if(pos1val === pos2val && pos2val === pos3val){
//             console.log("Winner");
//         }
//     }
//   }
// };


const disableBlxes = () =>{
    for(let box of boxes){
        box.disabled = true;
  
    }
}

const enableBlxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";

    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBlxes();
}



const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;


        //console.log("Winner",pos1Val);
        }
      }
    }
  };
  
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
 