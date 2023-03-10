/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNerwork: "goerli",
    nerworks: {
      goerli: {
        hardhat: {},
        url: "https://rpc.ankr.com/eth_goerli",
        accounts: [`0x${process.env.WALLET_PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
