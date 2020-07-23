// console.log('hello world!')

const smallPod = document.createElement("div")
const mediumPod = document.createElement("div")
const largePod = document.createElement("div")


const introContainer = document.getElementsByClassName('intro-container')
const playButton = document.createElement('button')
playButton.innerText = 'Press To Play'
// introContainer.append(playButton) why does append NOT work in this case?



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

// https://www.youtube.com/watch?v=LAaf7-WuJJQ
let countDown;

function timer(seconds){
    // console.log(seconds)
    const now = Date.now();
    const then = now + seconds * 1000; // 1000 represents miliseconds which is means 1 second
    console.log({now,then})

    countDown = setInterval( () => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); // otherwise it would have been by miliseconds
        console.log(secondsLeft)
        if(secondsLeft < 0){
            clearInterval(countDown);
            return; 
        }
    }, 1000) // this means that it will run every second
}

timer(10)

