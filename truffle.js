module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,  //7545 = ganache, use 8545 for most other private local testnets
      network_id: "*", // Match any network id
      gas: "8000000",
      from: '0xf17f52151EbEF6C7334FAD080c5704D77216b732' //THIS SHOULD NOT BE THE ADDRESS RUNNING THE ETHEREUM BRIDGE (if running)
    },
    rinkeby: {
     host: "localhost",
     port: 8545,
     network_id: "4", // Rinkeby ID 4
     from: "0a189f2f6b7f58f7169aca977981b06979761bed", // account from which to deploy
     gas: 7400000,
     gasPrice: 10000000000//wei
    },
    live: {
      host: "", // Random IP for example purposes (do not use)
      port: "",
      network_id: 1,        // Ethereum public network
      // optional config values:
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
