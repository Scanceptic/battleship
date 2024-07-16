import {
	createGameboard,
	createRealPlayer,
	createComputerPlayer,
} from "./app.js";

const realPlayer = createRealPlayer();
const computerPlayer = createComputerPlayer();

// renders board on DOM
// board is re-rendered after every move so no need to delete old content
function renderBoard(position = [0, 1]) {
	try {
		const squares = document.getElementById("squares");
		// clear old board
		while (squares.lastChild) {
			squares.removeChild(squares.lastChild);
		}
		for (let i = 9; i >= 0; i--) {
			for (let j = 0; j < 10; j++) {
				const square = document.createElement("div");
				square.classList.add("square");
				square.id = i * 10 + j;
				// show valid move on hover
				square.addEventListener("mouseover", () => {
					//const validMove = move(oldPosition, [i, j - 1]);
					const validMove = true;
					if (validMove) {
						square.style.backgroundColor = "#55FF55";
					} else {
						square.style.backgroundColor = "#FF5555";
					}
				});
				square.addEventListener("mouseleave", () => {
					square.style.backgroundColor = null;
				});
				// allow click to move
				square.addEventListener("click", () => {
					computerPlayer.Gameboard.receiveAttack(j, i);
					const gameWin = computerPlayer.Gameboard.allShipsSunk();
					if (gameWin) {
						console.log("Human Player Wins!");
					}
				});
				squares.appendChild(square);
			}
		}
	} catch (error) {
		console.log(error);
	}
}

renderBoard();
