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
let result = {status: "",
              change: []}

if (cash < price){
result.status = "Incorrect payment"
return result
}




}



// Mustafa Pushed this ;)