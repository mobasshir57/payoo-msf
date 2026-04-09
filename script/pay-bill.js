document.getElementById('pay-bill-btn')
    .addEventListener('click', function () {
        const selectToPay = getValueFromInput('select-to-pay');
        if(selectToPay === 'Select to Pay'){
            alert('Please Select an option To Pay');
            return;
        }
        // console.log(selectToPay)
        const billerAccount = getValueFromInput('biller-account-number');
        if(billerAccount.length != 11){
            alert("Invalid Accound Number");
            return;
        }
        // console.log(billerAccount)
        const payAmmount = getValueFromInput('pay-bill-ammount')

        const currentBalance = getBalance();
        console.log(currentBalance)
        const newBalance = currentBalance - Number(payAmmount);
        if (newBalance < 0) {
            alert("Invalid Ammount")
            return;
        }

        const payBillPin = getValueFromInput('pay-bill-pin');
        if(payBillPin === '1234'){
            alert("Pay Bill Successfull")
            setBalance(newBalance);
             // transaction card add
        const transaction = document.getElementById('transaction-container');
        const newTransaction = document.createElement("div");
        newTransaction.innerHTML = `
         <div class="transaction-card p-6 bg-base-100 mb-5">
        ${selectToPay} ${payAmmount} BDT Paid to ${billerAccount} successfull at ${new Date}
        </div>
        `
        transaction.append(newTransaction);
        }else{
            alert('Invalid Pin');
            return;
        }

    })