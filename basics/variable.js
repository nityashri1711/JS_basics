const accountId= 11
let accName= "Nitya";
var accMoney= 6000;

console.log(accountId)
//accountId= 21 Cant assign to const
//console.log(accountId)

console.table([accountId, accName, accMoney])

console.table({
    AccountID: accountId,
    AccountName: accName,
    MoneyPresent: accMoney
})

//Why let was invented
{
    let accName= "Nityashri";
    var accMoney= 3000;
    console.log(accName);
    console.log(accMoney);
}

console.log(accName)
console.log(accMoney);

console.log(typeof(accName));
console.log(typeof accMoney);

let valueInNumber= Number(accName);
let valueInString= String(accountId);
console.log(valueInNumber);
console.log(valueInString);
console.log(typeof(valueInString))

//function to represent or print the table
const  printFunc = function() {
    console.table ({
        AccountID: accountId,
        AccountName: accName,
        MoneyPresent: accMoney
    })
}
printFunc();
console.log(typeof(printFunc))