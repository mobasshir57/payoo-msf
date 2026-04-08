document.getElementById('cashout-btn').addEventListener("click", function(){
// 1- get the agent number and validate
const cashoutNumber = getValueFromInput('cashout-number')
if(cashoutNumber.length != 11 ){
    alert('Invalid Agent Number');
    return;
}
// 2- get the ammount, 
 const cashoutAmmount = getValueFromInput('cashout-ammount');
// 3- get the current balance, validate, convert to number
const currentBalance = getBalance();
// 4- Calculate new balance
const newBalance = currentBalance - Number(cashoutAmmount);
if(newBalance < 0){
    alert("Invalid Ammount")
    return;
}
// 5- get pin and verify
const cashoutPin = getValueFromInput('cashout-pin');

if( cashoutPin ==='1234'){
    // 5.1- true:: show an alert and set balance
    alert('Cashout Successfull');
    setBalance(newBalance);
    // transaction card add
        const transaction = document.getElementById('transaction-container');
        const newTransaction = document.createElement("div");
        newTransaction.innerHTML = `
         <div class="transaction-card p-6 bg-base-100 mb-5">
        Cashout ${cashoutAmmount} BDT successfull to ${cashoutNumber} at ${new Date}
        </div>
        `
        transaction.append(newTransaction);


}else{
    // 5.2- False:: show an error alart and return
    alert('Invalive Pin')
    return;
}
})

// 1st written Script 

// document.getElementById('cashout-btn').addEventListener("click", function(){
// // 1- get the agent number and validate
// const cashoutNumberInput = document.getElementById('cashout-number');
// const cashoutNumber = cashoutNumberInput.value;
// if(cashoutNumber.length != 11 ){
//     alert('Invalid Agent Number');
//     return;
// }

// // 2- get the ammount, validate, convert to number
// const cashoutAmmountInput = document.getElementById('cashout-ammount')
// const cashoutAmmount = cashoutAmmountInput.value;

// // 3- get the current balance, validate, convert to number
// const balanceAmmount = document.getElementById('balance');
// const currentBalance = balanceAmmount.innerText;

// // 4- Calculate new balance
// const newBalance = Number(currentBalance) - Number(cashoutAmmount);
// if(newBalance < 0){
//     alert("Invalid Ammount")
//     return;
// }
// console.log(newBalance);

// // 5- get pin and verify
// const cashoutPinInput = document.getElementById('cashout-pin');
// const cashoutPin = cashoutPinInput.value;
// if( cashoutPin ==='1234'){
//     // 5.1- true:: show an alert and set balance
//     alert('Cashout Successfull');
//     balanceAmmount.innerText = newBalance;
// }else{
//     // 5.2- False:: show an error alart and return
//     alert('Invalive Pin')
//     return;
// }
// })