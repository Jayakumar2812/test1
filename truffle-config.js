const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
mnemonic = process.env.mnemonic


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    polygon_testnet:{
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://polygon-mumbai.g.alchemy.com/v2/EZXTtfDdPH04LtJxfIyxEV0pkyJ4_Zm2");
      },
      network_id: '80001',
    },

    develop: {
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: '0.8.10',
    }
 }
};
