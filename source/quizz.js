let quizQuestions = document.forms[0]
const submitBtn = document.querySelector(".submit");
var container = document.querySelectorAll(".question");
const output = document.querySelector(".outputDiv");


let score = 0
let correctAnswer = ["answer-2", "answer-1", "answer-1", "answer-2", "answer-2", "answer-4", "answer-3", "answer-3", "answer-2", "answer-4"]


quizQuestions.addEventListener('submit', (e) => {

    e.preventDefault();

    const questions = new FormData(quizQuestions);
    let i = 0;

    questions.forEach(item => {

        if (item == correctAnswer[i]) {

            container[i].style.backgroundColor = "lightgreen";
            score++;


        } else {
            container[i].style.backgroundColor = "red";
        }
        i++;

    })
    output.innerHTML = `your score is ${score}`
    submitBtn.style.display = "none";

})