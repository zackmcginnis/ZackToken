### The zackCoin Ethereum blockchain smart-contract and token
This is a simple Ethereum smart-contract which can be modified and deployed to the Ethereum blockchain.
The tokens within this smart-contract can be purchased by anyone.

## To deploy this contract (or one like it):
# Step 1
There are many different ways to deploy a smart-contract onto the Ethereum mainnet or testnet(s).

We could accomplish this by deploying the contract through a dApp (decentralized application), which is typically done via a local/remote node connected and synced with the Ethereum blockchain (mainnet/testnet(s)).

We could also deploy through the Chrome MetaMask plugin, which essentially connects your browser to a remote Ethereum node to interact with the Ethereum blockchain.

The method I prefer for simple contract deployments is through Mist/Ethereum Wallet. The only downside to this method is that since this application runs a local Ethereum node on your machine, you will need to download the entire Ethereum blockchain prior to deploying your contract.

Get the latest version here https://github.com/ethereum/mist/releases

# Step 2
After creating your account and syncing the blockchain, the remaining steps are fairly simple.
From 'Wallets', select the 'Contracts' icon.
Select 'Deploy new contract', choose your account (with real/fake ether depending on the network you are deploying to).
Copy and paste your ```xxxxxxx.sol ``` file into the "source code" field.
You should see the name of your contract appear on the dropdown to the right, along with various other contructor parameters specified in the .sol file.
Select "deploy", and enter your maximum gas fee (should be near the recommended fee, which is also listed).

# Step 3
After your transaction has been confirmed, you should see your contract listed when you select your wallet used to deploy it from Mist.
From here, you can interact with it however you choose.
