// * DIFFICULTY MESSAGE VARIABLES
const difficultyMessage = document.querySelector('.difficulty-message');
const gameContainer = document.querySelector('.game-container');
const btnEasy = document.querySelector('[data-type="easy"]');
const btnMedium = document.querySelector('[data-type="medium"]');
const btnHard = document.querySelector('[data-type="hard"]');
const btnsDifficulty = document.querySelectorAll('.btns-wrapper button');
let difficulty;

// * GAME CONTENT VARIABLES
let startBtn = document.querySelector('[data-id="start-btn"]');
let saying = document.querySelector('[data-id="text"]');
let playerArea = document.querySelector('[data-id="player-area"]');
let playerPosition = document.querySelector('[data-id="player-position"]');
let computer1Area = document.querySelector('[data-id="computer1-area"]');
let computer2Area = document.querySelector('[data-id="computer2-area"]');
let computer3Area = document.querySelector('[data-id="computer3-area"]');
let computer1Position = document.querySelector('[data-id="computer1-position"]');
let computer2Position = document.querySelector('[data-id="computer2-position"]');
let computer3Position = document.querySelector('[data-id="computer3-position"]');
let sayingText = [
	"Dog is a man's best friend",
	"A good beginning makes a good ending",
	"Pass over to the other side",
	"A little knowledge is a dangerous thing",
	"Never look a gift horse in the mouth",
	"Build a better mousetrap and the world will beat a path to your door",
	"Chain is only as strong as its weakest link",
	"Children should be seen and not heard",
	"Make him an offer he can't refuse",
	"Pull the wool over your eyes",
	"Religion is the opium of the people",
	"Seen better days",
	"Spare the rod and spoil the child",
	"Strike while the iron is hot"
];

// * getting difficulty by clicking on the one of tree difficulty buttons
btnsDifficulty.forEach(btn => btn.addEventListener('click', checkDifficulty));
function checkDifficulty() {
	difficulty = this.getAttribute('data-type');
	difficultyMessage.style.display = 'none';
	gameContainer.style.display = 'block';
}

startBtn.addEventListener("click", startTimer);

// * START COUNTING WHEN CLICK BUTTON
function startTimer() {
	let counter = 5;
	startBtn.innerHTML = counter;

	let loop = setInterval(function () {
		counter--;
		startBtn.innerHTML = counter;
		if (counter === 0) {
			clearInterval(loop);
			startGame();
		}
	}, 1000);
}

function startGame() {
	switchBtnText();
	startTyping();
}

function switchBtnText() {
	saying.innerHTML = sayingText[Math.floor(Math.random() * sayingText.length)];
	startBtn.style.display = "none";
	saying.style.display = "block";
	playerArea.focus();
}

// * check difficulty and base on it return random speed number where function is called
function getSpeed() {
	if (difficulty === 'easy') {
		randSpeed = Math.floor(Math.random() * (1200 - 500) + 500);
	} else if (difficulty === 'medium') {
		randSpeed = Math.floor(Math.random() * (700 - 70) + 70);
	} else {
		randSpeed = Math.floor(Math.random() * (350 - 20) + 20);
	}
	return randSpeed;
}

// * COMPUTERS START TYPING
function startTyping() {
	let position = 1;

	// * COMPUTER 1
	let currentSaying1 = saying.innerHTML.split("");

	comp1();
	function comp1() {
		// * getting randomSpeed number depends on difficulty
		let randSpeed = getSpeed();

		// * take letter by letter from saying
		let oneLetter1 = currentSaying1.shift();

		// * show what the computer wrote letter by letter
		computer1Area.innerHTML += oneLetter1;

		// * check if the computer has written the whole sentence, when it is, check the position and output the corresponding position
		if (computer1Area.innerHTML === saying.innerHTML) {
			computer1Position.innerHTML = "Position " + position;
			if (position === 1) {
				computer1Position.style.background = "#2dc937";
			} else if (position === 2) {
				computer1Position.style.background = "#e7b416";
			} else if (position === 3) {
				computer1Position.style.background = "#db7b2b";
			} else {
				computer1Position.style.background = "#cc3232";
			}
			computer1Position.style.color = "#fff";
			position++;

			// * when computer writing area is not the same as whole saying, until the computer has written the entire sentence, call this function again with a new random time
		} else {
			setTimeout(comp1, randSpeed);
		}
	}


	// * THE ABOVE STEPS ARE REPEAT AGAIN FOR THE OTHER COMPUTERS
	// * COMPUTER 2
	let currentSaying2 = saying.innerHTML.split("");

	comp2();
	function comp2() {
		let randSpeed = getSpeed();

		let oneLetter2 = currentSaying2.shift(); // svako pojedinacno slovo u izreci
		computer2Area.innerHTML += oneLetter2;
		if (computer2Area.innerHTML === saying.innerHTML) {
			computer2Position.innerHTML = "Position " + position;
			if (position === 1) {
				computer2Position.style.background = "#2dc937";
			} else if (position === 2) {
				computer2Position.style.background = "#e7b416";
			} else if (position === 3) {
				computer2Position.style.background = "#db7b2b";
			} else {
				computer2Position.style.background = "#cc3232";
			}
			computer2Position.style.color = "#fff";
			position++;
		} else {
			setTimeout(comp2, randSpeed);
		}
	}


	// * COMPUTER 3
	let currentSaying3 = saying.innerHTML.split("");

	comp3();
	function comp3() {
		let randSpeed = getSpeed();

		let oneLetter3 = currentSaying3.shift();
		computer3Area.innerHTML += oneLetter3;
		if (computer3Area.innerHTML === saying.innerHTML) {
			computer3Position.innerHTML = "Position " + position;
			if (position === 1) {
				computer3Position.style.background = "#2dc937";
			} else if (position === 2) {
				computer3Position.style.background = "#e7b416";
			} else if (position === 3) {
				computer3Position.style.background = "#db7b2b";
			} else {
				computer3Position.style.background = "#cc3232";
			}
			computer3Position.style.color = "#fff";
			position++;
		} else {
			setTimeout(comp3, randSpeed);
		}
	}


	// * CHECK IF THE PLAYER WROTE THE WHOLE SENTENCE CORRECTLY BY PRESSING ENTER, IF SO, DO THE SAME LOGIC AS FOR COMPUTERS
	// * PLAYER
	playerArea.addEventListener("keypress", checkPlayerArea);
	function checkPlayerArea(e) {
		if (e.key === "Enter") {
			if (playerArea.value === saying.innerHTML) {
				playerPosition.innerHTML = "Position " + position;
				if (position === 1) {
					playerPosition.style.background = "#2dc937";
				} else if (position === 2) {
					playerPosition.style.background = "#e7b416";
				} else if (position === 3) {
					playerPosition.style.background = "#db7b2b";
				} else {
					playerPosition.style.background = "#cc3232";
				}
				playerPosition.style.color = "#fff";
				position++;
			} else {
				playerPosition.innerHTML = "You entered a character incorrectly";
				playerPosition.style.background = "black";
				playerPosition.style.color = "white";
			}
		}
	}
}
