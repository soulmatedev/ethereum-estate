const web3 = new Web3('http://localhost:7545');

const contractABI = [
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
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawFunds",
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
	}
];

const contractAddress = '0x565e08b65D0F84F563Cd416A55CAE8C8613bB017';

const estateAgencyContract = new web3.eth.Contract(contractABI, contractAddress);

estateAgencyContract.methods.properties('0x09407Ad85c6EF8192a046E0bFe6895D268500457').call((error, result) => {
	if (error) {
		console.error('Ошибка при вызове метода контракта:', error);
	} else {
		console.log('Информация о недвижимости:', result);
	}
});

const confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('click', async (event) => {
	event.preventDefault();
	
	try {
		const propertyAddress = document.getElementById('propertyAddress').value;
		const totalArea = document.getElementById('totalArea').value;
		const usefulArea = document.getElementById('usefulArea').value;
		
		await estateAgencyContract.methods.registerProperty(propertyAddress, totalArea, usefulArea).send({
			from: '0x09407Ad85c6EF8192a046E0bFe6895D268500457',
			gas: 3000000
		});
		
		console.log('Недвижимость успешно зарегистрирована!');
	} catch (error) {
		console.error('Ошибка при регистрации недвижимости:', error);
	}
});

document.addEventListener('DOMContentLoaded', function() {
	const offerRentForm = document.getElementById('offerRentForm');
	
	offerRentForm.addEventListener('submit', async function(event) {
		event.preventDefault();
		
		try {
			const propertyAddress = document.getElementById('propertyAddress').value;
			const rentAmount = document.getElementById('rentAmount').value;
			const rentDuration = document.getElementById('rentDuration').value;
			
			await estateAgencyContract.methods.offerRent(propertyAddress, rentAmount, rentDuration).send({
				from: '0x09407Ad85c6EF8192a046E0bFe6895D268500457',
				gas: 3000000
			});
			
			console.log('Предложение аренды успешно отправлено!');
		} catch (error) {
			console.error('Ошибка при отправке предложения аренды:', error);
		}
	});
});

