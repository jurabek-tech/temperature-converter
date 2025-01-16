// Get Elements
let input = document.querySelector('.converter-input');

let unit_from = document.querySelector('#unit-from');
let selected_from = document.querySelector('#unit-from .unit-selected p');
let options_from = document.querySelectorAll('#unit-from .unit-option');

let unit_to = document.querySelector('#unit-to');
let selected_to = document.querySelector('#unit-to .unit-selected p');
let options_to = document.querySelectorAll('#unit-to .unit-option');

let button = document.querySelector('.converter-btn');

let result = document.querySelector('.result');

// Units
let units = ['Fahreinheit', 'Celseus', 'Kelvin'];
let unit_from_value = '';
let unit_to_value = '';

// Handle Unit Events
unit_from.addEventListener('click', () => {
    unit_from.classList.toggle('active');

    if (unit_from.classList.contains('active')) {
        unit_to.classList.remove('active')
        options_from.forEach((option, index) => {
            option.addEventListener('click', () => {
                selected_from.innerHTML = units[index]
                unit_from_value = units[index]
                if (input.value > 0 & unit_from_value.length > 0 & unit_to_value.length > 0) {
                    button.disabled = false;
                } else {
                    button.disabled = true;
                }
            })
        })
    }
})

unit_to.addEventListener('click', () => {
    unit_to.classList.toggle('active');

    if (unit_to.classList.contains('active')) {
        unit_from.classList.remove('active')
        options_to.forEach((option, index) => {
            option.addEventListener('click', () => {
                selected_to.innerHTML = units[index]
                unit_to_value = units[index]
                if (input.value > 0 & unit_from_value.length > 0 & unit_to_value.length > 0) {
                    button.disabled = false;
                } else {
                    button.disabled = true;
                }
            })
        })
    }
})

// Handle Input Event
input.addEventListener("keydown", (e) => {
    if (e.key === "-" || e.key === "e") e.preventDefault();

    if (input.value > 0 & unit_from_value.length > 0 & unit_to_value.length > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

input.addEventListener("input", () => {
    if (input.value <= 0) input.value = "";
});

// Handle Button Event
button.addEventListener('click', () => {
    if (input.value > 0 & unit_from_value.length > 0 & unit_to_value.length > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }

    let temperature = 0;

    if (unit_from_value === 'Fahreinheit' & unit_to_value === 'Celseus') {
        temperature = (input.value - 32) * (5 / 9)
        result.innerHTML = `${input.value} ${unit_from_value} is ${temperature} ${unit_to_value}`
    } else if (unit_from_value === 'Fahreinheit' & unit_to_value === 'Kelvin') {
        temperature = (input.value - 32) * (5 / 9) + 273.15
        result.innerHTML = `${input.value} ${unit_from_value} is ${temperature} ${unit_to_value}`
    } else if (unit_from_value === 'Celseus' & unit_to_value === 'Fahreinheit') {
        temperature = (input.value * (9 / 5)) + 32
        result.innerHTML = `${input.value} ${unit_from_value} is ${temperature} ${unit_to_value}`
    } else if (unit_from_value === 'Celseus' & unit_to_value === 'Kelvin') {
        temperature = input.value + 273.15
        result.innerHTML = `${input.value} ${unit_from_value} is ${temperature} ${unit_to_value}`
    } else if (unit_from_value === 'Kelvin' & unit_to_value === 'Fahreinheit') {
        temperature = (input.value - 273.15) * (9 / 5) + 32
        result.innerHTML = `${input.value} ${unit_from_value} is ${temperature} ${unit_to_value}`
    } else if (unit_from_value === 'Kelvin' & unit_to_value === 'Celseus') {
        temperature = (input.value - 273.15)
        result.innerHTML = `${input.value} ${unit_from_value} is ${temperature} ${unit_to_value}`
    }

    console.log(temperature);

    if (temperature !== 0) {
        result.classList.remove('red')
        return result.classList.add('green');
    } else {
        result.classList.add('red')
        return result.innerHTML = 'Smth went wrong...'
    }
})