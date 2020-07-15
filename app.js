
var scores, roundScore, activePlayer, gamePlaying, dice1, dice2, previousRoll;



init();

var setScoreButton = document.getElementById('setScoreButton');
var scoreInput = document.getElementById('scoreInput');

setScoreButton.addEventListener('click', function() {
	setScoreButton.textContent = 'Player will win at: ' + scoreInput.value;
	scoreInput.style.display = 'none';
});



document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
		
		
		dice1 = Math.floor(Math.random() * 6) + 1;
		dice2 = Math.floor(Math.random() * 6) + 1;

		document.querySelector('.dice1').style.display = 'block';
		document.querySelector('.dice1').src = 'images/dice-' + dice1 + '.png';
		
		document.querySelector('.dice2').style.display = 'block';
		document.querySelector('.dice2').src = 'images/dice-' + dice2 + '.png';
	
		
		if (dice1 === 6 && dice2 === 6) {
			doubleSix()
		
		} else if (dice1 !== 1 && dice2 !== 1) {
			roundScore += (dice1 + dice2);
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}
});



function doubleSix() {
	alert('Double six!! You lose all your points!');
		document.querySelector('.dice1').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
		document.querySelector('#current-' + activePlayer).textContent = '0';
		document.querySelector('#score-' + activePlayer).textContent = '0';
		nextPlayer();
}


document.querySelector('.btn-hold').addEventListener('click', function() {
		if(gamePlaying) { 
		scores[activePlayer] += roundScore; 
	
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		
		if (scores[activePlayer] >= scoreInput.value) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice1').style.display = 'none';
			document.querySelector('.dice2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
}); 


function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice1').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
	scores = [0, 0];
   	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice1').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.getElementById('setScoreButton').textContent = 'Set winning score';
	document.getElementById('scoreInput').style.display = 'initial';
	document.getElementById('scoreInput').value = "";
}


