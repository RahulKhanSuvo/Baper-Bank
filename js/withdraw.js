document
  .getElementById("button-withdraw")
  .addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawFieldStaring = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldStaring);

    withdrawField.value = "";

    if (isNaN(newWithdrawAmount)) {
      alert("please provide number");
      return;
    }

    const withdrawTotalElement = document.getElementById("withdraw-total");

    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const ballanceTotalElement = document.getElementById("ballance-total");
    const previousBallanceString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceString);

    if (newWithdrawAmount > previousBallanceTotal) {
      alert("not enough money");
      return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    const newBallanceTotal = previousBallanceTotal - newWithdrawAmount;
    ballanceTotalElement.innerText = newBallanceTotal;
  });
