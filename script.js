'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if (!guess) {
        console.log(document.querySelector('.message').textContent = 'No number');


        // When player win
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        // When the guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;    
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }

        // When the guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;    
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }

    }
 
});