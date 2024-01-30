

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromDollarToYen(dollar){
    let euro = dollar / oneEuroIs.USD;  
    let yen = euro * oneEuroIs.JPY
    return yen; 
}

function fromYenToPound(yen){
    let euro = yen / oneEuroIs.JPY; 
    let pound = euro * oneEuroIs.GBP
    return pound; 
}


function fromEuroToDollar(euro){
    let Dollar = euro * oneEuroIs.USD; 
    return Dollar; 
}
 
module.exports = { fromEuroToDollar,fromYenToPound,fromDollarToYen }
