const EstateAgency = artifacts.require("EstateAgency");

module.exports = function (deployer) {
	const admin1 = "0xa333716dc960B0286584fB43B38888fc2a6EC164";
	const admin2 = "0xbc165d0a44200BdD89963839562002980c305b76";
	const owner1 = "0xa61135cb9b1Ab6cFDdcdc3A9782e3e7D94BBbCb1";
	const owner2 = "0xD350C75DB6418A8b9587B3E22B037E43A636Ce0F";
	
	deployer.deploy(EstateAgency, admin1, admin2, owner1, owner2);
};
