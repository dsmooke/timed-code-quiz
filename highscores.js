
highScores = 500;
let username = input(value);
(src="savegame.html").getItem(value) = username;
 let pastScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML = `<li class"high-score">${username} - ${highScores}</li>`;

localStorage();