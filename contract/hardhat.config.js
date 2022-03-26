require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/r1VTlZNL1bxpE3JMVQy9zsSe7ezhotpX",
      accounts: [
        "3618f1b8adee9b66af4d12649c5fbad9228b122789ee6c598ea5a3c03df1b64e",
      ],
    },
  },
};
