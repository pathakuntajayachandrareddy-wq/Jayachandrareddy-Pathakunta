AGRITRACE - VS CODE SETUP
=========================

1. Extract the AgriTrace_VSCode.zip file.
2. Open the extracted AgriTrace_VSCode folder in VS Code.
3. Open a terminal in VS Code and run:
       npm install

4. Deploy the Solidity contract:
   - Open https://remix.ethereum.org
   - Create a file named AgriculturalTraceability.sol
   - Paste the code from contracts/AgriculturalTraceability.sol
   - Compile with Solidity 0.8.20 or a compatible 0.8.x compiler.
   - In Deploy & Run, select Injected Provider - MetaMask.
   - Select Sepolia in MetaMask and deploy.
   - Copy the deployed CONTRACT ADDRESS from Remix.

5. Configure the website:
   - Open frontend/config.js
   - Replace PASTE_DEPLOYED_CONTRACT_ADDRESS_HERE with the deployed
     contract address (not your wallet address).
   - EXPECTED_CHAIN_ID is 11155111 for Sepolia.

6. Run the website:
       npm start

7. Open:
       http://localhost:3000

8. Click Connect MetaMask and approve the connection.
   Ensure MetaMask is on Sepolia and select the intended wallet:
   0xdaA458629Ab92010e7AaeD0B8AFF910f487fd8a0

9. Register the pre-filled sample:
   Produce ID: 1001
   Farmer name: Ramana
   Crop type: Rice
   Quantity: 1000
   Market location: Kadapa

IMPORTANT
---------
- The wallet address and contract address are different.
- The contract must be deployed before the website can read/write records.
- Use Sepolia test ETH to pay test-network gas fees.
- If Produce ID 1001 has already been registered in this contract, use
  another ID or deploy a fresh contract for a clean demonstration.
- This prototype stores submitted records; it does not independently
  verify physical farm origin, crop identity, or quantity.
