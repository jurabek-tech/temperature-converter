// Get Elements
let input = document.querySelector('.converter-input');

let unit_from = document.querySelector('#unit-from');
let selected_from = document.querySelector('#unit-from .unit-selected p');
let options_from = document.querySelectorAll('#unit-from .unit-option');

let unit_to = document.querySelector('#unit-to');
let selected_to = document.querySelector('#unit-to .unit-selected p');
let options_to = document.querySelectorAll('#unit-to .unit-option');

let button = document.querySelector('.converter-btn');

// Units
let units = ['Fahreinheit', 'Celseus', 'Kelvin'];
let unit_from_value = '';
let unit_to_value = '';

// Handle Unit Events
unit_from.addEventListener('click', () => {
    unit_from.classList.toggle('active');

    if (unit_from.classList.contains('active')) {
        options_from.forEach((option, index) => {
            option.addEventListener('click', () => {
                selected_from.innerHTML = units[index]
                unit_from_value = units[index]
            })
        })
    }
})

unit_to.addEventListener('click', () => {
    unit_to.classList.toggle('active');

    if (unit_to.classList.contains('active')) {
        options_to.forEach((option, index) => {
            option.addEventListener('click', () => {
                selected_to.innerHTML = units[index]
                unit_to_value = units[index]
            })
        })
    }
})