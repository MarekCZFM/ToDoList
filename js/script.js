(function nactiPredchoziUkoly() {
    let predchoziUkolyVRetezci = localStorage.getItem('ukolnicek');

    if (!predchoziUkolyVRetezci)
    {
        return;
    }

    let predchoziUkoly = JSON.parse(predchoziUkolyVRetezci);
    
    let listUkolu = document.getElementById('todo-list');
    for (let i = 0; i < predchoziUkoly.length; i++) {
        const element = predchoziUkoly[i];
        let novyUkol = document.createElement('li');
        novyUkol.innerText = element.nazev;
        listUkolu.appendChild(novyUkol);
        if (element.splneno)
        {
            novyUkol.classList.add('completed');
        }
    }
})();

let pridavaciTlacitko = document.getElementById('add-button');
pridavaciTlacitko.onclick = function () {
    let poleSNazvemUkolu = document.getElementById('todo-entry-box');
    pridejUkol(poleSNazvemUkolu.value, false);

    poleSNazvemUkolu.value = "";
    ulozitUkolnicek();
};

function pridejUkol(nazev, splneno) {
    let novyUkol = document.createElement('li');
    novyUkol.textContent = nazev;
    let listUkolu = document.getElementById('todo-list');
    listUkolu.appendChild(novyUkol);
    if (splneno)
    {
        novyUkol.classList.add('completed');
    }
    ulozitUkolnicek();
};

let listUkolu = document.getElementById('todo-list');
listUkolu.addEventListener('dblclick',
function dcNaUkol(event) {
    let ukol = event.target;

    ukol.classList.add('completed');
    ulozitUkolnicek();
});

let vymazSplneneUkoly = document.getElementById('clear-completed-button');

function vymazZ(elementNaVymazani) {
    let splneneUkoly = document.querySelectorAll(elementNaVymazani);
    splneneUkoly.forEach(element => {
        element.remove();
    });
    ulozitUkolnicek();
};

vymazSplneneUkoly.onclick = function() {vymazZ('#todo-list .completed')};

let vymazVsechnyUkoly = document.getElementById('empty-button');
vymazVsechnyUkoly.onclick = function() {vymazZ('#todo-list > *')};

function ulozitUkolnicek() {
    let ukolnicekKUlozeni = [];

    let ukolnicek = document.getElementById('todo-list');
    for (let i = 0; i < ukolnicek.children.length; i++) {
        const element = ukolnicek.children[i];
        
        let ukol = {
            nazev: element.innerText,
            splneno: element.classList.contains('completed')
        };
        ukolnicekKUlozeni.push(ukol);
    }

    localStorage.setItem('ukolnicek', JSON.stringify(ukolnicekKUlozeni));
};

document.getElementById('save-button').onclick = () => {ulozitUkolnicek(); alert('Uspesne ulozeno!');};

document.getElementById('todo-entry-box').addEventListener('keypress', (event) => 
    {
        if (event.key === 'Enter') 
        { 
            event.preventDefault(); 
            document.getElementById('add-button').click();
        }
    }
);