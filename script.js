
// Variables
const quizShell     = document.getElementById("shell");
const quizContainer = document.getElementById("container");
const timerBox      = document.getElementById("timer");
const resultsBox    = document.getElementById("result"); // where to display result
const submitBtn     = document.getElementById("submit");

//Array of Objects: [{Question1:"questionText", Answers{ array of "Choices strings"}, CorrectAnswer:"letter"} {Question2:"q2", ...}]  
const quizQuestions = [  

    {// Question 1, Q0 in html    
     question: "What are the five primitive data types?",
     answers: {
        a: "strings, numbers, booleans, arrays, objects",
        b: "numbers, cords, pools, objects, arrows",
        c: "strings, numbers, booleon, arrangements, objectives"
        },
     correctAnswer: "a"
    },

    { // Question 2, Q1 in html
      question: "What data type yields true/false?",
      answers: {
        a: "string",
        b: "boolean",
        c: "array"
        },
      correctAnswer: "b"
    },

    { // Question 3, Q2 in html
      question: "How do you see your result in devTools?",
      answers: {
          a: "display.view(result);",
          b: "council.log(result);",
          c: "console.log(result);"
        },
      correctAnswer: "c"
    },
    
    { // Question 4, Q3 in html
      question: "How do you call a function?",
      answers: {
          a: "functionName();",
          b: "callFunction();",
          c: "execute(functionName());"
        },
      correctAnswer: "a"
    },

    { // Question 5, Q4 in html
      question: "What is the index number of coffee in drinks array? drinks=[tea, coffee, water];?",
      answers: {
          a: "0",
          b: "4-9",
          c: "1"
        },
      correctAnswer: "c"
    },      
]; 

// Pagination Variables
const backBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0; // can go +1 or -1 a slide from currentSlide (0)


// Functions
function generateQuiz(){

  //variable in which to store the HTML output
  const output = []; //WHAT?

  //for each question execute the function once for each question/array element
  myQuestions.forEach()
}

function showResults(){

  //gather (defined?) answers from quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // ket track of user's answers - user starts with score of zero/number of correct
  let numbCorrect = 0;

  //for each question gather the question name, and its question number
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    //find user's selected answer
    const answerContainers = answerContainers[questionNumber]; //answerContainers defined as the question# and its answer choices
    const selector = `input[name=question${questionNumber}]:checked`; //template string: selector is defined as the html <input name=question...> questionNumber that's checked by user
    const userAnswer = (answerContainer.querySelector(selector)|| {}).value; //user's answer defined as the checked answer choice within the answerContainers or the object(question's) html value (a,b, or c).

    //if the answer is correct 
    if(userAnswer === currentQuestion.correctAnswer){
      //add to the number of correct answers
      numCorrect++; //add by one with each correct answer

      //color correct answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    //if answer is incorrect or blank
    else{
      //color incorrect/blank answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  //show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`; //area in html where show results display '# correct out of # of questons'

}

function showQuestion(){}

function showNextQuestion(){}

function showLastQuestion(){}
       
function setTime(){
    var timerInterval = setInterval(function() {

        secondsLeft --;
        timer.textContent = secondsLeft + "message";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 60000); //60k miliseconds = 60seconds
}   

var quizResults = ""; //score will be totaled at end
var userAnswer = ""; //different answer for each question

var newScore = (i = 0; i > 0; i++);


var correctAns = (score + 1);
{
    if (answer === true) {
        alert("correct!");
    }
    else (answer === false) {
        alert("incorrect!")
    }
};



// start quiz
generateQuiz();

//show first question slide
showQuestion(currentSlide);

// Event Listeners
submitBtn.addEventListener("click", showResults);
backBtn.addEventListener("click", showLastQuestion);
nextBtn.addEventListener("click", showNextQuestion);



