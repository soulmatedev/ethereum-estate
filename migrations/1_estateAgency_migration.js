const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0x9F34c82A8cdb3d15A137D0b8e0C8F4f11e37b0d1";
	const admin2 = "0xB674E8b4Fe811b8FEcfeeF02D538a97e78f4655a";
	const owner1 = "0x565428D8d9f8C65E03c3A84b4EA434eD6ACc4040";
	const owner2 = "0x4124aa54Ee639c9026003E7a7e32eA96d75E6995";

	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
