const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0x2939fa0679875963022316653F31eb0e1fe9DDBc";
	const admin2 = "0xDe197dDB60c8Ee734103AB30097252303D095006";
	const owner1 = "0x8188581B1716f94b5EdA7b737f534957fc8669d7";
	const owner2 = "0x76a1728Bb0763575d800499a5122D4B446802902";

	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
