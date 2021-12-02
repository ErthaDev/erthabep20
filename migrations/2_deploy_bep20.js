const ErthaBEP20 = artifacts.require("ErthaBEP20");

module.exports = function (deployer) {
  deployer.deploy(ErthaBEP20);
};