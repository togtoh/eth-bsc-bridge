const EthToken = artifacts.require("EthToken");
const BscToken = artifacts.require("BscToken");

module.exports = async (done) => {
  const [addr, _] = await web3.eth.getAccounts();
  const tokenEth = await EthToken.deployed();
  const tokenBsc = await BscToken.deployed();
  const balance = await tokenEth.balanceOf(addr);
  await tokenBsc.mint(balance);
  await tokenEth.burn(balance);
  done();
};
