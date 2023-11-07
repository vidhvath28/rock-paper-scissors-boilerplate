const rockLogo = document.getElementById('rock');
const paperLogo = document.getElementById('paper');
const scissorsLogo = document.getElementById('scissors');
const selectedLogo = document.getElementById('selectedLogo');
const computerLogo = document.getElementById('computerLogo');
const computerChoices = [
    './assets/rock-hand.png',
    './assets/paper-hand.png',
    './assets/scissors-hand.png'
];
const scoresElement = document.getElementById('scores');


var gameOverMessage = document.querySelector('.gameOverMessage');
var playAgainButton = document.querySelector('.playAgainButton');

const scoresText = scoresElement.textContent;
const scoresArray = scoresText.split('-');


var playerScore = parseInt(scoresArray[0].trim());
var computerScore = parseInt(scoresArray[1].trim());

function updateScores(selectedLogo, computerLogo) {
    
    var selectedLogoName = selectedLogo.src.split('/').pop();
    var computerLogoName = computerLogo.src.split('/').pop();

    if(selectedLogoName == "rock-hand.png" && computerLogoName == "scissors-hand.png"){
        playerScore +=1;
    } else if(selectedLogoName == "rock-hand.png" && computerLogoName == "paper-hand.png"){
        computerScore +=1;
    } else if(selectedLogoName == "paper-hand.png" && computerLogoName == "rock-hand.png"){
        playerScore +=1;
    } else if(selectedLogoName == "paper-hand.png" && computerLogoName == "scissors-hand.png"){
        computerScore +=1;
    } else if(selectedLogoName == "scissors-hand.png" && computerLogoName == "paper-hand.png"){
        playerScore +=1;
    } else if(selectedLogoName == "scissors-hand.png" && computerLogoName == "rock-hand.png"){
        computerScore +=1;
    } else {
        
    }

scoresElement.textContent = playerScore + " - " + computerScore;
   
                             
    if(playerScore === 5 || computerScore === 5) {

        var winner = playerScore === 5 ? 'You won the game!' : 'Computer won the game!';
        gameOver = true;

      
        rockLogo.style.visibility = 'hidden';
        paperLogo.style.visibility = 'hidden';
        scissorsLogo.style.visibility = 'hidden';
    
      
        gameOverMessage.textContent = winner;
        playAgainButton.style.display = 'block'; 
        playAgainButton.onclick = function() { location.reload(); };
    }
}



rockLogo.addEventListener('click', function () {
    
    selectedLogo.src = "./assets/rock-hand.png ";
    selectedLogo.style.display="block"
    
    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    
    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display='block'
    updateScores(selectedLogo,computerLogo)
});
paperLogo.addEventListener('click', function () {
    
    selectedLogo.src = './assets/paper-hand.png';
    selectedLogo.style.display="block"
    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    
    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display='block'
    updateScores(selectedLogo,computerLogo)
});

scissorsLogo.addEventListener('click', function () {
    
    selectedLogo.src = './assets/scissors-hand.png';
    selectedLogo.style.display="block"
    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    
    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display='block'
    updateScores(selectedLogo,computerLogo);
    
});


