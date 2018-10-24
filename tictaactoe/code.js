let box=document.getElementsByClassName("box");
let status=document.getElementById("status");
let playAgainBtn=document.getElementById("play-again");
playAgainBtn.style.display="none";
let turn = true;
let flag=[0,0,0,0,0,0,0,0,0];
let count=0;
let gameOver=false;
// Main Activity
for (let i=0; i<9; i++){
  box[i].addEventListener("click", function(){
    if (flag[i]==0  && gameOver==false){
      if (turn){
      box[i].innerText="x";
      flag[i]=1;
      turn = false
      }
      else {
        box[i].innerText="o";
        flag[i]=-1;
        turn = true;
      }
      count++;
    }
    gameStatus();
  });
}
// Click Play Again event
playAgainBtn.addEventListener("click",function(){
  resetData();
});

// check status each over turn
function gameStatus(){;
  let flag2d = [[flag[0],flag[1],flag[2]],[flag[3],flag[4],flag[5]],[flag[6],flag[7],flag[8]]];
  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
      if ((flag2d[i][j]==flag2d[i][j+1] && flag2d[i][j]==flag2d[i][j+2] && flag2d[i][j]!=0)
          || (flag2d[i][j]==flag2d[i+1][j] && flag2d[i][j]==flag2d[i+2][j] && flag2d[i][j]!=0)
          || (flag2d[i][j]==flag2d[i+1][j+1] && flag2d[i][j]==flag2d[i+2][j+2] && flag2d[i][j]!=0)
          || (flag2d[i][j]==flag2d[i+1][j-1] && flag2d[i][j]==flag2d[i+2][j-2] && flag2d[i][j]!=0)){
              if(turn==false){
                status.innerText="X Won !!";
              }
              else {
                status.innerText="O Won !!";
              }
              gameOver=true;
              playAgainBtn.style.display="block";
      } else if (count==9) {
        gameOver=true;
        playAgainBtn.style.display="block";
        status.innerText="Draw !!";
      }
    }
  }
  alert(flag2d[0][0]+" "+flag2d[0][1]+" "+flag2d[0][2]);
}
//reset data for playing again
function resetData(){
  turn = true;
  flag=[0,0,0,0,0,0,0,0,0];
  count=0;
  gameOver=false;
  for (let i=0; i < 9; i++) {
    box[i].innerText="";
  }
  status.innerText="";
  playAgainBtn.style.display="none";
}
