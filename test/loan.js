// contract('MetaCoin',function(accounts){
//   it("Test gas",async()=>{const meta =awaitMetaCoin.deployed();// Initial balance of the second accountconst initial =await web3.eth.getBalance(accounts[1]);
//     console.log(`Initial: ${initial.toString()}`);// Obtain gas used from the receiptconst receipt =await meta.sendCoin(accounts[2],1,{from: accounts[1]});const gasUsed = receipt.receipt.gasUsed;
//     console.log(`GasUsed: ${receipt.receipt.gasUsed}`);// Obtain gasPrice from the transactionconst tx =await web3.eth.getTransaction(receipt.tx);const gasPrice = tx.gasPrice;
//     console.log(`GasPrice: ${tx.gasPrice}`);// Final balanceconst final =await web3.eth.getBalance(accounts[1]);
//     console.log(`Final: ${final.toString()}`);
//     assert.equal(final.add(gasPrice.mul(gasUsed)).toString(), initial.toString(),"Must be equal");});});
