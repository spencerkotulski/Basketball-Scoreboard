let leftScore = document.getElementById("left-score")
let rightScore = document.getElementById("right-score")
let previousGamesText = document.getElementById("previous-games-el")

function addOneLeft() {
    leftScore.textContent = Number(leftScore.textContent) + 1
}

function addTwoLeft() {
    leftScore.textContent = Number(leftScore.textContent) + 2
}

function addThreeLeft () {
    leftScore.textContent = Number(leftScore.textContent) + 3
}

function addOneRight() {
    rightScore.textContent = Number(rightScore.textContent) + 1
}

function addTwoRight() {
    rightScore.textContent = Number(rightScore.textContent) + 2
}

function addThreeRight() {
    rightScore.textContent = Number(rightScore.textContent) + 3
}

function resetScore() {
    rightScore.textContent = 0
    leftScore.textContent = 0
}

function saveScore() {
    previousGamesText.textContent += "Home: " + leftScore.textContent + " Guest: " + rightScore.textContent + ", "
}