
function action() {

    const button = document.getElementById("submit_data")
    button.remove()

// First MSQ Question

    var radios = document.getElementsByName('q1_p1');
    var radios1 = document.getElementsByName('q1_p2');
    var radios2 = document.getElementsByName('q1_p3');
    var radios3 = document.getElementsByName('q1_p4');

    first_question = 0
    points = 0

    for (var radio of radios) {

        if (radio.checked) {
            if (radio.value == 'a = 30') {
                first_question += 1}}}

        

    for (var radio1 of radios1) {

        if (radio1.checked) {
            if (radio1.value == 'a = 45') {
                first_question += 1

            }}}

    for (var radio2 of radios2) {

        if (radio2.checked) {
            if (radio2.value == 'a = 60') {
                first_question += 1

            }}}

    for (var radio3 of radios3) {

        if (radio3.checked) {
            if (radio3.value == 'a = 90') {
                first_question -= 1

            }}}

if (first_question == 3) {
points += 10



}

//  Second MSQ Question

var sadios = document.getElementsByName('q1_p12');
var sadios1 = document.getElementsByName('q1_p22');
var sadios2 = document.getElementsByName('q1_p32');
var sadios3 = document.getElementsByName('q1_p42');

 second_question = 0

for (var sadio of sadios) {

    if (sadio.checked) {
        if (sadio.value == '1') {
            second_question += 1}}}

    

for (var sadio1 of sadios1) {

    if (sadio1.checked) {
        if (sadio1.value == '2') {
            second_question += 1

        }}}

for (var sadio2 of sadios2) {

    if (sadio2.checked) {
        if (sadio2.value == '3') {
            second_question -= 1

        }}}

for (var sadio3 of sadios3) {

    if (sadio3.checked) {
        if (sadio3.value == '4') {
            second_question += 1

        }}}

if (second_question == 3) {
points += 10


}

//  Third MSQ Question

var padios = document.getElementsByName('q1_p13');
var padios1 = document.getElementsByName('q1_p23');
var padios2 = document.getElementsByName('q1_p33');
var padios3 = document.getElementsByName('q1_p43');

 third_question = 0

for (var padio of padios) {

    if (padio.checked) {
        if (padio.value == '1') {
            third_question += 1}}}

    

for (var padio1 of padios1) {

    if (padio1.checked) {
        if (padio1.value == '2') {
            third_question += 1

        }}}

for (var padio2 of padios2) {

    if (padio2.checked) {
        if (padio2.value == '3') {
            third_question -= 1

        }}}

for (var padio3 of padios3) {

    if (padio3.checked) {
        if (padio3.value == '4') {
            third_question -= 1

        }}}

if (third_question == 2) {
points += 10



}

// Fourth MSQ Question

var tadios = document.getElementsByName('q1_p14');
var tadios1 = document.getElementsByName('q1_p24');
var tadios2 = document.getElementsByName('q1_p34');
var tadios3 = document.getElementsByName('q1_p44');

 fourth_question = 0

for (var tadio of tadios) {

    if (tadio.checked) {
        if (tadio.value == '1') {
            fourth_question -= 1}}}

    

for (var tadio1 of tadios1) {

    if (tadio1.checked) {
        if (tadio1.value == '2') {
            fourth_question += 1

        }}}

for (var tadio2 of tadios2) {

    if (tadio2.checked) {
        if (tadio2.value == '3') {
            fourth_question -= 1

        }}}

for (var tadio3 of tadios3) {

    if (tadio3.checked) {
        if (tadio3.value == '4') {
            fourth_question += 1

        }}}

if (fourth_question == 2) {
points += 10



}

// Fifth MSQ Question

var zadios = document.getElementsByName('q1_p15');
var zadios1 = document.getElementsByName('q1_p25');
var zadios2 = document.getElementsByName('q1_p35');
var zadios3 = document.getElementsByName('q1_p45');

 fifth_question = 0

for (var zadio of zadios) {

    if (zadio.checked) {
        if (zadio.value == '1') {
            fifth_question -= 1}}}

    

for (var zadio1 of zadios1) {

    if (zadio1.checked) {
        if (zadio1.value == '2') {
            fifth_question -= 1

        }}}

for (var zadio2 of zadios2) {

    if (zadio2.checked) {
        if (zadio2.value == '3') {
            fifth_question += 1

        }}}

for (var zadio3 of zadios3) {

    if (zadio3.checked) {
        if (zadio3.value == '4') {
            fifth_question += 1

        }}}

if (fifth_question == 2) {
points += 10



}

// Sixth MSQ Question

var badios = document.getElementsByName('q1_p16');
var badios1 = document.getElementsByName('q1_p26');
var badios2 = document.getElementsByName('q1_p36');
var badios3 = document.getElementsByName('q1_p46');

 sixth_question = 0

for (var badio of badios) {

    if (badio.checked) {
        if (badio.value == '1') {
            sixth_question -= 1}}}

    

for (var badio1 of badios1) {

    if (badio1.checked) {
        if (badio1.value == '2') {
            sixth_question += 1

        }}}

for (var badio2 of badios2) {

    if (badio2.checked) {
        if (badio2.value == '3') {
            sixth_question += 1

        }}}

for (var badio3 of badios3) {

    if (badio3.checked) {
        if (badio3.value == '4') {
            sixth_question += 1

        }}}

if (sixth_question == 3) {
points += 10



}

// Seventh MSQ question

var cadios = document.getElementsByName('q1_p17');
var cadios1 = document.getElementsByName('q1_p27');
var cadios2 = document.getElementsByName('q1_p37');
var cadios3 = document.getElementsByName('q1_p47');

 seventh_question = 0

for (var cadio of cadios) {

    if (cadio.checked) {
        if (cadio.value == '1') {
            seventh_question -= 1}}}

    

for (var cadio1 of cadios1) {

    if (cadio1.checked) {
        if (cadio1.value == '2') {
            seventh_question += 1

        }}}

for (var cadio2 of cadios2) {

    if (cadio2.checked) {
        if (cadio2.value == '3') {
            seventh_question -= 1

        }}}

for (var cadio3 of cadios3) {

    if (cadio3.checked) {
        if (cadio3.value == '4') {
            seventh_question += 1

        }}}

if (seventh_question == 2) {
points += 10



}

// Eight MSQ question

var fadios = document.getElementsByName('q1_p18');
var fadios1 = document.getElementsByName('q1_p28');
var fadios2 = document.getElementsByName('q1_p38');
var fadios3 = document.getElementsByName('q1_p48');

 eigth_question = 0

for (var fadio of fadios) {

    if (fadio.checked) {
        if (fadio.value == '1') {
            eigth_question += 1}}}

    

for (var fadio1 of fadios1) {

    if (fadio1.checked) {
        if (fadio1.value == '2') {
            eigth_question -= 1

        }}}

for (var fadio2 of fadios2) {

    if (fadio2.checked) {
        if (fadio2.value == '3') {
            eigth_question += 1

        }}}

for (var fadio3 of fadios3) {

    if (fadio3.checked) {
        if (fadio3.value == '4') {
            eigth_question += 1

        }}}

if (eigth_question == 3) {
points += 10



}


const result_marks = document.getElementById('result_marks')
result_marks.innerHTML = 'Result Marks: ' +points+' / 80'




if (points >= 40){
    const status = document.getElementById('status')
    status.innerHTML = "Passed"  
}
else
{const status = document.getElementById('status')
status.innerHTML = "Status: Failed"  }































































































































}



