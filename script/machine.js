// Machine ID -> Input Value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// machine -> Balance
function getBalance() {
    const balanceAmmount = document.getElementById('balance');
    const Balance = balanceAmmount.innerText;
    return Number(Balance);
}

// machine Value->Set Balance
function setBalance(value) {
    const balanceAmmount = document.getElementById('balance');
    balanceAmmount.innerText = value;
}