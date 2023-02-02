// Example function call
cashRegister(19.5, 20, [
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

function cashRegister(cash, price, CID){
const change = cash - price
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
} else {

}


}



// Mustafa Pushed this ;)