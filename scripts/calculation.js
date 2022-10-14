
function calculateSip(){
    var amount = document.getElementById('input-amt').value;
    var annualIntrest = document.getElementById('input-int').value;
    var years = document.getElementById('input-time').value;

    var monthlyIntrest = annualIntrest / 12 / 100;
    var months = years * 12;
    
    var total =  Math.round(amount *(1 + monthlyIntrest) * (Math.pow(1 + monthlyIntrest, months) - 1) / monthlyIntrest);
    var invested = amount * months;
    var intGained = total - invested;

    document.getElementById('invested-val').innerHTML = invested;
    document.getElementById('returns-val').innerHTML = intGained;
    document.getElementById('total-val').innerHTML = total;
}


