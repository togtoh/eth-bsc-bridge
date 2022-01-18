const BscToken = artifacts.require("BscToken");

module.exports = async (done) => {
  const [addr, _] = await web3.eth.getAccounts();
  const tokenBsc = await BscToken.deployed();
  const balance = await tokenBsc.balanceOf(addr);
  console.log(balance.toString());
  done();
};
