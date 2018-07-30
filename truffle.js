/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "jPtHmK9yhNvvA0U13RaF";
var mnemonic = 'orbit recall loan soda harsh can dirt border position garbage hurry shine then detail monkey';

module.exports = {
  networks: {
    mainnet: {
      network_id: 1,
      host: "127.0.0.1",
      port: 8546   // Different than the default below
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey)
      },
      network_id: 3,
      gas: 3000000
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};

/*var LedgerWalletProvider = require("truffle-ledger-provider");
var infura_apikey = "jPtHmK9yhNvvA0U13RaF";
var ledgerOptions = {
    networkId: 1,
    accountsOffset: 0
};

module.exports = {
  networks: {
    ropsten: {
      provider: new LedgerWalletProvider(
          ledgerOptions,
          "https://mainnet.infura.io/" + infura_apikey
      ),
      network_id: 3,
      gas: 4600000
    }
  }
};*/