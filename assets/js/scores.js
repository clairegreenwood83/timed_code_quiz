var clear = document.querySelector("#clear");

var highScores = document.querySelector("#highscores");

// want to get initials and scores from local storage

let displayScores = JSON.parse(localStorage.getItem('highscores'));


// highScores = displayScores


 /*function displayScores() {
    

}

window.onload = displayScores */




// want to limit number of highscores displayed


// want to sort items so highest score is displayed first



// when user clicks on clear button it clears highscore results
function clearScore() {
    highScores.style.display = "";
}

clear.addEventListener("click", clearScore);