# 🚀 Web3 Wallet Connect Project

This project demonstrates multiple Web3 wallet connection implementations using a **shared smart contract** across different stacks and libraries.

---

## 🔗 Smart Contract Info

- **Address:** `0x5fbdb2315678afecb367f032d93f642f64180aa3`
- **ABI:** See `/contract/abi.json`

---

## 📁 Project Structure

---

## ✅ Implemented Versions

### `html-js-version/`

🟢 **Status:** Complete  
Basic MetaMask connection using **HTML, JS, and Ethers.js**.

**Steps to use:**

1. Open `index.html` in your browser.  
2. Click "Connect Wallet".  
3. Wallet address will be displayed after successful connection.

---


### `nextjs-ethers-version/`


React + Next.js with Ethers.js using functional components and hooks.

### `nextjs-react-moralis-version/'


Wallet connection via [web3-react](https://github.com/Uniswap/web3-react).

### `nextjs-react-moralis-version/`

🛠️ **Status:** Under development  
Integration with [Moralis](https://moralis.io/) for easy Web3 backend.

### `nextjs-web3modal-version/`

🛠️ **Status:** Under development  
Wallet connection using [Web3Modal](https://web3modal.com/).

### `nextjs-usedapp-version/`

🛠️ **Status:** Under development  
Built with [useDapp](https://usedapp.io/).

---

## 🧠 Shared Contract

All versions interact with the same contract:

```js
import contractABI from '../contract/abi.json';
import { CONTRACT_ADDRESS } from '../contract/address';
