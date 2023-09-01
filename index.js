const history = document.getElementById("history");
const cs = document.getElementById("cs");
const maths = document.getElementById("maths");
const astro = document.getElementById("astro");

const input_radios = document.getElementsByTagName('input');
const input_container = document.getElementsByClassName("input_container");

const all_categories = [history, cs, maths, astro];

all_categories.forEach((each_category) => {
    each_category.addEventListener('click', () => {

        if (each_category == maths) {
            window.location.href = 'index2.html';
        }

        else if (each_category == history) {
            window.location.href = 'index5.html';
        }
        else if (each_category == cs) {
            window.location.href = 'index3.html';
        }

        else if (each_category == astro) {
            window.location.href = 'index4.html';
        }

    });
}) 

