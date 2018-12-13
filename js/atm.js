//Global Variables
var User1 = {
    firstName: 'Travis',
    lastName: 'Cooley',
    pin: 1234,
    card: 1234,
    balance: {
        Checking: 300,
        Savings: 600
    }
};
var prompt = document.getElementById('prompt');
var choices = document.getElementById('choices');
var choicesOver = document.getElementsByClassName('choices');
var change = document.getElementsByTagName('button');
var output = document.getElementById('output');
var inputScreen = document.getElementById('inputScreen');
var withdrawnAmount = 0;
var depositAmount = 0;
var stage = 0;

//SignIn Account / Account Main Screen
function enterCardScreen() {
    optionHidden();
    choicesHidden();
    keypad();
    prompt.innerText = 'Enter Card Number';
    inputScreen.classList.add('input');
};
function enterPinScreen() {
    prompt.innerText = 'Enter PIN Number';
    output.innerText = '';
};
function keypad(value) {
    padShow();
    if (value === 'b') {
        var input = document.getElementById('output').innerText;
        input = input.split('');
        input.pop();
        input = input.join('');
        output.innerText = input;
    } else if (value === 'x') {
        output.innerText = '';
    } else if (value === 'e') {
        if (stage === 0) {
            verifyCard();
        } else if (stage === 1) {
            checkPin();
        }
    } else {
        if (value) {
            output.innerText += value;
        }
    }
};
function verifyCard() {
    if (Number(output.textContent) !== Number(User1.card)) {
        prompt.innerText = 'Invalid Card';
        output.innerText = '';
    } else {
        stage = 1;
        enterPinScreen();
    }
};
function checkPin() {
    if (Number(output.textContent) !== Number(User1.pin)) {
        prompt.innerText = 'Invalid Pin';
        output.innerText = '';
    } else {
        stage = 2;
        dashboard();
    }
};
function dashboard() {
    padHidden();
    dashboardOptions();
    prompt.innerText = 'Welcome: ' + User1.firstName + ' ' + User1.lastName;
    inputScreen.classList.remove('input');
    output.innerText = '';
    choicesOver[0].innerText = 'Withdrawal';
    choicesOver[1].innerText = 'Deposit';
    choicesOver[3].innerText = 'Check Balance';
    choicesOver[4].innerText = 'Exit';
};

// Withdrawal
function withdrawalScreen() {
    optionHidden();
    choicesHidden();
    withdrawalScreenOptions();
    prompt.innerText = 'Checking or Saving?';
    choicesOver[0].innerText = 'Checking';
    choicesOver[3].innerText = 'Saving';
};
function withdrawalChecking() {
    optionHidden();
    withdrawalAmountOptions();
    prompt.innerText = 'Checking Balance: ' + User1.balance.Checking;
    choicesOver[0].innerText = '$20';
    choicesOver[1].innerText = '$40';
    choicesOver[2].innerText = '$60';
    choicesOver[3].innerText = '$80';
    choicesOver[4].innerText = '$100';
    stage = 2;
};
function withdrawalSaving() {
    optionHidden();
    withdrawalAmountOptions();
    prompt.innerText = 'Saving Balance: ' + User1.balance.Savings;
    choicesOver[0].innerText = '$20';
    choicesOver[1].innerText = '$40';
    choicesOver[2].innerText = '$60';
    choicesOver[3].innerText = '$80';
    choicesOver[4].innerText = '$100';
    stage = 3;
};
function withdrawal20() {
    if (stage === 2) {
        withdrawnAmount = 20;
        User1.balance.Checking = User1.balance.Checking - 20;
        newWithdrawalCheckingBalance();
    } else if (stage === 3) {
        withdrawnAmount = 20;
        User1.balance.Savings = User1.balance.Savings - 20;
        newWithdrawalSavingBalance();
    }
};
function withdrawal40() {
    if (stage === 2) {
        withdrawnAmount = 40;
        User1.balance.Checking = User1.balance.Checking - 40;
        newWithdrawalCheckingBalance();
    } else if (stage === 3) {
        withdrawnAmount = 40;
        User1.balance.Savings = User1.balance.Savings - 40;
        newWithdrawalSavingBalance();
    }
};
function withdrawal60() {
    if (stage === 2) {
        withdrawnAmount = 60;
        User1.balance.Checking = User1.balance.Checking - 60;
        newWithdrawalCheckingBalance();
    } else if (stage === 3) {
        withdrawnAmount = 60;
        User1.balance.Savings = User1.balance.Savings - 60;
        newWithdrawalSavingBalance();
    }
};
function withdrawal80() {
    if (stage === 2) {
        withdrawnAmount = 80;
        User1.balance.Checking = User1.balance.Checking - 80;
        newWithdrawalCheckingBalance();
    } else if (stage === 3) {
        withdrawnAmount = 80;
        User1.balance.Savings = User1.balance.Savings - 80;
        newWithdrawalSavingBalance();
    }
};
function withdrawal100() {
    if (stage === 2) {
        withdrawnAmount = 100;
        User1.balance.Checking = User1.balance.Checking - 100;
        newWithdrawalCheckingBalance();
    } else if (stage === 3) {
        withdrawnAmount = 100;
        User1.balance.Savings = User1.balance.Savings - 100;
        newWithdrawalSavingBalance();
    }
};
function newWithdrawalCheckingBalance() {
    optionHidden();
    choicesHidden();
    goOptions();
    prompt.innerHTML = '<h2>Checking Balance: ' + User1.balance.Checking + '</h2><br>' + '<h2>Withdrawn Amount: ' + withdrawnAmount + '</h2>';
    choicesOver[2].innerText = 'Done';
    choicesOver[5].innerText = 'Continue';
};
function newWithdrawalSavingBalance() {
    optionHidden();
    choicesHidden();
    goOptions();
    prompt.innerHTML = '<h2>Saving Balance: ' + User1.balance.Savings + '</h2><br>' + '<h2>Withdrawn Amount: ' + withdrawnAmount + '</h2>';
    choicesOver[2].innerText = 'Done';
    choicesOver[5].innerText = 'Continue';
};

