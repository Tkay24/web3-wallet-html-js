const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const currentTimestamp = Math.floor(Date.now() / 1000);
  const unlockTime = currentTimestamp + 60 * 60 * 24;

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime);
  await lock.waitForDeployment();

  console.log("Contract deployed to:", lock.target); // ethers v6 uses lock.target for address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
