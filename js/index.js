const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let statusC = getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDraw = Guess.attemptsNumber(); ''

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if (!kick) {
        alert('Digite algum valor!');
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if (numberDraw == kick) {
        playAgain();
        statusC.innerHTML = 'Parabéns! Você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        statusC.style.color = '#fff';
        clear();
    }
    else if (numberDraw > kick) {
        statusC.innerHTML = 'O número é maior!';
        statusC.style.color = '#de4251';
        clear();
    }
    else if (numberDraw < kick) {
        statusC.innerHTML = 'O número é menor!';
        statusC.style.color = '#de4251';
        clear();
    }
};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true); // recarrega a página via JS
};

function clear() {
    document.getElementById('kick').value = '';
};