require('babel-register');
require('babel-polyfill');
require('dotenv').config()
const PrivateKeyProvider = require("truffle-privatekey-provider");


var HDWalletProvider =require("truffle-hdwallet-provider")
var mnemonic = "detect relief daughter weird artwork pelican want victory guess layer acid detail"
module.exports = {


  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    
    bsctest: {
      
      provider: function() { 
       
       return new HDWalletProvider(mnemonic,"https://data-seed-prebsc-1-s1.binance.org:8545");
      },
      network_id: 97,
      cconfirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
      
    },

    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/add26e14e83a40fe9b8b4f1af58b7d02");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
 
  },
    

  contracts_build_directory: "./src/contracts/",
  compilers: {
    solc: {
      version: "0.8.10",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  plugins:['truffle-plugin-verify'],
  api_keys: {
    bscscan : "5I5MSEBQGQH3Q84CUYPBUNMIRAJWVDPZHT",
  },

}