
var correctCount = 0;
var incorrectCount = 0;
var correctAnswer;
var j;
var btn1 = document.getElementById('bt1');
var btn2 = document.getElementById('bt2');
var btn3 = document.getElementById('bt3');
var btn4 = document.getElementById('bt4');

var newOrderArr = [];
var questionArr = [
///---------------------------------------------------------------
   {
       number:1,
        q: "A cat can jump up to ______ times its length.",
        choices: ['6', '7', '9', '10'], 
        correct: "good"
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

questionRandomizer();


//======================================================================
//main loop (maybe in a start game function)
for (i = 0; i < newOrderArr.length; i++) {
   // countdown();
    if (newOrderArr[i].choices === newOrderArr[i].correct) {
        correctCount++;             //increment count of correct
        changeQ();
    } else { incorrectCount++ }     //increment count of incorrect
    changeQ();                      //running changeQ after a wrong guess
}
//======================================================================
//Part of the timer to display 20 seconds on the screen, make them decrement
//once each second, 
//var timeLeft = `<p>${20}</p>`
var timeOnScreen = document.getElementById('timer');
var timer = setInterval(countdown, 1000);
document.getElementById('timer').innerHTML =  `<p>${20}</p>`;
// function countdown() {
//   if (timeLeft == 0) {
//     clearTimeout(timeOnScreen);
//    // youLose();
//   } else {
//     document.getElementById('timer').innerHTML =  `<p>${20}</p>`;
//   //  timeLeft--;
//   }
// }
// function that loops through the questions and prints them onto the jumbotron
// part 2 of this function assigns the buttons to possible choices for that question
var str, htmla1, htmla2, htmla3, htmla4;
function changeQ() {
    for (i = 0; i < newOrderArr.length; i++) {
        var htmlq = `<p>${newOrderArr[i].q}</p>`
        document.getElementById("changing-question").innerHTML = htmlq;
        //this part of the functions changes each of the answer's inner text 
        // and values
        htmla1 = `<p>${newOrderArr[i].choices[0]}</p>`
        document.getElementById("bt1").innerHTML = htmla1;
        btn1 = newOrderArr[i].choices[0];
       //------------------------------ 
        btn2 = newOrderArr[i].choices[1];
        htmla2 = `<p>${newOrderArr[i].choices[1]}</p>`
        document.getElementById("bt2").innerHTML = htmla2;
        //---------------------------------------
        btn3 = newOrderArr[i].choices[2];
        htmla3 = `<p>${newOrderArr[i].choices[2]}</p>`
        document.getElementById("bt3").innerHTML = htmla3;
        //------------------------------------------
        btn4 = newOrderArr[i].choices[3];
        htmla4 = `<p>${newOrderArr[i].choices[3]}</p>`
        document.getElementById("bt4").innerHTML = htmla4;
    }
}
changeQ();
// make a function that assigns a timer to each question and displays it 

// make function to randomize question order
function questionRandomizer() {
    for (i = 0; i <10; i++) {
             j = Math.floor(Math.random() * questionArr.length);
             var question = questionArr[j];
             console.log(question);
             newOrderArr.push(question);
             questionArr.splice([j], 1);
    }
};

function youLose() {
    console.log("you ran out of time")
}
// var node = document.getElementsByClassName("myList2").lastChild;
// document.getElementById("myList1").appendChild(node);

//need to run this function every time an answer is selected to check for correctness
// function switches() {
//     switch (newOrderArr.number) {
//         case 1:
//         currentAnswerPer = "";
//             if (currentAnswerPer == newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 2:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 3:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 4:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 5:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 6:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 7:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 8:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 9:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         case 10:
//         currentAnswerPer = ""
//             if (currentAnswerPer === newOrderArr.ChoiceC) { correctCount++; }
//             else { incorrectCount++ }
//             break;
//         default:
//             break;
//     }
// }











// //functions
// function answerCheck () {
//     for(i=0; i<setAnswer.length; i++)
//     if (a === setAnswer[i]);
//     answers++;
//     console.log("your correct answers number is" + answers)
// };


// // the question must be looped to the next when the time is 
// //up or when an answer has been selected


// //METHODS

// //function winCheck() must keep track of wins and losses

// //function rightWrong() must keep track of rights or wrongs

// //function loopTime() must display a clock for each question
// // and keep track of the time



// var currentQuestion = 0;
// var score 