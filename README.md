# The Zack Token Ethereum blockchain ERC20 compliant token and crowdsale.
This is project contains a crowdsale contract which deploys the Zack Token to a specified Ethereum network. The token may then be purchased and used for whatever utility you can imagine!

The contract can be found on the Rinkeby testnet at https://rinkeby.etherscan.io/address/0xbfff505537ea19aad0a28ced8793e5d8496b809f

## To deploy this contract (or one like it):
### Step 1
There are many different ways to deploy a smart-contract onto the Ethereum mainnet or testnet(s).

#### Option 1 (preferred)
The method I prefer is through our local machine running a geth instance connected and synced with the Ethereum blockchain (mainnet/testnet(s)). We can use Ganache to deploy our contract to a private testnet.
To do this, make sure Ganache is running, and enter the following command in your project directory:
`truffle migrate --compile-all --reset --network ganache`
This will re-compile all contract files, and will overwrite any previous migrations you may have run.

But, when deploying to a public Ethereum testnet (Ropsten, Rinkeby, etc...) or mainnet, we must run a geth instance and sync up with the network we wish to deploy to.
Ensure the latest version of geth is installed on your local machine.
Navigate to the directory where you wish to store chain data, and run:
```sh
geth --datadir=./chaindata --rinkeby --fast --rpc --rpcapi db,eth,net,web3,personal
```
While geth is syncing, in the same directory, run:
```sh
geth attach geth.ipc
```
This will launch a console in which you can create/import/unlock accounts.
Visit [go-ethereum](https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts) to create or import, and then unlock your account.
Visit the [Rinkeby test faucet](https://faucet.rinkeby.io/) to fund your accounts with Ether.
Once the sync is complete, you will be able to run
`truffle migrate --compile-all --reset --network enter_your_desired_network_here` to compile and deploy your contracts.
Note: do not forgot to update all of your local `truffle.js` files to set the `from` property to the address you want to use to deploy the contract.

#### Option 2
We could also deploy through the Chrome MetaMask plugin (with Remix), which essentially connects your browser to a remote Ethereum node (Infura) to interact with the Ethereum blockchain.

#### Option 3
Another popular method is through Mist/Ethereum Wallet. The only downside to this method is that since this application runs a local Ethereum node on your machine, you will need to download the entire Ethereum blockchain prior to deploying your contract.

Get the latest version here https://github.com/ethereum/mist/releases

### Step 2
After creating your account and syncing the blockchain, the remaining steps are fairly simple.
From 'Wallets', select the 'Contracts' icon.
Select 'Deploy new contract', choose your account (with real/fake ether depending on the network you are deploying to).
Copy and paste your ```xxxxxxx.sol ``` file into the "source code" field.
You should see the name of your contract appear on the dropdown to the right, along with various other contructor parameters specified in the .sol file.
Select "deploy", and enter your maximum gas fee (should be near the recommended fee, which is also listed).

### Step 3
After your transaction has been confirmed, you should see your contract listed when you select your wallet used to deploy it from Mist.
From here, you can interact with it however you choose.

## Testing
Simply run
```sh
truffle test
```
to begin running the tests contained within `/test/TestCrowdsale.js`
