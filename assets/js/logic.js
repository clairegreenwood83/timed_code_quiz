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
var finalScore = document.querySelector("final-score");

var timeLeft = 60;
var questionNumber = 0;

// function to set up timer

function countdown() {
    var timerInterval = setInterval(function() {
            timeLeft--;
            timer.textContent = timeLeft;
       if (timeLeft === 0) {
           clearInterval(timerInterval);
        } else if 
            (questionNumber >= questionOption.length + 1) {
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

choicesBtn.addEventListener("click", checkAnswer);
    
function checkAnswer(event) {
    event.preventDefault();
    //console.log(event.target);

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

// function for the end of the game

function gameOver() {
    //stopTimer();
    timer.textContent = 0;
    questionsScreen.style.display = "";
    endScreen.style.display = "block";

    let finalScore = timeLeft;
    finalScore.textContent = timeLeft;
    
}




// when timer gets to 0 or all questions answered final score displayed and option to save initials and score
// function to put score and initials into scoreboard 