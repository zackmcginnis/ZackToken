var TokenCrowdsale = artifacts.require("TokenCrowdsale");
var ZackToken = artifacts.require("ZackToken");

contract('TokenCrowdsale', function(accounts) {
    it('should deploy the token and store the address', (done) =>{
        TokenCrowdsale.deployed().then(async (instance) => {
            const token = await instance.token.call();
            assert(token, 'Token address couldn\'t be stored');
            done();
       });
    });

    // it('should set stage to PreICO', function(done){
    //     HashnodeCrowdsale.deployed().then(async(instance) => {
    //       await instance.setCrowdsaleStage(0);
    //       const stage = await instance.stage.call();
    //       assert.equal(stage.toNumber(), 0, 'The stage couldn\'t be set to PreICO');
    //       done();
    //    });
    // });

    it('one ETH should buy 1000 ZACK tokens in PreICO', function(done){
        TokenCrowdsale.deployed().then( async (instance) => {
            const data = await instance.sendTransaction({ from: accounts[7], value: web3.toWei(1, "ether")});
            const tokenAddress = await instance.token.call();
            const ZackToken = ZackToken.at(tokenAddress);
            const tokenAmount = await ZackToken.balanceOf(accounts[7]);
            assert.equal(tokenAmount.toNumber(), 1000*(10**18), 'The sender didn\'t receive the tokens as per PreICO rate');
            done();
       });
    });

    it('should transfer the ETH to wallet immediately in Pre ICO', function(done){
        TokenCrowdsale.deployed().then( async (instance) => {
            const walletAddress = await instance.wallet.call();
            let balanceOfBeneficiary = await web3.eth.getBalance(walletAddress);
            balanceOfBeneficiary = Number(balanceOfBeneficiary.toString(10));

            await instance.sendTransaction({ from: accounts[1], value: web3.toWei(2, "ether")});

            let newBalanceOfBeneficiary = await web3.eth.getBalance(walletAddress);
            newBalanceOfBeneficiary = Number(newBalanceOfBeneficiary.toString(10));

            assert.equal(newBalanceOfBeneficiary, balanceOfBeneficiary + 2000000000000000000, 'ETH couldn\'t be transferred to the beneficiary');
            done();
       });
    });

    it('should set variable `weiRaised` correctly', (done) => {
        TokenCrowdsale.deployed().then(async (instance) => {
            var amount = await instance.weiRaised.call();
            assert.equal(amount.toNumber(), web3.toWei(3, "ether"), 'Total ETH raised in PreICO was not calculated correctly');
            done();
       });
    });

    // // it('should set stage to ICO', function(done){
    // //     TokenCrowdsale.deployed().then(async function(instance) {
    // //       await instance.setCrowdsaleStage(1);
    // //       const stage = await instance.stage.call();
    // //       assert.equal(stage.toNumber(), 1, 'The stage couldn\'t be set to ICO');
    // //       done();
    // //    });
    // // });
    //
    it('1.5 ETH should buy 1500 RWK Tokens in ICO', function(done){
        TokenCrowdsale.deployed().then(async (instance) => {
            const data = await instance.sendTransaction({ from: accounts[2], value: web3.toWei(1.5, "ether")});
            const tokenAddress = await instance.token.call();
            const ZackToken = ZackToken.at(tokenAddress);
            const tokenAmount = await ZackToken.balanceOf(accounts[2]);
            assert.equal(tokenAmount.toNumber(), 1500000000000000000000, 'The sender didn\'t receive the tokens as per ICO rate');
            done();
       });
    });

    // it('should transfer the raised ETH to RefundVault during ICO', function(done){
    //     TokenCrowdsale.deployed().then(async function(instance) {
    //         var vaultAddress = await instance.vault.call();
    //
    //         let balance = await web3.eth.getBalance(vaultAddress);
    //
    //         assert.equal(balance.toNumber(), 1500000000000000000, 'ETH couldn\'t be transferred to the vault');
    //         done();
    //    });
    // });
    //
    // it('Vault balance should be added to our wallet once ICO is over', function(done){
    //     TokenCrowdsale.deployed().then(async function(instance) {
    //         let balanceOfBeneficiary = await web3.eth.getBalance(accounts[9]);
    //         balanceOfBeneficiary = balanceOfBeneficiary.toNumber();
    //
    //         var vaultAddress = await instance.vault.call();
    //         let vaultBalance = await web3.eth.getBalance(vaultAddress);
    //
    //         await instance.finish(accounts[0], accounts[1], accounts[2]);
    //
    //         let newBalanceOfBeneficiary = await web3.eth.getBalance(accounts[9]);
    //         newBalanceOfBeneficiary = newBalanceOfBeneficiary.toNumber();
    //
    //         assert.equal(newBalanceOfBeneficiary, balanceOfBeneficiary + vaultBalance.toNumber(), 'Vault balance couldn\'t be sent to the wallet');
    //         done();
    //    });
    // });
});
