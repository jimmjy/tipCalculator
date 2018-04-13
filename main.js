//inital DOM manipulation

let tip = document.querySelector('.output');
let tipAmount = document.querySelector('.tipAmount');
let reset = document.querySelector('.reset');

tip.style.display = 'none';
tipAmount.style.display = 'none';
reset.style.display = 'none';

//function to retrieve info from fields and to calculate how much per person

function values () {
    totalCost = document.getElementById('cost__input').value;
    service = document.getElementById('service__options').value;
    people = document.getElementById('share__amount').value;
}

function tipCalculate () {
    return ((totalCost*service)/people);
}

//variables
let totalCost, service, people;

let button = document.querySelector('.calculate');

//reload page on reset button click

let resetPage = document.querySelector('.reset__button');

resetPage.onclick = function() {
    window.location.reload(true);
}

// function call with info rendered to page

button.onclick = function() {
    values();

    let tipTotal = tipCalculate().toFixed(2);

    if(isNaN(tipTotal)) {
        tipAmount.innerHTML = 'Please enter valid information';
        tipAmount.style.display = 'block';
    } else {
        tipAmount.innerHTML = '$ ' + tipTotal;
        tip.style.display = 'block';
        tipAmount.style.display = 'block';
        reset.style.display = 'block';
    }

    
    

    
};




