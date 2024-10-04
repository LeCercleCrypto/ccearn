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

function redirect(opt){
    switch(opt){
        case 'invest':
            document.location.href = 'invest.html';
            break;
        case 'earn':
            document.location.href = 'index.html';
            break;
        case 'business':
            document.location.href = 'business.html';
            break;
        case 'profile':
            document.location.href = 'profile.html';
            break;
        case 'company':
            document.location.href = 'company.html';
            break;
            
    }
}