document.getElementById('bonus-btn').addEventListener('click', function(){
    const bonusCoupon = getValueFromInput('bonus-coupon');
    if(bonusCoupon != 'MOBASSHIR100'){
        alert('Please, Enter a valid Coupon.')
    }
    const currentBalance = getBalance();
    const couponCode = 100;
    const newBalance = currentBalance + Number(couponCode);

    if(bonusCoupon === 'MOBASSHIR100'){
        alert('Congratolation! you got 100 BDT Bonus')
        setBalance(newBalance);
        // transaction card add
        const transaction = document.getElementById('transaction-container');
        const newTransaction = document.createElement("div");
        newTransaction.innerHTML = `
         <div class="transaction-card p-6 bg-base-100 mb-5">
        You Got Bonus BDT 100 with Coupon at ${new Date}
        </div>
        `
        transaction.append(newTransaction);
    }else{
        alert("Please Enter a Valid Coupon,");
        return;
    }
})