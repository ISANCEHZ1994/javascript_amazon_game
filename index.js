
const smallPod = document.createElement("div")
const mediumPod = document.createElement("div")
const largePod = document.createElement("div")


const introContainer = document.getElementsByClassName('intro-container')
const playButton = document.createElement('button')
playButton.innerText = 'Press To Play'
// introContainer.append(playButton) why does append NOT work in this case?


const rulesContainer = document.querySelector('#rules')
// const li = document.createElement('li')

const rulesArry = [ 'Items MUST be organized HEAVIEST at the bottom and LIGHTEST at the top', 
                    'A row MUST NOT be over the MAX WEIGHT', 'Some items can only be place at a specifc pod', 
                    'You CANNOT place the same items PARALLEL or PERPENDICULAR to each other (think either a Checkers or Halo shape)',
                    'You must have AT LEAST 8 containers of items at your station']

const rules = rulesArry.map( function(rule){
    console.log(rule)
return '<li>'+ rule + '</li>'
})


// li.append(rules)
rulesContainer.append(rules)

// THIS IS THE COUNTDOWN TIMER <----------------------------------------------           
// https://www.youtube.com/watch?v=LAaf7-WuJJQ
let countDown;

function timer(seconds){
    // console.log(seconds)
    const now = Date.now();
    const then = now + seconds * 1000; // 1000 represents miliseconds which is means 1 second
    displayTimeLeft(seconds)

    countDown = setInterval( () => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); // otherwise it would have been by miliseconds
        // check if we should stop it
        if(secondsLeft < 0){
            clearInterval(countDown);
            return; 
        }
        // display it
        displayTimeLeft(secondsLeft)
    }, 1000) // this means that it will run every second
};

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60); // minutes should be whole numbers 
    const remainderSeconds = seconds % 60 ; // we get the remainder that is actually the seconds
    const displayTime = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}` // otherwise the countdown will look like this 1:1 instead of 1:01
    const timer = document.getElementById('timer')
    timer.innerText = displayTime 
    console.log(displayTime)

    if(displayTime == '0:00'){
        const timesUp = document.getElementById('times-up')
        timesUp.innerText = 'TIMES UP'
    }
};



timer(900) // 900 seconds is 15 minutes 