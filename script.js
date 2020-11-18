
const result        = document.querySelector("#questionText"); // where to display result
const questionOne   = "What data type yields true/false?"
const questionTwo   = "What..."
const questionThree = "What is the correct syntax for an array with Jack, Jill, Tim, Tess?"
const questionFour  = "What method do you use to generate a random item, character?"
const questionFive  = "How do you see your result in devTools?"
const questionSix   = "";
const questoinSeven = "";
const questionEight = "";
const questionNine  = "";
const questionTen   = "";

// objects for questions? var question1 = {choseA:"true", choseB:"false", choseC:"false"};

var questionOne = ["What data type yields true/false?", "a) boolean"]

const answers = {   //do i make object "answers"?
            questionOne: "a", 
            questionTwo: "b",
            questionThree: "c",
            questionFour: "b",
            questionFive: "a",
            questionSix: "c",
            questionSeven: "c",
            questionEight: "a",
            questionNine: "c",
            questionTen: "b",
        };

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


let (questionOne === choseA) {
    quizResults = newScore.concat(score);
    if (choseA) {
        //add point
        //timer same
        else (choseB || choseC ) {
            //point as is
            //timer subtract 10 seconds
        }
    }
    }

let (questionTwo === choseB) {
    quizResults = (score + 1)
    }

let (questionThree === choseC) {
    }

let (questionFour === choseB) {
    }

let (questionFive === choseA) {
    }

let (questionSix === choseC) {
    }

let (questionSeven === choseC) {
    }

let (questionEight === choseA) {
    }

let (questionNine === choseC) {
    }

let (questionTen === choseB) {
    }
    }




   var resultText = document.querySelector("#result"); // where result incorrect/correct will be displayed

   var correctAns = (score + 1);

   var quizResults = ""; //score will be totaled at end
   var userAnswer = ""; //different answer for each question

       
        
        

    
}
    //display question ("What data yields true/false?");

}
const questionTwo = document.querySelector()




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



// Event Listeners

nextQuestion.addEventListener("click", function() {
    if (answer === true) {
        alert("correct!");
    }
    else (answer === false) {
        alert("incorrect!")
    }
});

var result = document.querySelector(#result); // where want result to be displated: correct or incorrect
