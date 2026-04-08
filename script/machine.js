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

// machine id > hide all > show id
function showOnly(id){
    const addMoney = document.getElementById('add-money')
    const cashOut = document.getElementById('cashout')

    //  Hide all
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");

    // show only selected id
    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}