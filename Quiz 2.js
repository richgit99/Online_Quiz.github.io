
points = 0


function action(){

const action_button = document.getElementById('submit_button')
action_button.remove()



var radios = document.getElementsByName('q1_p');

for (var radio of radios){

if (radio.checked){
if (radio.value == '1/x'){
    points +=10
    

}}}

var radios1 = document.getElementsByName('q2_p');

for (var radio1 of radios1){

if (radio1.checked){
if (radio1.value == 'line'){
    points +=10
   
}}}

var radios2 = document.getElementsByName('q3_p');

for (var radio2 of radios2){

if (radio2.checked){
if (radio2.value == ' the slope of the tangent '){
    points +=10
    

}}}

var radios3 = document.getElementsByName('q4_p');

for (var radio3 of radios3){

if (radio3.checked){
if (radio3.value == 'Aryabhatta'){
    points +=10
   

}}}

var radios4 = document.getElementsByName('q5_p');

for (var radio4 of radios4){

if (radio4.checked){
if (radio4.value == 'open'){
    points +=10
   

}}}

var radios5 = document.getElementsByName('q6_p');

for (var radio5 of radios5){

if (radio5.checked){
if (radio5.value == 'differentiable'){
    points +=10
   

}}}

var radios6 = document.getElementsByName('q7_p');

for (var radio6 of radios6){

if (radio6.checked){
if (radio6.value == 'discrerte'){
    points +=10
   

}}}

var radios7 = document.getElementsByName('q8_p');

for (var radio7 of radios7){

if (radio7.checked){
if (radio7.value == 'a = 90'){
    points +=10
   

}}}

const result_score = document.getElementById('result_score')
result_score.innerHTML = 'Result Score: '+points +'/80'


if (points >=40){
    const status = document.getElementById('status')
status.innerHTML = "Status: Passed"
}
else {
    const status = document.getElementById('status')
    status.innerHTML = "Status: Failed"
}

}





