// Deposit
function depositScreen() {
    optionHidden();
    choicesHidden();
    depositScreenOptions();
    prompt.innerText = 'Checking or Saving?';
    choicesOver[0].innerText = 'Checking';
    choicesOver[3].innerText = 'Saving';
};
function depositChecking() {
    optionHidden();
    choicesHidden();
    depositAmountOptions();
    prompt.innerText = 'Checking Balance: ' + User1.balance.Checking;
    choicesOver[0].innerText = '$20';
    choicesOver[1].innerText = '$40';
    choicesOver[2].innerText = '$60';
    choicesOver[3].innerText = '$80';
    choicesOver[4].innerText = '$100';
    stage = 2;
};
function depositSaving() {
    optionHidden();
    choicesHidden();
    depositAmountOptions();
    prompt.innerText = 'Saving Balance: ' + User1.balance.Savings;
    choicesOver[0].innerText = '$20';
    choicesOver[1].innerText = '$40';
    choicesOver[2].innerText = '$60';
    choicesOver[3].innerText = '$80';
    choicesOver[4].innerText = '$100';
    stage = 3;
};
function deposit20() {
    if (stage === 2) {
        depositAmount = 20;
        User1.balance.Checking = User1.balance.Checking + 20;
        newDepositCheckingBalance();
    } else if (stage === 3) {
        depositAmount = 20;
        User1.balance.Savings = User1.balance.Savings + 20;
        newDepositSavingBalance();
    }
};
function deposit40() {
    if (stage === 2) {
        depositAmount = 40;
        User1.balance.Checking = User1.balance.Checking + 40;
        newDepositCheckingBalance();
    } else if (stage === 3) {
        depositAmount = 40;
        User1.balance.Savings = User1.balance.Savings + 40;
        newDepositSavingBalance();
    }
};
function deposit60() {
    if (stage === 2) {
        depositAmount = 60;
        User1.balance.Checking = User1.balance.Checking + 60;
        newDepositCheckingBalance();
    } else if (stage === 3) {
        depositAmount = 60;
        User1.balance.Savings = User1.balance.Savings + 60;
        newDepositSavingBalance();
    }
};
function deposit80() {
    if (stage === 2) {
        depositAmount = 80;
        User1.balance.Checking = User1.balance.Checking + 80;
        newDepositCheckingBalance();
    } else if (stage === 3) {
        depositAmount = 80;
        User1.balance.Savings = User1.balance.Savings + 80;
        newDepositSavingBalance();
    }
};
function deposit100() {
    if (stage === 2) {
        depositAmount = 100;
        User1.balance.Checking = User1.balance.Checking + 100;
        newDepositCheckingBalance();
    } else if (stage === 3) {
        depositAmount = 100;
        User1.balance.Savings = User1.balance.Savings + 100;
        newDepositSavingBalance();
    }
};
function newDepositCheckingBalance() {
    optionHidden();
    choicesHidden();
    goOptions();
    prompt.innerHTML = '<h2>Checking Balance: ' + User1.balance.Checking + '</h2><br>' + '<h2>Deposited Amount: ' + depositAmount + '</h2>';
    choicesOver[2].innerText = 'Done';
    choicesOver[5].innerText = 'Continue';
};
function newDepositSavingBalance() {
    optionHidden();
    choicesHidden();
    goOptions();
    prompt.innerHTML = '<h2>Saving Balance: ' + User1.balance.Savings + '</h2><br>' + '<h2>Deposited Amount: ' + depositAmount + '</h2>';
    choicesOver[2].innerText = 'Done';
    choicesOver[5].innerText = 'Continue';
};

