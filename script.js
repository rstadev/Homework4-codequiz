//Using const and let because I want to get into the habit.
const quizContainer = document.getElementById('quiz-container');
let secondsLeft = 100
let timer = document.getElementById('timer')
<<<<<<< HEAD
let button = document.getElementById('buttonMain');
let index = 0;
let welcomeText = document.getElementById('welcome');
const questions = [
  {questionTitle : 'What is the 2+2?',
  choices : ['1', '2', '3', '4'],
  answer:'4'
  },
  {questionTitle : 'Sample Question',
  choices : ['wrong', 'wrong2', 'wrong3', 'correct'],
  answer: 'correct'

  }
];



=======
let button = document.getElementById("buttonMain");
let timerInterval = 0
>>>>>>> 7882c96cc256404dfbd610a40a1dcbb0a423fcf3

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
//   welcomeText.innerHTML = ''
// }
