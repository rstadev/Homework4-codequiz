//Using const and let because I want to get into the habit.
const quizContainer = document.getElementById('quiz-container');
let secondsLeft = 50;
let timer = document.getElementById('timer')
const button = document.getElementById('buttonMain');
let index = 0;
let timerInterval = 0;
const welcomeText = document.getElementById('welcome');
const questionsText = document.getElementById('questions-container');
const questionsList = document.getElementById('questionsList');
// const cOrW = document.getElementById('correctornot');

// console.log(cOrW)
  

let score = 0;
console.log(questionsText);
// console.log(questionsList);


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
  welcomeText.innerHTML = '';
  
  switchDiv(0);
  button.setAttribute('id', 'invisible')
});

console.log(questions[index].questionTitle);

function switchDiv (index) {
    questionsText.innerHTML = '';
    let generatedQuestion = questions[index].questionTitle;
    let choicesArray = questions[index].questionChoices;
  for (let i = 0; i < questions.length; i++ ) {
    questionsText.textContent = generatedQuestion;
  };

  choicesArray.forEach(function (newItemGen) {
    let itemList = document.createElement('button');
    itemList.textContent = newItemGen;
    itemList.setAttribute('class', 'choiceButtons');
    itemList.setAttribute('onclick', 'checkAnswer(this.textContent)');
    console.log(newItemGen)
    questionsText.appendChild(itemList);
    
  })
  // itemList.addEventListener('click', checkAnswer());
};



function checkAnswer(val) {
  // console.log(val);
  // console.log(questions[index].questionAnswer);
  if (val === questions[index].questionAnswer) {
   console.log('correct!')
   let cOrW = document.createElement('p');
   cOrW.textContent = 'Correct';
   questionsText.appendChild(cOrW)
   score += 10
   console.log(score)
   endGame();
  //  nextQuestion();
  } else {
    console.log('wrong!')
    cOrW = document.createElement('p');
    cOrW.textContent = 'Wrong!';
    secondsLeft = secondsLeft -= 10
    questionsText.appendChild(cOrW)
    endGame();

    // nextQuestion();
  }
};

function nextQuestion() {
index = ++index;
console.log(index)

switchDiv(index);
}

function endGame() {
  if (index >= 4 || secondsLeft <= 0) {
    questionsText.innerHTML = '';
    let highscoreTitle = document.createElement('h2');
    highscoreTitle.textContent = 'Enter in your initials to record your highscore!';
    questionsText.appendChild(highscoreTitle);
    let highscore = document.createElement('textarea');
    highscore.setAttribute('class', 'center');
   questionsText.appendChild(highscore);
  } else {
    nextQuestion();
  }
}


//---------------------Future code that will likely help with Highscores----------------
// const arrParsed = JSON.parse(localStorage.getItem('name')) || []

// const addToStoraged = item => {
//   arrParsed.push(item)
//     localStorage.setItem('name', JSON.stringify(arrParsed))
//   };
// addToStoraged();
// console.log('arrParsed==>>', arrParsed);
//       //document.getElementById('app').textContent = name
//--------------------------------------------------------------------------------------


// let clickButtons = document.querySelector('.choiceButtons');
// console.log(clickButtons)




// document.querySelector('choiceButtons').onclick = function () {
//   console.log('Click!')

// ---------------------------------------------------------------------------------------------

// let generatedQuestion = questions[index].questionTitle;
// let choicesArray = questions[index].questionChoices;



// let buttonMain = document.getElementById('buttonMain')
// buttonMain.textContent('Start!')