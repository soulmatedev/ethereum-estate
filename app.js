const ganacheUrl = 'http://localhost:7545';
const web3 = new Web3(new Web3.providers.HttpProvider(ganacheUrl));

const contract =  new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "admin1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "admin2",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner2",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newTotalArea",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newUsefulArea",
				"type": "uint256"
			}
		],
		"name": "PropertyAreasUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "PropertyOwnerChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalArea",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usefulArea",
				"type": "uint256"
			}
		],
		"name": "PropertyRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			}
		],
		"name": "PropertyRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "renter",
				"type": "address"
			}
		],
		"name": "RentCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rentAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rentDuration",
				"type": "uint256"
			}
		],
		"name": "RentConfirmed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rentAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rentDuration",
				"type": "uint256"
			}
		],
		"name": "RentOffered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isAdmin",
				"type": "bool"
			}
		],
		"name": "RoleChanged",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "administrators",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "properties",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalArea",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usefulArea",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rentAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rentDuration",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "rented",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalArea",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usefulArea",
				"type": "uint256"
			}
		],
		"name": "registerProperty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rentAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rentDuration",
				"type": "uint256"
			}
		],
		"name": "offerRent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			}
		],
		"name": "confirmRent",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			}
		],
		"name": "cancelRentOffer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isAdmin",
				"type": "bool"
			}
		],
		"name": "changeUserRole",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "checkBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			}
		],
		"name": "removeProperty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "oldPropertyAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			}
		],
		"name": "updatePropertyAfterTransfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalArea",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usefulArea",
				"type": "uint256"
			}
		],
		"name": "registerNewProperty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "propertyAddress",
				"type": "address"
			}
		],
		"name": "clearOldPropertyOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
], '0x5bA2c5FE497e19C2679d303255a9c57f30950806');

contract.methods.properties('0xf060759B2C58d5CEBCdcDc1fa52C561E889E7e23').call((error, result) => {
	if (error) {
		console.error('Ошибка при вызове метода контракта:', error);
	} else {
		console.log('Информация о недвижимости:', result);
	}
});



