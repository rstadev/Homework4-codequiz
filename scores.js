//Defines all necessary predefined variables that are used outside of the function.
const arrParsed = JSON.parse(localStorage.getItem('Highscore:'));
const questionsText = document.getElementById('questions-container');
console.log(questionsText)

console.log(arrParsed)
//calls the function, rendering the list of stored scores.
renderList();
//Function renderList takes the arrParsed stored above and loops through the stored scores. The scores are assigned to a list item in an unordered list and appended to our questions container with questionsText.
function renderList () {


    for (let i = 0; i < arrParsed.length; i++) {
        let orderedList = document.createElement('ul');

        let listOfHighScores = document.createElement('li');
//listOfHighScores.textContent acutally adds the visible text of the arrParsed object.
        
        listOfHighScores.textContent = arrParsed[i].initials + ' : ' + arrParsed[i].scoreSave;
        console.log(listOfHighScores);
        orderedList.appendChild(listOfHighScores);
        console.log(orderedList);
        questionsText.appendChild(orderedList);
        console.log(questionsText);
    }
}
  
