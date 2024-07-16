const { create } = require("domain");

// create a battleship with a given length
function createShip(length) {
	const Ship = {
		length,
		hits: 0,
		sunk: false,
		hit: function () {
			this.hits++;
			return this.hits;
		},
		isSunk: function () {
			this.sunk = this.length <= this.hits;
			return this.sunk;
		},
	};
	return Ship;
}

// create the gameboard
function createGameboard() {
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
		placeShip: function (x, y, length) {
			const Ship = createShip(length);
			if (y + Ship.length - 1 < 10) {
				for (let index = 0; index < Ship.length; index++) {
					this.grid[y + index][x] = Ship;
				}
				return this.grid[y + Ship.length][x];
			} else if (x + Ship.length - 1 < 10) {
				for (let index = 0; index < Ship.length; index++) {
					this.grid[y][x + index] = Ship;
				}
				return this.grid[y][x + Ship.length];
			} else if (y - Ship.length + 1 >= 0) {
				for (let index = 0; index < Ship.length; index++) {
					this.grid[y - index][x] = Ship;
				}
				return this.grid[y - Ship.length][x];
			} else if (x - Ship.length + 1 >= 0) {
				for (let index = 0; index < Ship.length; index++) {
					this.grid[y][x - index] = Ship;
				}
				return this.grid[y][x - Ship.length];
			}
			return false;
		},
		receiveAttack: function (x, y) {},
		missedAttacks: [],
		allShipsSunk: false,
	};

	return Gameboard;
}

const hitTestShip = createShip(3);

const sunkTestShip = createShip(0);

const Gameboard = createGameboard();

module.exports = { hitTestShip, sunkTestShip, Gameboard };
