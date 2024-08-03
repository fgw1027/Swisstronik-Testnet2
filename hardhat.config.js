require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "0bf0e4eee53704e026b1dc9992a017442bdce2a9fd70664c2d5c5b9a7943ed48";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
