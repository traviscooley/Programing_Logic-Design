function calculateNetPay(){
    var output = document.getElementById('output');
    var grossPay = parseInt(document.getElementById('grossPay').value);
    var additionalDeduction = parseInt(document.getElementById('additionalDeduction').value)
    var FED = grossPay * .15;
    var STATE = grossPay * .05;
    var FICA = grossPay * .0762;
    var netPay = grossPay - (FED + STATE + FICA + additionalDeduction);
    output.innerHTML = "$" + netPay;
}