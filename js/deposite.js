document
  .getElementById("button-deposit")
  .addEventListener("click", function () {
    const newDeposit = document.getElementById("deposit-field");
    const newDepositAmountString = newDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    const previousDeposit = document.getElementById("deposit-total");
    const previousDepositTotalString = previousDeposit.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDeposit = previousDepositTotal + newDepositAmount;
    previousDeposit.innerText = currentDeposit;
    const ballanceTotalElement = document.getElementById("ballance-total");
    const previousBallanceTotalString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString);
    const currentBallance = previousBallanceTotal + newDepositAmount;
    ballanceTotalElement.innerText = currentBallance;

    newDeposit.value = "";
  });
