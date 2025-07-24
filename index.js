

async function connect() {
    const btn = document.getElementById("connectBtn");
    if (btn) btn.disabled = true;
    if (typeof window.ethereum !== "undefined") {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("Connected account:", accounts[0]);
        } catch (error) {
            console.error("User denied account access or error occurred:", error);
        }
    } else {
        console.log("Please install MetaMask!");
    }
    if (btn) btn.disabled = false;
}

async function execute() {
     // address
     // function
     //abi
     //node connection
    // Interact with your Lock contract: call withdraw()
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const contractABI = [
      {
        "inputs": [
          { "internalType": "uint256", "name": "_unlockTime", "type": "uint256" }
        ],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
          { "indexed": false, "internalType": "uint256", "name": "when", "type": "uint256" }
        ],
        "name": "Withdrawal",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "unlockTime",
        "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];

    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        try {
            const tx = await contract.withdraw();
            await tx.wait();
            console.log("Withdraw successful!");
        } catch (error) {
            console.error("Withdraw failed:", error);
        }
    } else {
        console.log("Please install MetaMask!");
    }
}
// No module.exports needed