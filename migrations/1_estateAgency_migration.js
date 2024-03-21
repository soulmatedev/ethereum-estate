const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0x09407Ad85c6EF8192a046E0bFe6895D268500457";
	const admin2 = "0x27FC085B43E18119848EFccDe56E0882c40f9E40";
	const owner1 = "0x007069812A2508AaF897a84b73e6394c637e8395";
	const owner2 = "0xE32b46ed354d7840F92a90F841dCf8E0F0107c43";
	
	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
