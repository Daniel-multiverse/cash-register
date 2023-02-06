

function cashRegister(cash, price, CID){
  let changeDue = (cash - price) * 100
  let changeGiven = 0
  let result = {status: "",
                change: [["PENNY", 0],
                ["NICKEL", 0],
                ["DIME", 0],
                ["QUARTER", 0],
                ["ONE", 0],
                ["FIVE", 0],
                ["TEN", 0],
                ["TWENTY", 0],
                ["ONE HUNDRED", 0]]
              }
  

  
  let totalCID = 0
  for (let i = 0; i < CID.length - 1; i++) {
    totalCID += (CID[i][1]) * 100
  }

  if (cash < price){
    return {status: "INCORRECT_PAYMENT", change: []}
  } else if (cash === price) {
    result.status = "CLOSED"
    return result
  } else if (changeDue > totalCID) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  let moneyCompare = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]

  for (let i = CID.length - 1; i >= 0; i--) {
    CID[i][1] = Math.floor(CID[i][1] * 100);
    while (CID[i][1] >= moneyCompare[i] && changeDue >= moneyCompare[i]) {
      result.change[i][1] += moneyCompare[i] / 100;
      changeDue -= moneyCompare[i];
      changeGiven += moneyCompare[i];
      CID[i][1] -= moneyCompare[i];
    }
  }

  result.status = "OPEN"
  return result

  }

  
  
  // we are trying update the CID depending on the change due 
  
  // Example function call
  console.log(cashRegister(100, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ]));
  
  // Mustafa Pushed this ;)

