const TrilliamToken = artifacts.require("./TrilliamToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(TrilliamToken);
};