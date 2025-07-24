const { ethers } = require("hardhat");

async function main() {
  // Replace this with your actual private key
  const PRIVATE_KEY =
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

  // Connect to the local Hardhat network
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

  // Import wallet using the private key
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

  console.log("Deploying with wallet:", wallet.address);

  // Deploy the contract
  const Web3Connect = await ethers.getContractFactory("Web3Connect", wallet);
  const contract = await Web3Connect.deploy();

  await contract.deployed();

  console.log("Web3Connect deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 