const EthToken = artifacts.require("EthToken");

module.exports = function (deployer) {
  await deployer.deploy(EthToken);
  await deployer.deploy(BscToken);
};
