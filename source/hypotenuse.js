var firstside = document.querySelector(".Firstside");
var secondside = document.querySelector(".Secondside");

var submit = document.querySelector(".submit");

var output = document.querySelector(".outputDiv");


submit.addEventListener('click', () => {

    let inputOne = firstside.value;
    let inputTWo = secondside.value;
    if (firstside.value == "" || secondside.value == "") {
        output.innerHTML = "please enter a valid Number";
        return;
    } else if (firstside.value == 0 || secondside.value == 0) {
        output.innerHTML = "please enter a valid Number";
        return;
    } else if (Math.sign(firstside.value == -1) || Math.sign(secondside.value == -1)) {
        output.innerHTML = "please Don't enter Negative sign as input";

    }
    area(inputOne, inputTWo)


})

function area(firstInput, secondInput) {
    let result = Math.sqrt((firstInput * firstInput) + (secondInput * secondInput))
    output.innerHTML = `c= ${result.toFixed(2)}`
}