document.getElementById('cashout-btn').addEventListener("click", function(){
// 1- get the agent number and validate
const cashoutNumberInput = document.getElementById('cashout-number');
const cashoutNumber = cashoutNumberInput.value;
if(cashoutNumber.length != 11 ){
    alert('Invalid Agent Number');
    return;
}

// 2- get the ammount, validate, convert to number
const cashoutAmmountInput = document.getElementById('cashout-ammount')
const cashoutAmmount = cashoutAmmountInput.value;

// 3- get the current balance, validate, convert to number
const balanceAmmount = document.getElementById('balance');
const currentBalance = balanceAmmount.innerText;

// 4- Calculate new balance
const newBalance = Number(currentBalance) - Number(cashoutAmmount);
if(newBalance < 0){
    alert("Invalid Ammount")
    return;
}
console.log(newBalance);

// 5- get pin and verify
const cashoutPinInput = document.getElementById('cashout-pin');
const cashoutPin = cashoutPinInput.value;
if( cashoutPin ==='1234'){
    // 5.1- true:: show an alert and set balance
    alert('Cashout Successfull');
    balanceAmmount.innerText = newBalance;
}else{
    // 5.2- False:: show an error alart and return
    alert('Invalive Pin')
    return;
}
})