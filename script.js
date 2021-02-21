//Using const and let because I want to get into the habit.
const quizContainer = document.getElementById('quiz-container');
let secondsLeft = 100
let timer = document.getElementById('timer')
const button = document.getElementById('buttonMain');
let index = 0;
let timerInterval = 0;
let welcomeText = document.getElementById('welcome');
let questionsText = document.getElementById('questions-container');
let questionsList = document.getElementById('questionsList');
console.log(questionsText);
console.log(questionsList);



const questions = [
  {
  questionTitle : 'What is the 2+2?',
  questionChoices : ['1', '2', '3', '4'],
  questionAnswer:'4'
  },
  {questionTitle : 'Sample Question',
  questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
  questionAnswer: 'correct'

  }
];




// let buttonMain = document.getElementById('buttonMain')
// buttonMain.textContent('Start!')
button.addEventListener('click', function () {
  // console.log(button)
  function setTime() {
    if (timerInterval === 0) {
      timerInterval = setInterval(function() {
        secondsLeft--;
        // timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
        timer.textContent = 'Time left: ' + secondsLeft;
        timer.classList.add('text-center');
      

    
      if(secondsLeft === 0) {
          clearInterval(timerInterval);
          // sendMessage();
        }
    
      }, 1000);
    }
  }
    setTime();
    welcomeText.innerHTML = ''

    // switchDiv();

});

// function switchDiv (index) {
//   // questionsText.innerHTML = ''
//   for (let i = 0; i < questions.length; i++ ) {
//     // let generatedChoices = questions[index].questionChoices
//     let generatedQuestion = questions[index].questionTitle
//     questionText.textContent = generatedQuestion
//   }

// }
