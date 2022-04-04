var ServiceAgreement = artifacts.require("ServiceAgreement");

module.exports = function(deployer) {
  deployer.deploy(ServiceAgreement);
};