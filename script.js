

function cashRegister(price, cash, CID){
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
  
  //for loop below calculates total cash in drawer and assigns it to totalCID
  
  let totalCID = 0
  for (let i = 0; i < CID.length; i++) {
    totalCID += (CID[i][1]) * 100
  }

  if (cash < price){
    return {status: "INCORRECT_PAYMENT", change: []}
  }else if(totalCID<changeDue){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }else if(totalCID === changeDue){
    return {status: "CLOSED", change: []} //make sure it return the change
  }else{
    result.status = 'OPEN'
    // Updates the result status to open
  }  

  //remove below

  // if (cash < price){
  //   return {status: "INCORRECT_PAYMENT", change: []}
  // } else if (cash === price) {
  //   result.status = "CLOSED"
  //   return result
  // } else if (changeDue === totalCID) {
  //   return {status: "CLOSED", change: CID}
  // } else if (changeDue > totalCID) {
  //   return {status: "INSUFFICIENT_FUNDS", change: []}
  // } else {
  //   result.status = "OPEN"
  // }
  
  //array below contains currency values multiplied by 100

  let moneyCompare = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]

  //for loop below increments through each 1D array in the 2D arrays (CID and the "change" property)
  //[1] selects the money in the 1D arrays
  
  for (let i = CID.length - 1; i >= 0; i--) {

    CID[i][1] = Math.round(CID[i][1] * 100);      //multiplies all values in drawer by 100 to avoid decimal place issues

    //while loop below repeatedly adds currency values to 

    while (CID[i][1] >= moneyCompare[i] && changeDue >= moneyCompare[i]) {
      result.change[i][1] += (moneyCompare[i] / 100);
      changeDue -= moneyCompare[i];
      changeGiven += moneyCompare[i]
      CID[i][1] -= moneyCompare[i];
    }
  }

  

  if(changeDue>changeGiven){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  
  //for loop below removes empty change values

  for (let i = result.change.length - 1; i >= 0; i--) {
    if (result.change[i][1] === 0) {result.change.splice(i, 1)}
  }
  
  //remove below

  // for (let i = 0; i < result.change.length - 1; i++) {
  //     if (result.change[i][1] === 0) {result.change.splice(i, 1)}
  //   }

  return result
  }

  



  
  
  // we are trying update the CID depending on the change due 
  
  // Example function call
  console.log(cashRegister(10, 15.1, [
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

//test