window.onload =()=> {
    
  

    guessButton.addEventListener('click', guessButton);

    let attempts = 10;
        let previousGuesses = [];

        let randomNumber = Math.floor(Math.random() * 100) + 1;
      

        function startGame() {
            
            attempts = 10;
            previousGuesses = [];
            document.getElementById('message').textContent = '';
            document.getElementById('previousGuesses').textContent = '';
            document.getElementById('restartButton').style.display = 'none';
            document.getElementById('guessInput').value = '';
            document.getElementById('guessInput').focus();
        }

        document.getElementById('guessButton').addEventListener('click', function() {
            const guess = Number(document.getElementById('guessInput').value);
            if (guess < 1 || guess > 100 || isNaN(guess)) {
                alert("Please enter a number between 1 and 100.");
                return;
            }
            previousGuesses.push(guess);
            attempts--;

            if (guess === randomNumber) {
                document.getElementById('message').textContent = `Congratulations! ${guess} is correct!`;
                endGame();
            } else if (attempts === 0) {
                document.getElementById('message').textContent = `Game over! The number was ${randomNumber}.`;
                endGame();
            } else {
                let hint = guess < randomNumber ? 'too low' : 'too high';
                document.getElementById('message').textContent = `Wrong! Your guess was ${hint}. You have ${attempts} attempts left.`;
                document.getElementById('previousGuesses').textContent = `Previous guesses: ${previousGuesses.join(', ')}`;
            }

            document.getElementById('guessInput').value = '';
            document.getElementById('guessInput').focus();
        });

        function endGame() {
            document.getElementById('guessButton').disabled = true;
            document.getElementById('restartButton').style.display = 'block';
        }

        document.getElementById('restartButton').addEventListener('click', function() {
            startGame();
            document.getElementById('guessButton').disabled = false;
        });
    }