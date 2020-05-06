function subtract() {

    let firstInputField = document.getElementById('firstNumber');

    let secondInputNumber = document.getElementById('secondNumber');

    let resultDiv = document.getElementById('result');
    let firstNum = Number(firstInputField.value);
    let secondNum = Number(secondInputNumber.value);
    resultDiv.textContent = firstNum - secondNum;

}