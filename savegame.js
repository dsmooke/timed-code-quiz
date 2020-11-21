const mostRecentScore = document.querySelector('#mostRecentScore')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const maxHighScores = 5


finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
});