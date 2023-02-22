// logIn Button Event Handler
const logInBtn = document.getElementById("log-in").addEventListener("click", function () {
    const LogInArea = document.getElementById("log-in-area");
    LogInArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit Button Event Handler
const DepositBtn = document.getElementById("add-deposit").addEventListener("click", function () {
    // use function
    
    const depositNumber = getInputNumber("deposit-amount");
    // //input use function or below
    // const depositAmount = document.getElementById("deposit-amount").value;
    // const depositNumber = parseFloat(depositAmount);

    //use function or below #deposit
    // const currentDeposit = document.getElementById("current-deposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("current-deposit").innerText = totalDeposit;

    //use function or below #Balance
    // const currentBalance = document.getElementById("current-balance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("current-balance").innerText = totalBalance;

    // #deposit use updateSpanText Function
    updateSpanText("current-deposit", depositNumber);

    // #Balance use updateSpanText function
    updateSpanText("current-balance", depositNumber);

    document.getElementById("deposit-amount").value = "";
})

//updateSpanText Function
function updateSpanText(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

//getInputNumber Function
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById("add-withdraw").addEventListener("click", function(){
    //use getInputNumber function
    const withdrawNumber = getInputNumber("withdraw-amount");

    document.getElementById("withdraw-amount").value = "";
});

// // Withdraw Button Event Handler or use up code
// const withdrawBtn = document.getElementById("add-withdraw").addEventListener("click", function(){
//     //input
//     const withdrawAmount = document.getElementById("withdraw-amount").value;
//     const withdrawNumber = parseFloat(withdrawAmount);

//     // #Withdraw
//     const currentWithdraw = document.getElementById("current-withdraw").innerText;
//     const currentWithdrawNumber = parseFloat(currentWithdraw);
//     const totalWithdraw = withdrawNumber + currentWithdrawNumber;
//     document.getElementById("current-withdraw").innerText = totalWithdraw;

//     // #Total Balance
//     const currentBalance = document.getElementById("current-balance").innerText;
//         const currentBalanceNumber = parseFloat(currentBalance);
//         const totalBalance = currentBalanceNumber - withdrawNumber;
//         document.getElementById("current-balance").innerText = totalBalance;

//     document.getElementById("withdraw-amount").value = "";
// })