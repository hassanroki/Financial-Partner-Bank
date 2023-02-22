// logIn Button Event Handler
const logInBtn = document.getElementById("log-in").addEventListener("click", function () {
    const LogInArea = document.getElementById("log-in-area");
    LogInArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit Button Event Handler use function
const DepositBtn = document.getElementById("add-deposit").addEventListener("click", function () {
    // use getInputNumber function
    const depositNumber = getInputNumber("deposit-amount");

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

// Withdraw Button Event Handler use Function
const withdrawBtn = document.getElementById("add-withdraw").addEventListener("click", function(){
    //use getInputNumber function
    const withdrawNumber = getInputNumber("withdraw-amount");

    // #Withdraw use updateSpanText Function
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber)

    document.getElementById("withdraw-amount").value = "";
});


// // Alternate Way Deposit and Withdraw Button Event Handler can not use function
// // Deposit Button Event Handler
// const addDeposit = document.getElementById("add-deposit").addEventListener("click", function(){
//     //input Deposit Amount
//     const depositAmount = document.getElementById("deposit-amount").value;
//     //Converted Float Number
//     const depositNumber = parseFloat(depositAmount);
//     //Store Deposit Amount 
//     const currentDeposit = document.getElementById("current-deposit").innerText;
//     const currentDepositNumber = parseFloat(currentDeposit);
//     const totalDeposit = depositNumber + currentDepositNumber;
//     document.getElementById("current-deposit").innerText = totalDeposit;

//     //Get Current Balance
//     const currentBalance = document.getElementById("current-balance").innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     const totalCurrentBalance = depositNumber + currentBalanceNumber;
//     document.getElementById("current-balance").innerText = totalCurrentBalance;


//     //Donn't Repeat Deposit Amount
//     document.getElementById("deposit-amount").value = "";
// })

// // Withdraw Button Event Handler
// const addWithdraw = document.getElementById("add-withdraw").addEventListener("click", function(){
//     //Input Withdraw Amount
//     const withdrawAmount = document.getElementById("withdraw-amount").value;
//     const withdrawNumber = parseFloat(withdrawAmount);
//     //Store Withdraw Amount
//     const currentWithdraw = document.getElementById("current-withdraw").innerText;
//     const currentWithdrawNumber = parseFloat(currentWithdraw);
//     const totalWithdraw = withdrawNumber + currentWithdrawNumber;
//     document.getElementById("current-withdraw").innerText = totalWithdraw;

//     document.getElementById("withdraw-amount").value = "";

//     //Accurate Balance Deposit And Withdraw After
//     const currentBalance = document.getElementById("current-balance").innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     const totalBalance = currentBalanceNumber - withdrawNumber;
//     document.getElementById("current-balance").innerText = totalBalance;
// })
