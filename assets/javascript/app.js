

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
        q: "how is this working ?",
        choiceA: "This is choice A",
        choiceB: "This is choice B",
        choiceC: "This is choice C",
        choiceD: "This is choice A"
    }, {
        number:2,
        q: "2how is this working ?",
        choiceA: "2This is choice A",
        choiceB: "2This is choice B",
        choiceC: "2This is choice C",
        choiceD: "2This is choice A"
    }, {
        number:3,
        q: "3how is this working ?",
        choiceA: "3This is choice A",
        choiceB: "3This is choice B",
        choiceC: "3This is choice C",
        choiceD: "3This is choice A"
    }
];

questionRandomizer();

var str, htmla1, htmla2, htmla3, htmla4;
// function that loops through the questions and prints them onto the jumbotron
// part 2 of this function assigns the buttons to possible choices for that question
function changeQ() {
    for (i = 0; i < newOrderArr.length; i++) {
        var htmlq = `<p>${newOrderArr[i].q}</p>`
        document.getElementById("changing-question").innerHTML = htmlq;
        //this part of the functions changes each of the answer's inner text 
        // and values
        htmla1 = `<p>${newOrderArr[i].choiceA}</p>`
        document.getElementById("bt1").innerHTML = htmla1;
        btn1 = newOrderArr[i].choiceA;
       //------------------------------
        btn2 = newOrderArr[i].choiceB;
        htmla2 = `<p>${newOrderArr[i].choiceB}</p>`
        document.getElementById("bt2").innerHTML = htmla2;
        //---------------------------------------
        btn3 = newOrderArr[i].choiceC;
        htmla3 = `<p>${newOrderArr[i].choiceC}</p>`
        document.getElementById("bt3").innerHTML = htmla3;
        //------------------------------------------
        btn4 = newOrderArr[i].choiceD;
        htmla4 = `<p>${newOrderArr[i].choiceD}</p>`
        document.getElementById("bt4").innerHTML = htmla4;
    }
}
changeQ();
// make a function that assigns a timer to each question and displays it 

// make function to randomize question order
function questionRandomizer() {
    for (i = 0; i <= questionArr.length+1; i++) {
             j = Math.floor(Math.random() * questionArr.length);
             var question = questionArr[j];
             console.log(question);
             newOrderArr.push(question);
             questionArr.splice([j], 1);
    }
};

// var node = document.getElementsByClassName("myList2").lastChild;
// document.getElementById("myList1").appendChild(node);















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