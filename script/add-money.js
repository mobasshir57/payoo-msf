document.getElementById('add-money-btn').addEventListener("click", function(){
    // 1- get bank name
    const bankName = getValueFromInput('add-money-bank')
    if(bankName == 'Select a bank'){
        alert('Please select a Bank Name');
        return;
    }
    
    // 2- get bank Acc Number
    const bankAccNumber = getValueFromInput('bank-account-number')
    if(bankAccNumber.length != 11){
        alert('Invalid Bank Account Number')
        return;
    }
    // 3- get Ammount and add to account
    const addAmmount = getValueFromInput('add-money-ammount')
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addAmmount);

    // 4- get pin and validate
    const addMoneyPin = getValueFromInput('add-money-pin');
    if(addMoneyPin === '1234'){
        alert(`Add money successfull from ${bankName}`)
        setBalance(newBalance);

        // transaction card add
        const transaction = document.getElementById('transaction-container');
        const newTransaction = document.createElement("div");
        newTransaction.innerHTML = `
         <div class="transaction-card p-6 bg-base-100 mb-5">
        Add money successfull from ${bankName} Account no: ${bankAccNumber} - at ${new Date}
        </div>
        `
        transaction.append(newTransaction);

    }else{
        alert('Please Enter a Valide Pin Number')
        return;
    }
})