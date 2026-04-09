document.getElementById('transfer-money-btn')
.addEventListener('click', function(){

    const transferNumber = getValueFromInput('transfer-money-number')
    // console.log(transferNumber);
    if(transferNumber.length != 11){
        alert("Invalid Number");
        return;
    }

    const transferAmmount = getValueFromInput('transfer-money-ammount');
    // console.log(transferAmmount);

    const currentBalance = getBalance()
    const newBalance = currentBalance - Number(transferAmmount);
    if(newBalance < 0){
    alert("Invalid Ammount")
    return;
}

    const transferPin = getValueFromInput('transfer-money-pin');
    if(transferPin === '1234'){
        alert("Transfer Money Successfull");
        setBalance(newBalance);
        // transaction card add
        const transaction = document.getElementById('transaction-container');
        const newTransaction = document.createElement("div");
        newTransaction.innerHTML = `
         <div class="transaction-card p-6 bg-base-100 mb-5">
        Transfer Money ${transferAmmount} BDT successfull to ${transferNumber} at ${new Date}
        </div>
        `
        transaction.append(newTransaction);
    }
    else{
        alert('Invald Pin')
        return;
    }
    // console.log(transferPin);

})