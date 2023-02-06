function cashRegister(price, cash, CID){

  //initial variables declared below

  let changeDue = Math.round((cash - price) * 100)    // changeDue multiplied by 100 to avoid decimal issues
  const totalChangeDue = changeDue    //reference value for the total change due
  let changeGiven = 0   //tracks sum of change due to be given

  //object below in desired format containing values to be updated further down the code

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
  
  //for loop below calculates total cash in drawer and assigns it to totalCID (total cash in drawer)

  let totalCID = 0
  for (let i = 0; i < CID.length; i++) {
    totalCID += Math.round((CID[i][1]) * 100)   //values scaled by 100 to avoid decimal issues
  }

 
  if (cash < price){
    return {status: "INCORRECT_PAYMENT", change: []}
  }
    //if cash is equal to price, the result status is changed to CLOSED and the CID is returned 
   else if (cash === price) {
    result.status = "CLOSED"
    return result

    /* if the total amount of money in drawer(CID) is less than the changed due then the result status is 
    INSUFFICIENT_FUNDS and change is returned
    */
  }else if(totalCID<changeDue){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }else if(totalCID === changeDue){
    return {status: "CLOSED", change: CID} 
  }else{
    result.status = 'OPEN'    // Updates the result status to open
  }  

  let moneyCompare = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]    //array contains currency values multiplied by 100

  //for loop below increments through each 1D array in the 2D arrays (CID and the "change" property)
  //[1] selects the money in the 1D arrays
  
  for (let i = CID.length - 1; i >= 0; i--) {

    CID[i][1] = Math.round(CID[i][1] * 100);      //multiplies all values in drawer by 100 to avoid decimal place issues

    //While loop below adds currency values to it's corresponding change per cycle
    //Increases variable "changeGiven" and decreases variable "changeDue" by currency amount per cycle 
    //Loop breaks when the selected currency value in the drawer is empty or no more of it is needed to add to change

    while (CID[i][1] >= moneyCompare[i] && changeDue >= moneyCompare[i]) {
      result.change[i][1] += (moneyCompare[i] / 100);   //  adds currency value to it's corresponding currency in the array in the "change" property of the result object
      changeDue -= moneyCompare[i];   //  adds currency value to "changeDue" every cycle
      changeGiven += moneyCompare[i]  //  adds currency value to "changeGiven" every cycle
      CID[i][1] -= moneyCompare[i];   //  removes currency value from the CID every cycle
    }
  }

  //conditional statement below checks if the totalChange has been collected

  if(totalChangeDue>changeGiven){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  
  //for loop below removes empty change values

  for (let i = result.change.length - 1; i >= 0; i--) {
    if (result.change[i][1] === 0) {result.change.splice(i, 1)}
  }

  return result
}
  

  // Example function call
  cashRegister(10, 15.1, [
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