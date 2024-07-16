// create a battleship with a given length
function createShip(length) {
	const Ship = {
		length,
		hits: 0,
		sunk: false,
		hit: function () {
			this.hits++;
			this.isSunk();
			return this.hits;
		},
		isSunk: function () {
			this.sunk = this.length <= this.hits;
			return this.length <= this.hits;
		},
	};
	return Ship;
}

// create the gameboard
const createGameboard = function () {
	function createGrid() {
		const grid = [];
		const row = new Array(10);
		for (let index = 0; index < 10; index++) {
			grid.push(row);
		}
		return grid;
	}
	const Gameboard = {
		grid: createGrid(),
		allShips: [],
		placeShip: function (x, y, length) {
			const Ship = createShip(length);
			if (y + Ship.length - 1 < 10) {
				for (let index = 0; index < Ship.length; index++) {
					this.grid[y + index][x] = Ship;
				}
				this.allShips.push(Ship);
				return this.grid[y + Ship.length][x];
			} else if (x + Ship.length - 1 < 10) {
				for (let index = 0; index < Ship.length; index++) {
					this.grid[y][x + index] = Ship;
				}
				this.allShips.push(Ship);
				return this.grid[y][x + Ship.length];
			} else if (y - Ship.length + 1 >= 0) {
				for (let index = 0; index < Ship.length; index++) {
					this.grid[y - index][x] = Ship;
				}
				this.allShips.push(Ship);
				return this.grid[y - Ship.length][x];
			} else if (x - Ship.length + 1 >= 0) {
				for (let index = 0; index < Ship.length; index++) {
					this.grid[y][x - index] = Ship;
				}
				this.allShips.push(Ship);
				return this.grid[y][x - Ship.length];
			}
			return false;
		},
		receiveAttack: function (x, y) {
			if (typeof this.grid[y][x] === "object") {
				return this.grid[y][x].hit();
			} else {
				this.missedAttacks.push([x, y]);
				return [x, y];
			}
		},
		missedAttacks: [],
		allShipsSunk: function () {
			for (let i = 0; i < this.allShips.length; i++) {
				if (this.allShips[i].sunk === false) return false;
			}
			return true;
		},
	};

	return Gameboard;
};

const createRealPlayer = function () {
	const realPlayer = {
		Gameboard: createGameboard(),
	};
	return realPlayer;
};

const createComputerPlayer = function () {
	const computerPlayer = {
		Gameboard: createGameboard(),
	};
	return computerPlayer;
};

export { createGameboard, createRealPlayer, createComputerPlayer };
