
points = 0





function action() 
{

    document.getElementById("submit_button").remove()


    if (document.getElementById('ans_1').value == '0') {


        points += 10

    }

    if (document.getElementById('ans_2').value == '1') {


        points += 10

    }

    if (document.getElementById('ans_3').value == '1') {


        points += 10

    }

    if (document.getElementById('ans_4').value == '15') {

        points += 10

    }

    if (document.getElementById('ans_5').value == '1') {

        points += 10

    }

    if (document.getElementById('ans_6').value == '0') {

        points += 10

    }
    if (document.getElementById('ans_7').value == '0') {

        points += 10

    }
    if (document.getElementById('ans_8').value == '289') {

        points += 10

    }


    if (document.getElementById('ans_9').value == '2') {

        points += 10

    }
    if (document.getElementById('ans_10').value == '2') {

        points += 10

    }




    const h2 = document.getElementById('result_score');
    h2.innerHTML = "Your Result :  " + points + "/100  marks"




    if (points >= 40) {
        const h3 = document.getElementById('result_status');
        h3.innerHTML = 'Status: Passed '
    }

    else {
        const h3 = document.getElementById('result_status');
        h3.innerHTML = 'Status: Failed'
    }



}


// console.log(document.getElementById('ans_1').value)
// console.log(document.getElementById('ans_2').value)
// console.log(document.getElementById('ans_3').value)
// console.log(document.getElementById('ans_4').value)

