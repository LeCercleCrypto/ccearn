let score = 0;

const scoreDisplay = document.getElementById('score');
const tapButton = document.getElementById('tapButton');

tapButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Points: ${score}`;
});

document.addEventListener('dblclick', function (event) {
    event.preventDefault(); // Empêche l'action par défaut du double-clic
});
