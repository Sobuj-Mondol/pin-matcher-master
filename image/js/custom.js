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

document.getElementById('key-pad').addEventListener('click',function(event){
    let number = event.target.innerText;
    let calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'c'){
            calcInput.value = '';
        }
    }
    else{
        let previousNumber = calcInput.value;
        let newNumber = previousNumber + number;
        calcInput.value = newNumber;
        console.log(number);
    }
});