function createShip(length) {
	const ship = {
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
	return ship;
}

const testShip = createShip(3);

module.exports = { testShip };
