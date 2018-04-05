
var correctCount = 0;
var incorrectCount = 0;
var correctAnswer;
var j;
var btn1 = document.getElementById('bt1');

var btn2 = document.getElementById('bt2');

var btn3 = document.getElementById('bt3');

var btn4 = document.getElementById('bt4');

// an array of question objects ready to be passed to newOrderArr
var newOrderArr = [];
var questionArr = [
//---------------------------------------------------------------
   {
       //numbers assigned to each for easy visability
       number:1,
        q: "A cat can jump up to ______ times its length.",
        choices: ['6', '7', '9', '10'], 
        correct: '6'
    }, {
        number:2,
        q: "Cats sleep how many hours a day on average?",
        choices: ['up to 12', 'up to 16', 'up to 20', 'cats do not sleep during the day, they only sleep at night'], 
        correct: 'up to 16'
    }, {
        number:3,
        q: "On average, how many whiskers does a cat have?",
        choices: ['12', '24', '30', '46'], 
        correct: '24'
    }, {
        number:4,
        q: "On average, long do outdoor cats live?",
        choices: ['5 to 6', '3 to 5', '12 to 15', 'infinity'], 
        correct: '3 to 5'
    }, {
        number:5,
        q: "What does oscilla mean in latin?",
        choices: ['grace', 'good kitty', 'to swing', 'little face'], 
        correct: 'little face'
    }, {
        number:6,
        q: "What do you call a group of kittens?",
        choices: ['kroger', 'kaggle', 'kindle', 'kaboodle'], 
        correct: 'kindle'
    }, {
        number:7,
        q: "What is the term for when a cat rubs the side of its head against people or furniture?",
        choices: ['kroger', 'tagging', 'beaning', 'bunting'], 
        correct: 'bunting'
    }, {
        number:8,
        q: "Cats cannot perceive which of the following taste?",
        choices: ['sour', 'salty', 'sweet', 'icy-hot'], 
        correct: 'sweet'
    }, {
        number:9,
        q: "Cats or dogs?",
        choices: ['cats', 'dogs', 'other answer', 'snakes'], 
        correct: 'cats'
    }, {
        number:10,
        q: "4000 years ago in egypt, what was the penalty for killing a cat?",
        choices: ['not death', 'death', 'not death', 'not death'], 
        correct: 'death'
    }
];
// puts the questions in a random order for the first time
questionRandomizer();
// makes the timer be off until game is started
clearInterval(timer);

var str, htmla1, htmla2, htmla3, htmla4;
var tracker=-1;
// for loop to pass by each question
function changeArr() {
    if(tracker >7){
        clearInterval(timer);
        timeOnScreen.innerHTML = timeLeft;
    }
    if(newOrderArr[1]){
    newOrderArr.shift();
    changeQ();}
    
    console.log(newOrderArr.length)
    }

//function for changing questions (logic only) (will run inside another function)
function changeQ() {
    var htmlq = `<p>${newOrderArr[0].q}</p>`
    document.getElementById("changing-question").innerHTML = htmlq;
    //this part of the functions changes each of the answer's inner text 
    // and values
    htmla1 = `<p>${newOrderArr[0].choices[0]}</p>`
    document.getElementById("bt1").innerHTML = htmla1;
   // btn1 = newOrderArr[0].choices[0];
    //-------------------------------------------
    //btn2 = newOrderArr[0].choices[1];
    htmla2 = `<p>${newOrderArr[0].choices[1]}</p>`
    document.getElementById("bt2").innerHTML = htmla2;
    //---------------------------------------
    // btn3 = newOrderArr[0].choices[2];
    htmla3 = `<p>${newOrderArr[0].choices[2]}</p>`
    document.getElementById("bt3").innerHTML = htmla3;
    //------------------------------------------
    //btn4 = newOrderArr[0].choices[3];
    htmla4 = `<p>${newOrderArr[0].choices[3]}</p>`
    document.getElementById("bt4").innerHTML = htmla4;
}
// function to randomize question order
function questionRandomizer() {
    for (i = 0; i < 10; i++) {
        j = Math.floor(Math.random() * questionArr.length);
        var question = questionArr[j];
        console.log(question);
        newOrderArr.push(question);
        questionArr.splice([j], 1);
    }
};
//---------------- FUNCTIONS FOR TIMER ----------------------------
//Part of the timer to display 20 seconds on the screen, make them decrement
//once each second, 
var timeLeft = 20;
var timeOnScreen = document.getElementById('timer');
var timer;
var tracker2 = 0;
//function that sets up the timer to run
function runTimer() {
    timer = setInterval(countdown, 1000);
}
//function that counts down until timer equals 0
function countdown() {
    if (timeLeft !== 0) {
        timeLeft--;
        timeOnScreen.innerHTML = timeLeft;
    } if (timeLeft === 0) {
        timerReset();
        if(tracker2===0){
            changeQ();
        }if(tracker2!==0){changeArr();}
        tracker2++;
    }
}
// resets the timer and alerts time is up
function timerReset() {
    clearInterval(timer);
    timeLeft = 20;
    runTimer();
}
function start() {
    clearInterval(timer);
    timeLeft = 3;
    timeOnScreen.innerHTML = timeLeft;
    runTimer();
}
// reset game button
function reset() {
    location.reload();
}
//------------- END OF TIMER FUNCTIONS -----------------------------
//------------- BEGINNING OF BUTTON FUNCTIONS ----------------------
// assigns button 1 to be index 0 of current answer choices array and 
//compares it to the correct answer
function button1Ass() {
    btn1 = newOrderArr[0].choices[0];
    if (btn1 === newOrderArr[0].correct) {
        correctCount++;
    } else { incorrectCount++ }
    changeArr();
    timerReset();
    console.log(correctCount);
    console.log(incorrectCount);
}
// assigns button 2 to be index 1 of current answer choices array and 
//compares it to the correct answer
function button2Ass() {
    btn2 = newOrderArr[0].choices[1];
    if (btn2 === newOrderArr[0].correct) {
        correctCount++;
    } else { incorrectCount++ }
    changeArr();
    timerReset();
    console.log(correctCount);
    console.log(incorrectCount);
}
// assigns button 3 to be index 2 of current answer choices array and 
//compares it to the correct answer
function button3Ass() {
    btn3 = newOrderArr[0].choices[2];
    if (btn3 === newOrderArr[0].correct) {
        correctCount++;
    } else { incorrectCount++ }
    changeArr();
    timerReset();
    console.log(correctCount);
    console.log(incorrectCount);
}
// assigns button 4 to be index 3 of current answer choices array and 
//compares it to the correct answer
function button4Ass() {
    btn4 = newOrderArr[0].choices[3];
    if (btn4 === newOrderArr[0].correct) {
        correctCount++;
    } else { incorrectCount++ }
    changeArr();
    timerReset();
    console.log(correctCount);
    console.log(incorrectCount);
}