const { testShip } = require("./app.js");

test("When ship is hit, increments ship.hits prop by 1 from 0 to 1", () => {
	expect(testShip.hit()).toBe(1);
});
