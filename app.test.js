import {
	createGameboard,
	createRealPlayer,
	createComputerPlayer,
} from "./app.js";

test("When ship is hit, increments ship.hits prop by 1 from 0 to 1", () => {
	const Gameboard = createGameboard();
	const hitTestShip = Gameboard.placeShip(1, 1, 1);
	expect(hitTestShip.hit()).toBe(1);
});

test("When ship length is 1, and ship is hit, hits equal length and isSunk returns true", () => {
	const Gameboard = createGameboard();
	const sunkTestShip = Gameboard.placeShip(1, 1, 1);
	sunkTestShip.hit();
	expect(sunkTestShip.sunk).toBe(true);
});

test("When ship length is 2, one hit does not equal length and isSunk returns false", () => {
	const Gameboard = createGameboard();
	const sunkTestShip = Gameboard.placeShip(1, 1, 2);
	sunkTestShip.hit();
	expect(sunkTestShip.isSunk()).toBe(false);
});

test("When gameboard is created, the grid is an array of length 10", () => {
	const Gameboard = createGameboard();
	expect(Gameboard.grid.length).toBe(10);
});

test("When gameboard is created, the grid is an array with subarrays of length 10", () => {
	const Gameboard = createGameboard();
	expect(Gameboard.grid[0].length).toBe(10);
});

test("When gameboard places ship at position [1,3], a new ship object is created at array[3][1]", () => {
	const Gameboard = createGameboard();
	expect(typeof Gameboard.placeShip(1, 3, 1)).toBe("object");
});

test("When gameboard places ship at position [2,4] of length 3 the ship position extends to array[6][2]", () => {
	const Gameboard = createGameboard();
	expect(typeof Gameboard.placeShip(2, 4, 3)).toBe("object");
});

test("When gameboard receives attack at position [2,4] with a ship placed there, it calls the hit func and returns ship.hits === 1", () => {
	const Gameboard = createGameboard();
	Gameboard.placeShip(2, 4, 2);
	expect(Gameboard.receiveAttack(2, 4)).toBe(1);
});

test("attack at position [4,5] with no ship placed there, returns the coords of the missed shot [4, 5] and adds to missedAttacks array", () => {
	const Gameboard = createGameboard();
	Gameboard.placeShip(2, 4, 2);
	Gameboard.receiveAttack(4, 5);
	expect(Gameboard.missedAttacks).toEqual([[4, 5]]);
});

test("Ship placed at [1,1] and sunk, allShipsSunk returns true", () => {
	const Gameboard = createGameboard();
	Gameboard.placeShip(1, 1, 1);
	Gameboard.receiveAttack(1, 1);
	expect(Gameboard.allShipsSunk()).toBe(true);
});

test("Ship placed at [1,1] and not sunk, allShipsSunk returns false", () => {
	const Gameboard = createGameboard();
	Gameboard.placeShip(1, 1, 1);
	expect(Gameboard.allShipsSunk()).toBe(false);
});
