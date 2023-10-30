const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const result = document.getElementById('result');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
 
add.addEventListener('click', () =>{
    result.value = Number(firstNumber.value) + Number(secondNumber.value);
    zeros();
})
subtract.addEventListener('click', ()=>{
    result.value = Number(firstNumber.value) - Number(secondNumber.value);
    zeros();
})
multiply.addEventListener('click', ()=>{
    result.value = Number(firstNumber.value) * Number(secondNumber.value);
    zeros();
})
divide.addEventListener('click', ()=>{
    result.value = Number(firstNumber.value) / Number(secondNumber.value);
    zeros();
})
function zeros() {
    if (firstNumber.value == '' && secondNumber.value == ''){
    result.value = "Error";
    result.style.color = "red";
}
}

    
