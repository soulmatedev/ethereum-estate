const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0xE64FFc2007Be7c89103DE804628d0e3F77EA8a92";
	const admin2 = "0x9c196C65b6027E65345423A637a58a2Ad8289f0d";
	const owner1 = "0xF4702257F00B4f1C3d119657b6430eC66581Ff2f";
	const owner2 = "0x82663d1e42Ea4c908c4506D1eDD8fA2cfB93Bc84";

	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
