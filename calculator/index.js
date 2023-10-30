const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const result = document.getElementById('result');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const clear = document.getElementById('clear');
 
add.addEventListener('click', () =>{
    result.value = Number(firstNumber.value) + Number(secondNumber.value);
    zeros();
    redColorDelete()
})
subtract.addEventListener('click', ()=>{
    result.value = Number(firstNumber.value) - Number(secondNumber.value);
    zeros();
    redColorDelete()
})
multiply.addEventListener('click', ()=>{
    result.value = Number(firstNumber.value) * Number(secondNumber.value);
    zeros();
    redColorDelete()
})
divide.addEventListener('click', ()=>{
    result.value = Number(firstNumber.value) / Number(secondNumber.value);
    zeros();
    redColorDelete()
})
clear.addEventListener('click', () =>{
    result.value = "";
    firstNumber.value = "";
    secondNumber.value = "";
    redColorDelete()
});
function zeros() {
    if (firstNumber.value == '' && secondNumber.value == ''){
    result.value = "Error";
    result.style.color = "red";
}
}
function redColorDelete(){
    if(result.value == "Error"){
        result.style.color = "red";
    }else{
        result.style.color = "black";
    }
}

    
