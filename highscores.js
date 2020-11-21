const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML = 
highScores.map(score => {
    resturn `<li class"high-score">${score.name} - ${score.sore}</li>`
}).join(''); 