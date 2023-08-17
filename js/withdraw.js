document
  .getElementById("button-withdraw")
  .addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawFieldStaring = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldStaring);

    const withdrawTotalElement = document.getElementById("withdraw-total");

    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const ballanceTotalElement = document.getElementById("ballance-total");
    const previousBallanceString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceString);
    if (newWithdrawAmount > previousBallanceTotal) {
      alert("not enough money");
    }

    const newBallanceTotal = previousBallanceTotal - newWithdrawAmount;
    ballanceTotalElement.innerText = newBallanceTotal;

    withdrawField.value = "";
  });
