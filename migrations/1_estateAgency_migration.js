const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0x9F50e3B1c55E21112f8C4c0ED0CDD6b0714008D9";
	const admin2 = "0xA0c29EeBca71f5598b670A955aaE34bE1f539921";
	const owner1 = "0xD67718Bb0078a51E17B0F41FDa9bc2899D9D9Ee3";
	const owner2 = "0x070F4a510C0d952D9ac2B5048232b226b4bc1B57";

	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
