//**this is for which option the user is choosing */
const optionOne = document.querySelector(".optionOneOne");
const optionTwo = document.querySelector(".optionOneTwo");
const optionThree = document.querySelector(".optionOneThree");

//**this is for  the three section we divided based upon the option  */
var firstSection = document.querySelector(".Firstsection");
var secondSection = document.querySelector(".Secondsection");
var Thirdsection = document.querySelector(".Thirdsection");

//**first section input*/
var baseInputOne = document.querySelector(".baseInputOne");
var heightInputOne = document.querySelector(".heightInputOne");
var calculateOne = document.querySelector(".calculateOne");
var outputOne = document.querySelector(".outputOne");
//**second section inputs */
var firstsideinput2 = document.querySelector(".firstsideInput2");
var secondsideinput2 = document.querySelector(".secondsideInput2");
var thirdsideinput2 = document.querySelector(".thirdsideInput2");
var calculateTwo = document.querySelector(".calculateTwo");
var outputTwo = document.querySelector(".outputTwo");
//**third section inputs */
var firstinput3 = document.querySelector(".firstInput3");
var secondinput3 = document.querySelector(".secondInput3");
var thirdinput3 = document.querySelector(".thirdInput3");
var calculateThree = document.querySelector(".calculateThree");
var outputThree = document.querySelector(".outputThree");







const arr = [optionOne, optionTwo, optionThree];

arr.forEach(options);

function options(item) {
    item.addEventListener('click', () => {
        if (item.innerText == "If You Have Base And Height Length") {
            firstSection.style.display = "block";
            secondSection.style.display = "none";
            Thirdsection.style.display = "none";
        } else if (item.innerText == "If You Have Length Of 3 sides") {
            firstSection.style.display = "none";
            secondSection.style.display = "block";
            Thirdsection.style.display = "none";
        } else if (item.innerText == "If You Have Length of 2Sides And Included Angle") {
            firstSection.style.display = "none";
            secondSection.style.display = "none";
            Thirdsection.style.display = "block";
        }


    })
}


//**First section *


calculateOne.addEventListener('click', () => {

    var base = parseInt(baseInputOne.value);
    var height = parseInt(heightInputOne.value);
    if (baseInputOne.value == "" || heightInputOne.value == "") {
        outputOne.innerHTML = "please enter a valid input ";

    } else if (baseInputOne.value == 0 || heightInputOne.value == 0) {
        outputOne.innerHTML = "please don't enter zero as input ";
    } else if (Math.sign(baseInputOne.value == -1) || Math.sign(heightInputOne.value == -1)) {
        optionOne.innerHTML = "please don't enter Negative Sign as input"
    } else {

        area(base, height)
    }


})

function area(baseone, heightone) {

    let result = 1 / 2 * baseone * heightone;
    outputOne.innerHTML = `area=${result.toFixed(2)}`
}


//**section2 */

calculateTwo.addEventListener('click', () => {
    var firstside = parseInt(firstsideinput2.value);
    var secondside = parseInt(secondsideinput2.value);
    var thirdside = parseInt(thirdsideinput2.value);


    if (firstsideinput2.value == "" || secondsideinput2.value == "" || thirdsideinput2.value == "") {
        outputTwo.innerHTML = "please enter a valid input ";
        return;
    } else if (firstsideinput2.value == 0 || secondsideinput2.value == 0 || thirdsideinput2.value == 0) {
        outputTwo.innerHTML = "please don't enter zero as input ";
        return;

    } else if (Math.sign(firstsideinput2.value == -1) || Math.sign(secondsideinput2.value == -1) || Math.sign(thirdsideinput2 == -1)) {
        outputTwo.innerHTML = "please don't enter Negative Sign as input";
        return;
    } else {
        areaTwo(firstside, secondside, thirdside)
        return
    }





});

function areaTwo(sideone, sidetwo, sidethree) {

    var s = parseInt(sideone + sidetwo + sidethree) / 2;

    if (s < sideone || s < sidetwo || s < sidethree) {
        outputTwo.innerHTML = "Enter Valid Side Length Such That Each side Length"
    } else {

        let resultTwo = Math.sqrt(s * (s - sideone) * (s - sidetwo) * (s - sidethree));


        outputTwo.innerHTML = `area=${resultTwo.toFixed(2)}`
    }
}

//**section3*/

calculateThree.addEventListener('click', () => {
    var sideoneInput3 = parseInt(firstinput3.value);
    var sidetwoInput3 = parseInt(secondinput3.value);
    var oneAngle = thirdinput3.value;


    if (firstinput3.value == "" || secondinput3.value == 0 || thirdinput3.value == "") {
        outputThree.innerHTML = "please enter a valid input ";
        return
    } else if (firstinput3.value == 0 || secondinput3.value == 0 || thirdinput3.value == 0) {
        outputThree.innerHTML = "please don't enter zero as input ";
        return
    } else if (Math.sign(firstinput3.value == -1) || Math.sign(secondinput3.value == -1) || Math.sign(thirdinput3 == -1)) {
        outputThree.innerHTML = "please don't enter Negative Sign as input";
        return;
    } else {
        areathree(sideoneInput3, sidetwoInput3, oneAngle)

    }

})

function areathree(inputone, inputtwo, inputthree) {
    let angleside = Math.sin(inputthree);

    let resultthree = (1 / 2 * inputone * inputtwo * angleside)

    outputThree.innerHTML = `Area = ${resultthree.toFixed(2)}`

}