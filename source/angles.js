var inputone = document.querySelector(".inputone");
var inputTwo = document.querySelector(".inputTwo");
var inputThree = document.querySelector(".inputThree");
var submitBtn = document.querySelector(".submit");
var outputDiv = document.querySelector(".output");




function outputcases(One, Two, Three) {


    if (inputone.value == "" || inputTwo.value == 0 || inputThree.value == "") {
        outputDiv.innerText = "please enter valid  input"
        return
    } else if (inputone.value == 0 || inputTwo.value == 0 || inputThree.value == 0) {
        outputDiv.innerText = "please enter valid input"
        return
    } else if (Math.sign(inputone.value) == -1 || Math.sign(inputTwo.value) == -1 || Math.sign(inputThree.value) == -1) {
        outputDiv.innerText = "please don't enter negative values for angles"
        return
    }



    if (One + Two + Three == 180) {
        outputDiv.innerText = "yes! These Angles Make a Triangle"
    } else {
        outputDiv.innerText = "No! These Angles does not make a Triangle"
    }




}
submitBtn.addEventListener('click', () => outputcases(Number(inputone.value), Number(inputTwo.value), Number(inputThree.value)))