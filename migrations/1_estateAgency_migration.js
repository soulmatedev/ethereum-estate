const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0xf060759B2C58d5CEBCdcDc1fa52C561E889E7e23";
	const admin2 = "0x3b458729BF88a18947c716EaeD432adEf83653fB";
	const owner1 = "0xE6e1Aa877F1EFa473824EB5cA975e73F3666aEB0";
	const owner2 = "0x41E74c86C36168175c5881945Dd575Efb8B3Aa58";

	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
