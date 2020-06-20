const LoanDB = artifacts.require("LoanDB");
const LoanManager = artifacts.require("LoanManager");
const LoanWallet = artifacts.require("LoanWallet");
const Loan = artifacts.require("Loan");
module.exports = function (deployer) {
  deployer.deploy(LoanDB);
  deployer.deploy(LoanManager);
  deployer.deploy(LoanWallet);
  deployer.deploy(Loan);
};
