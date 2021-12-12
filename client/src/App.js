import React, { Component } from "react";
import getWeb3 from "./getWeb3";

import "./App.css";
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "challengeId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "challengeOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "githubChallengeLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bountyAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endTiming",
				"type": "uint256"
			}
		],
		"name": "ChallengeAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "challengeId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "challengeOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "challengeWinner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "githubSolutionLink",
				"type": "string"
			}
		],
		"name": "ChallengeConcluded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "challengeId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "challengeOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isAlive",
				"type": "bool"
			}
		],
		"name": "ChallengeExpired",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
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
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "githubChallengeLink",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "bountyAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTiming",
				"type": "uint256"
			}
		],
		"name": "Addbounty",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "challengeCount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "githubSolutionLink",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "winner",
				"type": "address"
			}
		],
		"name": "ConcludeBounty",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToChallengeCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "addressToChallenges",
		"outputs": [
			{
				"internalType": "string",
				"name": "challengeId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "challengecount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "githubChallengeLink",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "endTiming",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bountyAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "challengeOwner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "challengeWinner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "githubSolutionLink",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "rewarded",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isAlive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "challengeCount",
				"type": "uint256"
			}
		],
		"name": "expiredBounty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


class App extends Component {
  state = { storageValue: 0,balanceOfUser:0, web3: null, accounts: null, contract: null,networkId:null };
  

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const instance = new web3.eth.Contract(
        abi,
        "0xb45753C33Ffd0ab0B85C54eF10c096D1dc2Ac07C",
      );
      const balance = await instance.methods.balanceOf(accounts[0]).call();
      // balance
      

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, storageValue: balance });

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3 or accounts or contract or kinldy check your networkId. Check console for details`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.mint("0x39cDaB1D6c731Babea4CBbe97BE904959aDa759F",1000).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.balanceOf("0x39cDaB1D6c731Babea4CBbe97BE904959aDa759F").call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };
   mint = async() => {
	   console.log("hi")
    const { accounts, contract } = this.state;
    await contract.methods.mint("0x39cDaB1D6c731Babea4CBbe97BE904959aDa759F",1000).send({ from: accounts[0] });
	console.log(accounts[0])
  }
  balanceOf = async() => {
    const { accounts, contract } = this.state;
    const response = await contract.methods.balanceOf({from:accounts[0]}).call();
    this.setState({ storageValue: response });
  } 
  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
        <button 
			onClick={this.mint}
        
         className="px-8 py-3 border rounded-md text-base font-medium text-white bg-indigo-600  hover:text-indigo-800">
         transfer 
          </button>
      </div>
    );
  }
}

export default App;
