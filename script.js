
// Variables

const quizShell     = document.getElementById("shell");
const quizContainer = document.getElementById("container");
const timerBox      = document.getElementById("timer");
const resultsBox    = document.getElementById("result"); // where to display result
const submitBtn     = document.getElementById("submit");

//Array of Objects: [{Question1:"questionText", Answers{ array of "Choices strings"}, CorrectAnswer:"letter"} {Question2:"q2", ...}]  
const quizQuestions = [  

    {// Question 1    
     question: "What are the five primitive data types?",
     answers: {
        a: "strings, numbers, booleans, arrays, objects",
        b: "numbers, cords, pools, objects, arrows",
        c: "strings, numbers, booleon, arrangements, objectives"
        },
     correctAnswer: "a"
    },

    { // Question 2
      question: "What data type yields true/false?",
      answers: {
        a: "string",
        b: "boolean",
        c: "array"
        },
      correctAnswer: "b"
    },

    { // Question 3
      question: "How do you see your result in devTools?",
      answers: {
          a: "display.view(result);",
          b: "council.log(result);",
          c: "console.log(result);"
        },
      correctAnswer: "c"
    },
    
    { // Question 4
      question: "How do you generate a random number?",
      answers: {
          a: "",
          b: "Math.floor(Math.random());",
          c: ""
        },
      correctAnswer: "b"
    },

    { // Question 5
      question: "How do you call a function?",
      answers: {
          a: "functionName();",
          b: "callFunction();",
          c: "execute(functionName());"
        },
      correctAnswer: "a"
    },

    { // Question 6
      question: "How...?",
      answers: {
          a: "...;",
          b: "...;",
          c: "...;"
        },
      correctAnswer: "c"
    },      

    { // Question 7
      question: "How...?",
      answers: {
          a: "...;",
          b: "...;",
          c: "...;"
        },
      correctAnswer: "c"
    },

    { // Question 8
      question: "How...?",
      answers: {
          a: "...;",
          b: "...;",
          c: "...;"
        },
      correctAnswer: "b"
    },

    { // Question 9
      question: "How...?",
      answers: {
          a: "...;",
          b: "...;",
          c: "...;"
        },
      correctAnswer: "c"
    },

    { // Question 10
      question: "How...?",
      answers: {
          a: "...;",
          b: "...;",
          c: "...;"
        },
      correctAnswer: "b"
    },
]; 

// Functions

function generateQuiz(){}
function showResults(){}
function showQuestion(){}
function showNextQuestion(){}
function showLastQuestion(){}
       
   

alert(answers.questionOne); // yields a etc.



var quizResults = "";
var userAnswer = "";

var newScore = (i = 0; i > 0; i++);

function answerQuestion(){ // to answer a question a button must be clicked
   var choiceA = document.querySelector("#choseA").checked; //choice A selected
   console.log(choiceA);

   var choiceB = document.querySelector("#choseB").checked;
   console.log(choiceB);

   var choiceC = document.querySelector("#choseC").checked;
   console.log(choiceC);
}




   var resultText = document.querySelector("#result"); // where result incorrect/correct will be displayed

   var correctAns = (score + 1);

   var quizResults = ""; //score will be totaled at end
   var userAnswer = ""; //different answer for each question

       
 {
    if (answer === true) {
        alert("correct!");
    }
    else (answer === false) {
        alert("incorrect!")
    }
});        
        

    

   







//----------------------------TIMER-----------------------

querySelector("#timer");

var timer = document.querySelector("Time");

function setTime() {
    var timerInterval = setInterval(function() {

        secondsLeft --;
        timer.textContent = secondsLeft + "message";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 60000); //60k miliseconds = 60seconds
}


function questionOne() { //question 1
    choiceA = true; //a is true, correct answer
    choiceB = false;
    choiceC = false;

    if (choiceA) {
        var result = document.querySelector("#result");
            return("correct");
            // go to nextQuestion();
            // score + one
            }
    else (choiceB || choiceC) {
            return("incorrect");
            //timer -- 100;
            //score stays
        }

    
    }

// start quiz
generateQuiz();

// Event Listeners

submitBtn.addEventListener("click", showResults);
backBtn.addEventListener("click", showLastQuestion);
nextBtn.addEventListener("click", showNextQuestion);



