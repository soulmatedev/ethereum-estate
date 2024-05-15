// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract EstateAgency {

	struct Property {
		address owner;
		uint totalArea;
		uint usefulArea;
		uint rentAmount;
		uint rentDuration;
		bool rented;
	}

	mapping(address => bool) public administrators;
	mapping(address => Property) public properties;
	mapping(address => uint) public balances;

	event PropertyRegistered(address indexed propertyAddress, address indexed owner, uint totalArea, uint usefulArea);
	event RentOffered(address indexed propertyAddress, uint rentAmount, uint rentDuration);
	event RentConfirmed(address indexed propertyAddress, address indexed renter, uint rentAmount, uint rentDuration);
	event RentCancelled(address indexed propertyAddress, address indexed renter);
	event FundsWithdrawn(address indexed receiver, uint amount);
	event RoleChanged(address indexed user, bool isAdmin);

	constructor(address admin1, address admin2, address owner1, address owner2) public {
		administrators[admin1] = true;
		administrators[admin2] = true;
		administrators[owner1] = false;
		administrators[owner2] = false;
		balances[admin1] = 100;
		balances[admin2] = 100;
		balances[owner1] = 100;
		balances[owner2] = 100;
	}

	modifier onlyAdmin() {
		require(administrators[msg.sender], "Only administrators can perform this action");
		_;
	}

	modifier onlyOwner(address propertyAddress) {
		require(properties[propertyAddress].owner == msg.sender, "Only the owner can perform this action");
		_;
	}

	// Первая функция
	function registerProperty(address propertyAddress, uint totalArea, uint usefulArea) public onlyAdmin {
		require(properties[propertyAddress].owner == address(0), "Property is already registered");
		properties[propertyAddress] = Property(msg.sender, totalArea, usefulArea, 0, 0, false);
		emit PropertyRegistered(propertyAddress, msg.sender, totalArea, usefulArea);
	}

	// Вторая функция
	function offerRent(address propertyAddress, uint rentAmount, uint rentDuration) public {
		require(properties[propertyAddress].owner != address(0), "Property is not registered");
		require(!properties[propertyAddress].rented, "Property is already rented");
		properties[propertyAddress].rentAmount = rentAmount;
		properties[propertyAddress].rentDuration = rentDuration;
		properties[propertyAddress].rented = true;
		emit RentOffered(propertyAddress, rentAmount, rentDuration);
	}

	// Третья функция
	function confirmRent(address propertyAddress) public payable {
		require(properties[propertyAddress].owner != address(0), "Property is not registered");
		require(properties[propertyAddress].rented, "Property is not available for rent");
		balances[properties[propertyAddress].owner] += msg.value;
		emit RentConfirmed(propertyAddress, msg.sender, msg.value, properties[propertyAddress].rentDuration);
	}

	// Четвертая функция
	function cancelRentOffer(address propertyAddress) public onlyOwner(propertyAddress) {
		require(properties[propertyAddress].rented, "Property is not rented");
		properties[propertyAddress].rentAmount = 0;
		properties[propertyAddress].rentDuration = 0;
		properties[propertyAddress].rented = false;
		emit RentCancelled(propertyAddress, msg.sender);
	}

	// Пятая функция
	function changeUserRole(address user, bool isAdmin) public onlyAdmin {
		administrators[user] = isAdmin;
		emit RoleChanged(user, isAdmin);
	}

	// Шестая функция
	function checkBalance(address user) public view returns (uint) {
		return user.balance;
	}

	// new
	function transferFunds(address from, address payable to, uint amount) public {
		require(balances[from] >= amount, "Insufficient balance");
		balances[from] -= amount;
		to.transfer(amount);
		emit FundsWithdrawn(from, amount);
	}

	// new
	function getAvailableProperties() public view returns (address[] memory) {
		uint count = 0;
		for (uint i = 0; i < address(this).balance; i++) {
			address propertyAddress = address(uint160(i));
			if (properties[propertyAddress].rented == false) {
				count++;
			}
		}

		address[] memory availableProperties = new address[](count);
		count = 0;
		for (uint i = 0; i < address(this).balance; i++) {
			address propertyAddress = address(uint160(i));
			if (properties[propertyAddress].rented == false) {
				availableProperties[count] = propertyAddress;
				count++;
			}
		}
		return availableProperties;
	}
}
