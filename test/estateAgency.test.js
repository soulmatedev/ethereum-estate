const EstateAgency = artifacts.require("EstateAgency");

contract("EstateAgency", async (accounts) => {
	let estateAgency;

	before(async () => {
		estateAgency = await EstateAgency.new(accounts[0], accounts[1], accounts[2], accounts[3]);
	});

	it("should register a property", async () => {
		const propertyAddress = accounts[4];
		const totalArea = 100;
		const usefulArea = 80;

		await estateAgency.registerProperty(propertyAddress, totalArea, usefulArea, { from: accounts[0] });

		const property = await estateAgency.properties(propertyAddress);

		assert.equal(property.owner, accounts[0], "Incorrect property owner");
		assert.equal(property.totalArea.toNumber(), totalArea, "Incorrect total area");
		assert.equal(property.usefulArea.toNumber(), usefulArea, "Incorrect useful area");
	});

	it("should offer rent for a property", async () => {
		const propertyAddress = accounts[4];
		const rentAmount = 1000;
		const rentDuration = 12;

		await estateAgency.offerRent(propertyAddress, rentAmount, rentDuration, { from: accounts[0] });

		const property = await estateAgency.properties(propertyAddress);

		assert.equal(property.rentAmount.toNumber(), rentAmount, "Incorrect rent amount");
		assert.equal(property.rentDuration.toNumber(), rentDuration, "Incorrect rent duration");
		assert.equal(property.rented, true, "Property not marked as rented");
	});

	it("should cancel rent offer for a property", async () => {
		const propertyAddress = accounts[4];

		await estateAgency.cancelRentOffer(propertyAddress, { from: accounts[0] });

		const property = await estateAgency.properties(propertyAddress);

		assert.equal(property.rented, false, "Property not marked as not rented");
		assert.equal(property.rentAmount.toNumber(), 0, "Incorrect rent amount");
		assert.equal(property.rentDuration.toNumber(), 0, "Incorrect rent duration");
	});

	it("should change user role", async () => {
		const user = accounts[5];
		const isAdmin = true;

		await estateAgency.changeUserRole(user, isAdmin, { from: accounts[0] });

		const isAdminAfterChange = await estateAgency.administrators(user);

		assert.equal(isAdminAfterChange, isAdmin, "User role not changed");
	});
	
	it("should change user role", async () => {
		const user = accounts[5];
		const isAdmin = true;
		
		// Изменяем роль пользователя
		await estateAgency.changeUserRole(user, isAdmin, { from: accounts[0] });
		
		// Проверяем, изменилась ли роль пользователя на указанную
		const isAdminAfterChange = await estateAgency.administrators(user);
		
		assert.equal(isAdminAfterChange, isAdmin, "User role not changed");
		
		// Попробуем снова изменить роль этого пользователя на противоположную
		const newIsAdmin = !isAdmin;
		await estateAgency.changeUserRole(user, newIsAdmin, { from: accounts[0] });
		
		// Проверяем, изменилась ли роль пользователя на противоположную
		const newIsAdminAfterChange = await estateAgency.administrators(user);
		
		assert.equal(newIsAdminAfterChange, newIsAdmin, "User role not changed to opposite");
	});
	
});
