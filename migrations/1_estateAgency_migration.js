const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0x71431B2b1D1F790F21b0240390B08C5a2F816555";
	const admin2 = "0x457b17ca513C2cae15C88771aD0f6A7f3EDC1141";
	const owner1 = "0x9C72d9BDbe243AC277C950C50074Cd69E7bF8135";
	const owner2 = "0xF1bc55D5919EdB6F4d983Bb68Cd7c525f07fD75F";

	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
