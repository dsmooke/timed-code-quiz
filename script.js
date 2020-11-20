// Variables
    const quizContainer = document.getElementById("quiz");
    const timerBox      = document.getElementById("timer");
    const resultsBox    = document.getElementById("results"); // where to display result
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

    // Functions
(function() {

    function generateQuiz(){

      //variable in which to store the HTML output
      const output = []; //WHAT?

      //for each question execute the function once for each question/array element
      myQuestions.forEach()

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

    function showSlide(n) {

      //.classList is a property
      //.classList.remove() - removes one or more class names from an element
      //.classList.add() - adds one or more class names to an element; if the specified class already exists, the class will not be added

      //the slide that is the currentSlide (slide zero) will have its current-slide class name removed
      slides[currentSlide].classList.remove('current-slide');

      // the slide that is the current slide (not zero) will have the 'current-slide' class name added to the element's class list; if the 'current-slide' class already exists the class will not be added
      slides[n].classList.add('current-slide'); 

      //current slide defined by n
      currentSlide = n;

      //if the currentSlide is zero then do not show the back button
      if(currentSlide === 0){ 
        backBtn.style.display = 'none';
      }

      //otherwise (if currentSlide is not zero) show the back button
      else{ 
        backBtn.style.display = 'inline-block';
      }

      // if the currentSlide is one slide less than the total number of slides (the second to last slide), then do not show next button; instead show submit button
      if(currentSlide === slides.length-1){
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
      }

      //otherwise (if current slide is not second to last slide) then show next button and do not show submit button
      else{
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
      }
    }

    function showNextSlide(){
      //in order to go to the next slide, go forward one slide from the current slide 
      showSlide(currentSlide + 1);
    }

    function showPreviousSlide(){
      //in order to go to last/previous slide, go back one slide from the current slide
      showSlide(currentSlide - 1);
    }


    

    // start quiz
    generateQuiz();

    // Pagination Variables
    const backBtn = document.getElementById("back");
    const nextBtn = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0; // can go +1 or -1 a slide from currentSlide (0)


    //show first question slide
    showSlide(currentSlide);

    // Event Listeners
    submitBtn.addEventListener("click", showResults);
    backBtn.addEventListener("click", showLastQuestion);
    nextBtn.addEventListener("click", showNextQuestion);

})();   

