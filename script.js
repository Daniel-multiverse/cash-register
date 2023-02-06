

function cashRegister(cash, price, CID){
  let changeDue = cash - price
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

  if (cash < price){
    result.status = "INCORRECT_PAYMENT"
    return result
  } else if (cash === price) {
    result.status = "CLOSED"
    return result
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



  console.log(result,CID)

  }
  
  // we are trying update the CID depending on the change due 
  
  
  // Example function call
  cashRegister(120, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ]);
  
  // Mustafa Pushed this ;)

