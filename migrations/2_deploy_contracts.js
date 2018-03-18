var TokenCrowdsale = artifacts.require("TokenCrowdsale");

module.exports = function(deployer, network, accounts) {

  const amountOfTokensToCreate = 1000000 //1 million to test
  const startTime = Math.round((new Date(Date.now() - 86400000).getTime())/1000); // Yesterday
  const endTime = Math.round((new Date().getTime() + (86400000 * 20))/1000); // Today + 20 days
  const rate =  new web3.BigNumber(1000)//1000//tokens per 1 eth
  const goal = web3.toWei('50000', 'ether')
  const cap = web3.toWei('100000', 'ether')
  const walletAddress = "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef"

  deployer.deploy(TokenCrowdsale, amountOfTokensToCreate, startTime, endTime, rate, goal, cap, walletAddress, {from: accounts[1]});
};
