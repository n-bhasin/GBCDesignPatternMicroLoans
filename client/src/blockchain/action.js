import Web3 from "web3";
import LoanContract from "../contracts/Loan.json";
// const truffleAssert = require("truffle-assertions");
const web3 = new Web3("http://localhost:8545");
// const LOANDB = new web3.eth.Contract(
//   LoanDBContract.abi,
//   LoanDBContract.networks[5777].address
// );
// const LOANMANAGER = new web3.eth.Contract(
//   LoanManager.abi,
//   LoanManager.networks[5777].address
// );

const LOANCONTRACT = new web3.eth.Contract(
  LoanContract.abi,
  LoanContract.networks[5777].address
);

export const requestDebt = async (borrower, amount) => {
  // const accounts = await web3.eth.getAccounts();

  // const accounts = await web3.eth.getAccounts();
  const finalAmount = web3.utils.toWei(amount);
  const balance = await web3.eth.getBalance(borrower);
  console.log(finalAmount);
  console.log(balance);

  const receipt = await LOANCONTRACT.methods
    .addDebt(borrower, finalAmount)
    .send({ from: borrower, gas: 3000000 });
  // await truffleAssert.reverts(
  //   loanContract.getCredId(accounts[1]),
  //   "Error: Caller is a owner."
  // );
  // truffleAssert.eventEmitted(result, "CreateCredId", (ev) => {
  //   assert.equal(accounts[1], ev.addressOwner, "Account owner is msg.sender");
  //   assert.equal(res, ev.credId, "Event emitted proper credId");
  //   return true;
  // });
  console.log(receipt);
};

export const getAllDebtIds = async () => {
  const accounts = await web3.eth.getAccounts();

  const receipt = await LOANCONTRACT.methods
    .getIds()
    .call({ from: accounts[0], gas: 3000000 });
  console.log(receipt);
  return receipt;
};

// console.log(getAllDebtIds().then(res=>console.log()));
export const debtInfo = async (debtId) => {
  const accounts = await web3.eth.getAccounts();
  const receipt = await LOANCONTRACT.methods.debtInfoById(debtId).call({
    from: accounts[0],
  });

  return receipt;
};

export const convertToEther = (value) => {
  return web3.utils.fromWei(value);
};
