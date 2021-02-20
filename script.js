//Using const and let because I want to get into the habit.
const quizContainer = document.getElementById('quiz-container');
let secondsLeft = 100
let timer = document.getElementById('timer')
let button = document.getElementById("buttonMain");

// let buttonMain = document.getElementById('buttonMain')
// buttonMain.textContent('Start!')
button.addEventListener('click', function () {
  // console.log(button)
  function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        // timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
        timer.textContent = "Time left: " + secondsLeft;
        timer.classList.add('text-center');

    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          // sendMessage();
        }
    
      }, 1000);
    }
    setTime();

})
