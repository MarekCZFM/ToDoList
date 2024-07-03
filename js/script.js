let pridavaciTlacitko = document.getElementById('add-button');
pridavaciTlacitko.onclick = function () {
    let novyUkol = document.createElement('li');
    let poleSNazvemUkolu = document.getElementById('todo-entry-box')
    novyUkol.textContent = poleSNazvemUkolu.value;
    let listUkolu = document.getElementById('todo-list');
    listUkolu.appendChild(novyUkol);
    poleSNazvemUkolu.value = "";
};

let listUkolu = document.getElementById('todo-list');
listUkolu.addEventListener('dblclick',
function dcNaUkol(event) {
    let ukol = event.target;

    ukol.classList.add('completed');
});

let vymazSplneneUkoly = document.getElementById('clear-completed-button');

function vymazZ(elementNaVymazani) {
    let splneneUkoly = document.querySelectorAll(elementNaVymazani);
    splneneUkoly.forEach(element => {
        element.remove();
    });
};

vymazSplneneUkoly.onclick = function() {vymazZ('#todo-list .completed')};

let vymazVsechnyUkoly = document.getElementById('empty-button');
vymazVsechnyUkoly.onclick = function() {vymazZ('#todo-list')};