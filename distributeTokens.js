module.exports = async function(callback) {

  const MyContract = artifacts.require("TokenCrowdsale");
  const ZackToken = artifacts.require("ZackToken");

  let contract;
  let tokenContract;

  const account_A = "0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e"; //address of random ganache address
  const account_B = "0x821aEa9a577a9b44299B9c15c88cf3087F3b5544"; //address of another random ganache address
  const account_C = "0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2"
  const addressesToFund = [ account_A, account_B, account_C ];

  MyContract.deployed().then( async (instance) => {
    contract = instance;
    let tokenAddr = await contract.token();
    tokenContract = ZackToken.at(tokenAddr)
    console.log("zack token address: ", tokenAddr)
    const promises = [];
    addressesToFund.forEach( (address) => promises.push(contract.sendTransaction({
               from: address,
               value: web3.toWei('1', 'ether'), //send 1 ether from deployer of contract => to the contract
               gas: 200000
    })));
    Promise.all(promises).then( async (results) => {
      const balances = [];
      addressesToFund.forEach( (address) => balances.push(tokenContract.balanceOf(address)));
      Promise.all(balances).then( async (balances) => {
        balances.forEach( (balance) => console.log(`token amount of each address after token purchase at ico: `, balance.toNumber() / 10**18))
      })
    });
  });
};
