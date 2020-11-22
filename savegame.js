var mostRecentScore = document.querySelector('#finalScore')
var highScores = JSON.parse(localStorage.getItem('#finalScore')) || []
const maxHighScores = 500;


finalScore.innerText = maxHighScores;

username.addEventListener('keyup', () => {
    saveBtn.disabled = !username.value
});

let numCorrect = mostRecentScore;
localStorage.setItem(highScores, JSON.stringify(numCorrect));
let pastScores = localStorage.get(JSON.parse(highScores))