// Check Balance
function checkBalanceScreen() {
    optionHidden();
    choicesHidden();
    goOptions();
    prompt.innerHTML = '<h2>Account Balance</h2><br><p><strong>Checking: ' + User1.balance.Checking + '</p><p>Savings: ' + User1.balance.Savings + '</strong></p>';
    choicesOver[0].innerText = 'Done';
    choicesOver[3].innerText = 'Continue';
};

//Setting Attributes to a(n) onClick event, and Display/Display Hidden for Options/Choices
function dashboardOptions() {
    change[0].setAttribute('onClick', 'withdrawalScreen()');
    change[1].setAttribute('onClick', 'depositScreen()');
    change[3].setAttribute('onClick', 'checkBalanceScreen()');
    change[4].setAttribute('onClick', 'SignOut()');
};
function withdrawalScreenOptions() {
    change[0].setAttribute('onClick', 'withdrawalChecking()');
    change[3].setAttribute('onClick', 'withdrawalSaving()');
};
function withdrawalAmountOptions() {
    change[0].setAttribute('onClick', 'withdrawal20()');
    change[1].setAttribute('onClick', 'withdrawal40()');
    change[2].setAttribute('onClick', 'withdrawal60()');
    change[3].setAttribute('onClick', 'withdrawal80()');
    change[4].setAttribute('onClick', 'withdrawal100()');
};
function depositScreenOptions() {
    change[0].setAttribute('onClick', 'depositChecking()');
    change[3].setAttribute('onClick', 'depositSaving()');
};
function depositAmountOptions() {
    change[0].setAttribute('onClick', 'deposit20()');
    change[1].setAttribute('onClick', 'deposit40()');
    change[2].setAttribute('onClick', 'deposit60()');
    change[3].setAttribute('onClick', 'deposit80()');
    change[4].setAttribute('onClick', 'deposit100()');
};
function goOptions() {
    change[2].setAttribute('onClick', 'SignOut()');
    change[5].setAttribute('onClick', 'goBack()');
};
function optionHidden() {
    change[0].setAttribute('onClick', '');
    change[1].setAttribute('onClick', '');
    change[2].setAttribute('onClick', '');
    change[3].setAttribute('onClick', '');
    change[4].setAttribute('onClick', '');
    change[5].setAttribute('onClick', '');
};
function padShow() {
    change[7].setAttribute('onClick', 'keypad(this.value)');
    change[6].setAttribute('onClick', 'keypad(this.value)'); 
    change[8].setAttribute('onClick', 'keypad(this.value)');
    change[9].setAttribute('onClick', 'keypad(this.value)');
    change[10].setAttribute('onClick', 'keypad(this.value)');
    change[11].setAttribute('onClick', 'keypad(this.value)');
    change[12].setAttribute('onClick', 'keypad(this.value)');
    change[13].setAttribute('onClick', 'keypad(this.value)');
    change[14].setAttribute('onClick', 'keypad(this.value)');
    change[15].setAttribute('onClick', 'keypad("x")');
    change[16].setAttribute('onClick', 'keypad(this.value)');
    change[17].setAttribute('onClick', 'keypad("b")');
    change[18].setAttribute('onClick', 'keypad("e")');
};
function padHidden() {
    change[6].setAttribute('onClick', '');
    change[7].setAttribute('onClick', '');
    change[8].setAttribute('onClick', '');
    change[9].setAttribute('onClick', '');
    change[10].setAttribute('onClick', '');
    change[11].setAttribute('onClick', '');
    change[12].setAttribute('onClick', '');
    change[13].setAttribute('onClick', '');
    change[14].setAttribute('onClick', '');
    change[15].setAttribute('onClick', '');
    change[16].setAttribute('onClick', '');
    change[17].setAttribute('onClick', '');
    change[18].setAttribute('onClick', '');
};
function choicesHidden() {
    for (i in choicesOver) {
        choicesOver[i].innerText = '';
    }
};

//Go Back/Sign Out
function goBack() {
    optionHidden();
    choicesHidden();
    dashboard();
};
function SignOut() {
    window.location.href = 'atm.html';
};