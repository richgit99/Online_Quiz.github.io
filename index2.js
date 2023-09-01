let points = 0;

let correct_answers = 0;
let in_correct_answers = 0;

const c_ans = document.getElementById("c_ans");
const ic_ans = document.getElementById("ic_ans");
const ua_ans = document.getElementById("ua_ans");

const first_question_container = document.getElementById("first_question_container");
const second_question_container = document.getElementById("second_question_container");
const third_question_container = document.getElementById("third_question_container");
const fourth_question_container = document.getElementById("fourth_question_container");
const fifth_question_container = document.getElementById("fifth_question_container");
const sixth_question_container = document.getElementById("sixth_question_container");
const seventh_question_container = document.getElementById("seventh_question_container");
const eight_question_container = document.getElementById("eight_question_container");

const result = document.getElementById("result");

const submit_button = document.getElementById("submit_button");

function action() {

    setTimeout(() => {
        submit_button.remove();
    }, 1000);

    window.scrollTo({
        top: 0, behavior: 'smooth'
    });


    result.style.display = 'block';

    const action_button = document.getElementById('submit_button')
    // action_button.remove()

    const real_ans = document.getElementsByClassName("real_ans");

    [...real_ans].forEach((e) => {
        e.style.backgroundColor = 'rgb(82, 237, 82)';
    });


    var radios = document.getElementsByName('q1_p');

    for (var radio of radios) {
        if (radio.checked) {

            if (radio.value == '1/x') {
                points += 10;
                correct_answers++;
            }
            else {
                in_correct_answers++;
            }
        }

    }


    var radios1 = document.getElementsByName('q2_p');

    for (var radio1 of radios1) {

        if (radio1.checked) {
            if (radio1.value == 'line') {
                points += 10;
                correct_answers++;

            }
            else {
                in_correct_answers++;
            }
        }


    }

    var radios2 = document.getElementsByName('q3_p');

    for (var radio2 of radios2) {

        if (radio2.checked) {
            if (radio2.value == ' the slope of the tangent ') {
                points += 10
                correct_answers++;

            }
            else {
                in_correct_answers++;
            }
        }
   
    }

    var radios3 = document.getElementsByName('q4_p');

    for (var radio3 of radios3) {

        if (radio3.checked) {
            if (radio3.value == 'Aryabhatta') {
                points += 10
                correct_answers++;

            }
            else {
                in_correct_answers++;
            }
        }
  
    }

    var radios4 = document.getElementsByName('q5_p');

    for (var radio4 of radios4) {

        if (radio4.checked) {
            if (radio4.value == 'open') {
                points += 10

                correct_answers++;
            }
            else {
                in_correct_answers++;
            }
        }
   
    }

    var radios5 = document.getElementsByName('q6_p');

    for (var radio5 of radios5) {

        if (radio5.checked) {
            if (radio5.value == 'differentiable') {
                points += 10

                correct_answers++;
            }
            else {
                in_correct_answers++;
            }
        }

    }

    var radios6 = document.getElementsByName('q7_p');

    for (var radio6 of radios6) {

        if (radio6.checked) {
            if (radio6.value == 'discrerte') {
                points += 10;
                correct_answers++;
            }
            else {
                in_correct_answers++;
            }
        }
  
    }

    var radios7 = document.getElementsByName('q8_p');

    for (var radio7 of radios7) {

        if (radio7.checked) {
            if (radio7.value == 'a = 90') {
                points += 10;
                correct_answers++;
            }
            else {
                in_correct_answers++;
            }
        }

    }

    let un_attempted_questions = 8 - (correct_answers + in_correct_answers);
    c_ans.innerText = `Correctly Answered : ${correct_answers}`;
    ic_ans.innerText = `In-Correctly Answered : ${in_correct_answers}`;
    ua_ans.innerText = `Un-Attempted Questions : ${un_attempted_questions}`;

}
