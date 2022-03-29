//Global Variables
var pattern = [2,4,2,3,1,1,4,3]
var progress = 0;
var gamePlaying = false;

function startGame()
{
  //Initialize Game Variables
  progress = 0;
  gamePlaying = true;
  
  //swapping start and sto buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
}

function stopGame()
{
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
