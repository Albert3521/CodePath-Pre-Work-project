//Global Variables
var pattern = [2,4,2,3,1,1,4,3]
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //This must be between 0.0 and 1.0

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

//Sount Synthesis Functions
const freqMap = 
      {
        1: 261.6,
        2: 329.6,
        3: 392,
        4: 466.2
      }
function playTone(btn,le)