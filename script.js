//Using const and let because I want to get into the habit.

//Defines most of the variables used in this assignment.
const quizContainer = document.getElementById('quiz-container');
let secondsLeft = 50;
let timer = document.getElementById('timer')
const button = document.getElementById('buttonMain');
let index = 0;
let timerInterval = 0;
const welcomeText = document.getElementById('welcome');
const questionsText = document.getElementById('questions-container');
const questionsList = document.getElementById('questionsList');
let score = 0;

//Questions databank.
const questions = [
  {
    questionTitle : 'Inside which HTML element would we put JavaScript if it is not in a seperate file?',
    questionChoices : ['<script>', '<h1>', '<js>', '<$>'],
    questionAnswer: '<script>',
  
  },
  {
  questionTitle : 'What is the correct syntax for linking your javascript file to your html webpage?',
  questionChoices : ['<js src= \'script.js\'>', '<script href= \'script.js\'>', '<script src= \'script.js\'>', '<link href= \'script.js\'>'],
  questionAnswer: '<script src= \'script.js\'>',

  },
  {
    questionTitle : 'What is an example of the proper syntax for creating a function in javascript?',
    questionChoices : ['function functName{var1, var2} (codeBlock)', 'function functName(var1, var2) {codeBlock}', 'let function = (var1, var2) {codeBlock}', 'set function(var1, var2) = {codeBlock}'],
    questionAnswer: 'function functName(var1, var2) {codeBlock}',
  
  },
  {
    questionTitle : 'How would you call a function defined as \'sampleFunction\'?',
    questionChoices : ['sampleFunction();', 'run sampleFunction();', 'call sampleFunction();', 'sampleFunction callback'],
    questionAnswer: 'sampleFunction();',
  
  },
  {
    questionTitle : 'Which of these options is the correct way to write an if statement with a \'1 is less than 2\' operator?',
    questionChoices : ['if (1 < 2) = {codeBlock}', 'run if (1 > 2) {codeBlock}', 'if: 1 < 2 {codeBlock}', 'if (1 < 2) {codeBlock}'],
    questionAnswer: 'if (1 < 2) {codeBlock}',
  
  },
];
// This defines the button that begins the game, and starts the timer.
button.addEventListener('click', function () {
  function setTime() {
    if (timerInterval === 0) {
      timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = 'Time left: ' + secondsLeft;
        timer.classList.add('text-center');
      }, 1000);
    }
  }
  //Set time begins the timer.
  setTime();
  welcomeText.innerHTML = '';
  ///Calls switchDiv to begin the quiz.
  switchDiv();
  button.setAttribute('id', 'invisible')
});

//This generates new questions everytime a button is pressed.
function switchDiv (index) {
    questionsText.innerHTML = '';
    let generatedQuestion = questions[index].questionTitle;
    let choicesArray = questions[index].questionChoices;
  for (let i = 0; i < questions.length; i++ ) {
    questionsText.textContent = generatedQuestion;
  };
//forEach loops through the array within the questions object list and generates buttons from the choices within.
  choicesArray.forEach(function (newItemGen) {
    let itemList = document.createElement('button');
    itemList.textContent = newItemGen;
    itemList.setAttribute('class', 'choiceButtons');
    //very important. this.textContent is the val parameter in our checkAnswer function, and allows the text from the button to directly be compared against the text from our questions databank.
    itemList.setAttribute('onclick', 'checkAnswer(this.textContent)');
    console.log(newItemGen)
    questionsText.appendChild(itemList);
    
  })
};


//This function acts as our score and timer keeper, and acts as a middle man in the code. Takes user input from the buttons generated and checks them with our correct answer databank. Score is either added or time is subtracted.
function checkAnswer(val) {

  if (val === questions[index].questionAnswer) {
   console.log('correct!')
   let cOrW = document.createElement('p');
   cOrW.textContent = 'Correct';
   questionsText.appendChild(cOrW)
   score += 10
   console.log(score)
   endGame();
  } else {
    console.log('wrong!')
    cOrW = document.createElement('p');
    cOrW.textContent = 'Wrong!';
    secondsLeft = secondsLeft -= 10
    questionsText.appendChild(cOrW)
    endGame();

  }
};
//nextQuestion increments the index then passes it through switchDiv. This allows the game to follow the index number, and creates opportunity for manipulation through the course of the game.
function nextQuestion() {
index = ++index;
console.log(index)

switchDiv(index);
}
//endGame acts as our 'game stopper'. It continously checks if the game should be over when the user presses a choice button. If it needs to be over, it generates the highscore input page. If not, then it calls nextQuestion to increment and continue the game.
function endGame() {
  if (index >= 4 || secondsLeft <= 0) {
    questionsText.innerHTML = '';
    timer.setAttribute('class', 'invisible')
    const highscoreTitle = document.createElement('h2');
    
    highscoreTitle.textContent = 'Enter in your initials to record your highscore! Your score is: ' + score;
    
    questionsText.appendChild(highscoreTitle);
    
    const highscore = document.createElement('textarea');
    highscore.setAttribute('class', 'center');
   questionsText.appendChild(highscore);
   const highscoreButton = document.createElement('button');
   highscoreButton.textContent = 'Enter'
   questionsText.appendChild(highscoreButton);
   
   
   
   
   
   
   //adds another event that allows the button to enter in a highscore to local storage.
   highscoreButton.addEventListener('click', function () {
      userInitials = highscore.value;
      userScore = score;
    //creates our Highscore object for each individual player.
      userHighScore = {
        initials : userInitials,
        scoreSave : score,
      }
      console.log(userHighScore)
      //this either retrieves all local storage or creates an array to begin storage.
      const arrParsed = JSON.parse(localStorage.getItem('Highscore:')) || [];

      arrParsed.push(userHighScore)

      localStorage.setItem('Highscore:', JSON.stringify(arrParsed));


    location.href = './highscores.html';
   });
  } else {
    nextQuestion();
  }
};
