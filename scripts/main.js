// JavaScript Exercises

function printNumbers (startNum, endNum) {
    // for 
}

function favSubject(myName, favSubj) {
    console.log(myName+ '\'s' + ' favorite subject is ' + favSubj)
}


function tipAmount(billAmount, service) {
if (service == 'good') {
    var yourTip = .2 * billAmount;
}

else if (service == 'fair') {
    var yourTip = .15 * billAmount;
}

else if (service == 'poor') {
    var yourTip = .1 * billAmount;
}

var totalBill = yourTip + billAmount
console.log("Tip amount: " + yourTip + " Total bill: " + totalBill)
return yourTip, totalBill;
}

favSubject('Dan', 'math')
tipAmount(100, 'fair');