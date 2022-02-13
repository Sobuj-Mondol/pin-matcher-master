function getPin(){
    let pin = Math.round(Math.random()*10000);
    console.log(pin);
    let pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        console.log('recheck',pin);
        return getPin();
    }
}
// function call kora hoice
function generatePin(){
    let pin = getPin();
    document.getElementById('Display-pin').value = pin;
}