# timed_code_quiz

## Description

I was tasked with building a timed coding quiz with multiple-choice questions. The app would be able to run in the browser, and was to feature dynamically updated HTML and CSS powered by JavaScript code written by myself. It needed to have a clean, polished, and responsive user interface.

The user story was presented as follows:

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

### Project Specification

The instructions for the task were as follows:

- Create a code quiz that contains the following requirements:

      - A start button that when clicked a timer starts and the first question appears.
      - Questions contain buttons for each answer.
      - When answer is clicked, the next question appears.
      - If the answer clicked was incorrect then subtract time from the clock.
      - The quiz should end when all questions are answered or the timer reaches 0.
      - When the game ends, it should display their score and give the user the ability to save their initials and their score.
    
The following animation demonstrates what the functionality of how the final application should be:
    
![08-web-apis-challenge-demo](https://user-images.githubusercontent.com/118351853/214394657-433c39fa-2404-4920-8fa0-3ac439b9cb5f.gif)


## Deployment

- The quiz can be accessed [!here.](https://clairegreenwood83.github.io/timed_code_quiz/index.html)
- To start the quiz the user should click on the "start quiz" button.
- The timer will then start and the first question appears.
- The user should click on the answer button they think is correct.
- The next question will load along with a comment as to whether the previous answer was correct or incorrect.
- If the answer is incorrect, 10 seconds will be deducted from the timer. 
- The quiz will end when the user has answered all of the questions presented to them or when the timer gets to 0. 
- Following the end of the quiz, the user will be presented with their score and an option to input their initials and save their   score. 
- The score can be viewed by following the highscore link in the top left-hand corner of the browser. 
- Users scores are stored in the internal storage and are therefore saved to the browser, even if the user exits the page. 


## Technology Stack

The following technology was utilised:

- JavaScript
- HTML

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) [2022] [Claire Greenwood]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
