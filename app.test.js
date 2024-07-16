const { hitTestShip, sunkTestShip, Gameboard } = require("./app.js");

test("When ship is hit, increments ship.hits prop by 1 from 0 to 1", () => {
	expect(hitTestShip.hit()).toBe(1);
});

test("When ship length is 0, hits equal length and ship.sunk === true", () => {
	expect(sunkTestShip.isSunk()).toBe(true);
});

test("When gameboard is created, the grid is an array of length 10", () => {
	expect(Gameboard.grid.length).toBe(10);
});

test("When gameboard is created, the grid is an array with subarrays of length 10", () => {
	expect(Gameboard.grid[0].length).toBe(10);
});

test("When gameboard places ship at position [1,3], a new ship object is created at array[3][1]", () => {
	expect(typeof Gameboard.placeShip(1, 3, 1)).toBe("object");
});

test("When gameboard places ship at position [2,4] of length 3 the ship position extends to array[6][2]", () => {
	expect(typeof Gameboard.placeShip(2, 4, 3)).toBe("object");
});
