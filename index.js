console.log('hello world!')

const smallPod = document.createElement("div")


const mediumPod = document.createElement("div")


const largePod = document.createElement("div")

const introContainer = document.getElementsByClassName('intro-container')
const playButton = document.createElement('button')
playButton.innerText = 'Press To Play'
// introContainer.append(playButton)



const rules = document.getElementById('rules')
// const rulesLi = document.createElement('li')
const rulesArry = [ 'Items MUST be organized HEAVIEST at the bottom and LIGHTEST at the top', 
                    'A row MUST NOT be over the MAX WEIGHT', 'Some items can only be place at a specifc pod', 
                    'You CANNOT place the same items PARALLEL or PERPENDICULAR to each other (think either a Checkers or Halo shape)',
                    'You must have AT LEAST 8 containers of items at your station', 'When placing an item in a ']

                    
// const timer = document.getElementById('timer')
// // timer.innerText = '00:00' 
// const counter = 0
// const timeLeft = 60
// function setTimer(){
//     counter++;
//     timer.innerText = counter // the reason this doesnt show yet is because we are not calling it yet
// };

// setInterval(setTimer,1000)



// Using this site as a reference to make a countdown/timer https://codepen.io/ishanbakshi/pen/pgzNMv 

// document.getElementById('timer').innerHTML =
//   005 + ":" + 00;
// startTimer();

// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   //if(m<0){alert('timer completed')}
  
//   document.getElementById('timer').innerHTML =
//     m + ":" + s;
//   console.log(m)
//   setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }