// Create a code quiz that contains the following requirements:

//      A start button that when clicked a timer starts and the first question appears.

//      Questions contain buttons for each answer.

//      When answer is clicked, the next question appears

//      If the answer clicked was incorrect then subtract time from the clock

//      The quiz should end when all questions are answered or the timer reaches 0.

//      When the game ends, it should display their score and give the user the ability to save their initials and their score


var timer = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsScreen = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");
var answerBtn1 = document.querySelector("#answer_button1");
var answerBtn2 = document.querySelector("#answer_button2");
var answerBtn3 = document.querySelector("#answer_button3");
var answerBtn4 = document.querySelector("#answer_button4");
var choicesBtn = document.querySelector(".choices");
var result = document.querySelector("#check_answer");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");

var timeLeft = 60;
var questionNumber = 0;
var timerInterval;


// function to set up timer

function countdown() {
    timerInterval = setInterval(function() {
            timeLeft--;
            timer.textContent = timeLeft;

         if (timeLeft === 0) {
            clearInterval(timerInterval);
            }
        }, 1000);
}

// set up button that starts timer when clicked

startButton.addEventListener("click", countdown);


// start-screen ID is where start button is. Need to hide this when first question appears.

function startQuiz() {
    startScreen.textContent = ""; // hides start-screen
    questionsScreen.style.display = "block"; // displays question div
    questionNumber = 0 
    showQuestion(questionNumber); // displays questions and choices for given questionNumber
}

// when button clicked first question will display

startButton.addEventListener("click", startQuiz);

function showQuestion (n) {
    questionTitle.textContent = questionOption[n].question;
    answerBtn1.textContent = questionOption[n].choice1;
    answerBtn2.textContent = questionOption[n].choice2;
    answerBtn3.textContent = questionOption[n].choice3;
    answerBtn4.textContent = questionOption[n].choice4;
    questionNumber = n;
}

// when a choices button is clicked we want next question to appear

function checkAnswer(event) {
    event.preventDefault();

    if (questionOption[questionNumber].answer == event.target.value) {
        result.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 10;
        result.textContent = "Incorrect!";
    }

    if (questionNumber < questionOption.length - 1) {
        showQuestion(questionNumber + 1);
    } else {
        gameOver();
    }
}

choicesBtn.addEventListener("click", checkAnswer);


// function for the end of the game
// when timer gets to 0 or all questions answered final score displayed and option to save initials and score
function gameOver() {

    timer.textContent = 0;
    questionsScreen.style.display = "";
    endScreen.style.display = "block";
    clearInterval(timerInterval);

    finalScore.textContent = timeLeft;
    
}

// function to allow user to save score and initials  

// put into local storage client and score so can be accessed by scores.js and highscores.html

function highScores() {

    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var result = {
        initials: initials.value,
        score: timeLeft
    }
    highscores.push(result)
    localStorage.setItem("highscores", JSON.stringify(highscores)) 
    window.location.assign("./highscores.html")    // link to highscores html

   
}

submit.addEventListener("click", highScores);  // when user clicks on submit button it takes them to the highscore html



 
