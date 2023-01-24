// clear button 
var clear = document.querySelector("#clear");
// list where scores are displayed in browser
var highScores = document.querySelector("#highscores");


// want to get initials and scores from local storage to display in browser

let displayScores = JSON.parse(localStorage.getItem('highscores'));

display();

function display() {
    for (var i = 0; i < displayScores.length; i++) {
        var display = displayScores[i];

        var li = document.createElement("li");
        li.textContent = (display.initials) + " " + (display.score);
        highScores.appendChild(li);
      }
}



//highScores = displayScores.value;



// want to limit number of highscores displayed


// want to sort items so highest score is displayed first



// when user clicks on clear button it clears highscore results
function clearScore() {
    highScores.innerHTML = "";
}

clear.addEventListener("click", clearScore);