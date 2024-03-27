const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0x046f284908412C34e92AbB599A78B5299273C168";
	const admin2 = "0xdb549FB830b2E3cBAA869e410c15f33AEa445543";
	const owner1 = "0x6A99bee10fc73149FCc1C94C2D71322FD1f1aD22";
	const owner2 = "0x91be0Be0741CEE76273DA7E2A5E8c7E23d928768";
	
	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
