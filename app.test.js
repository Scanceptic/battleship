const { hitTestShip, sunkTestShip } = require("./app.js");

test("When ship is hit, increments ship.hits prop by 1 from 0 to 1", () => {
	expect(hitTestShip.hit()).toBe(1);
});

test("When ship length is 0, hits equal length and ship.sunk === true", () => {
	expect(sunkTestShip.isSunk()).toBe(true);
});
