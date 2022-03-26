const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "d6d316ee93ff41b09beaf3cfb919c078";

const fs = require('fs');
const mnemonicRopsten = fs.readFileSync(".secret.ropsten").toString().trim();
const mnemonicRinkeby = fs.readFileSync(".secret.rinkeby").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" 
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonicRopsten, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,
      gasPrice: 50000000000 
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonicRinkeby, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4
    }
  }
};