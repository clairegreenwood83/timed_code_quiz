// clear button 
var clear = document.querySelector("#clear");
// list where scores are displayed in browser
var highScores = document.querySelector("#highscores");


// want to get initials and scores from local storage to display in browser

let displayScores = JSON.parse(localStorage.getItem('highscores'));

highScores.textContent = displayScores;


// want to limit number of highscores displayed


// want to sort items so highest score is displayed first



// when user clicks on clear button it clears highscore results
function clearScore() {
    highScores.style.display = "";
}

clear.addEventListener("click", clearScore);