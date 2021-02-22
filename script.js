//Using const and let because I want to get into the habit.
const quizContainer = document.getElementById('quiz-container');
let secondsLeft = 100
let timer = document.getElementById('timer')
const button = document.getElementById('buttonMain');
let index = 0;
let timerInterval = 0;
const welcomeText = document.getElementById('welcome');
const questionsText = document.getElementById('questions-container');
const questionsList = document.getElementById('questionsList');
  

let score = 0;
console.log(questionsText);
// console.log(questionsList);


const questions = [
  {
    questionTitle : 'Sample Question',
    questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
    questionAnswer: 'correct',
  
  },
  {
  questionTitle : 'Sample Question',
  questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
  questionAnswer: 'correct',

  },
  {
    questionTitle : 'Sample Question',
    questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
    questionAnswer: 'correct',
  
  },
  {
    questionTitle : 'Sample Question',
    questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
    questionAnswer: 'correct',
  
  },
  {
    questionTitle : 'Sample Question',
    questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
    questionAnswer: 'correct',
  
  },
];
// let generatedQuestion = questions[index].questionTitle;
// let choicesArray = questions[index].questionChoices;






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
  welcomeText.innerHTML = '';
  
  switchDiv(0);
  
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

let clickButtons = document.querySelector('.choiceButtons');
console.log(clickButtons)




// document.querySelector('choiceButtons').onclick = function () {
//   console.log('Click!')

  function checkAnswer(val) {
    console.log(val);
    console.log(questions[index].questionAnswer);
    if (val.textContent === questions[index].questionAnswer) {
     console.log('correct!') 
    }
  };




//---------------------Future code that will likely help with Highscores------------
// const arrParsed = JSON.parse(localStorage.getItem('name')) || []

// const addToStoraged = item => {
//   arrParsed.push(item)
//     localStorage.setItem('name', JSON.stringify(arrParsed))
//   };
// addToStoraged();
// console.log('arrParsed==>>', arrParsed);
//       //document.getElementById('app').textContent = name
//--------------------------------------------------------------------------------------