const EthToken = artifacts.require("EthToken");

module.exports = async (done) => {
  const [addr, _] = await web3.eth.getAccounts();
  const tokenEth = await EthToken.deployed();
  const balance = await tokenEth.balanceOf(addr);
  console.log(balance.toString());
  done();
};
