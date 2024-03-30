const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0x5C874151731adCa81Bae11B6623F2752152C44c4";
	const admin2 = "0x027E2903Bc0F776b6353AAb224488bd4CD92e765";
	const owner1 = "0xb721272a81a1f274b0BEBA1cb1CF37149b34aA24";
	const owner2 = "0x4A6D51864a872a9eb52D7E66359e731827826D75";

	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
