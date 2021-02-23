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
    questionTitle : 'Sample Question3',
    questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
    questionAnswer: 'correct',
  
  },
  {
    questionTitle : 'Sample Question4',
    questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
    questionAnswer: 'correct',
  
  },
  {
    questionTitle : 'Sample Question5',
    questionChoices : ['wrong', 'wrong2', 'wrong3', 'correct'],
    questionAnswer: 'correct',
  
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
   nextQuestion();
  } else {
    console.log('wrong!')
    cOrW = document.createElement('p');
    cOrW.textContent = 'Wrong!';
    secondsLeft = secondsLeft -= 10
    questionsText.appendChild(cOrW)
    nextQuestion();
  }
};

function nextQuestion() {
index = ++index;
console.log(index)

switchDiv(index);

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