const arrParsed = JSON.parse(localStorage.getItem('Highscore:'));
const questionsText = document.getElementById('questions-container');
console.log(questionsText)

console.log(arrParsed)

renderList();

// if (arrParsed) {
function renderList () {


    for (let i = 0; i < arrParsed.length; i++) {
        let orderedList = document.createElement('ul');

        let listOfHighScores = document.createElement('li');

        
        listOfHighScores.textContent = arrParsed[i].initials + ' : ' + arrParsed[i].scoreSave;
        console.log(listOfHighScores);
        orderedList.appendChild(listOfHighScores);
        console.log(orderedList);
        questionsText.appendChild(orderedList);
        // questionsText.appendChild(listOfHighScores)
        console.log(questionsText);
    }
}
  
// }