// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


const gridContainer = document.getElementById('container');

const easyBtn = document.getElementById("btnEasy");
const mediumBtn = document.getElementById("btnMedium");
const hardBtn = document.getElementById("btnHard");

easyBtn.addEventListener('click', 
    function() {
        gridContainer.innerHTML = "";

        gridDifficulty(100, "squareEasy")

        squareClickAdd('[class^="square"]', 'active')
        
    }
);

mediumBtn.addEventListener('click', 
    function() {
        gridContainer.innerHTML = "";

        gridDifficulty(81, "squareMedium")    

        squareClickAdd('[class^="square"]', 'active')
        
    }
    
);

hardBtn.addEventListener('click', 
    function() {
        gridContainer.innerHTML = "";

        gridDifficulty(49, "squareHard")

        squareClickAdd('[class^="square"]', 'active')
    }
);

function squareGenerator(x, y) {
    let gridSquare = document.createElement(x);
    gridSquare.classList.add(y);
    return gridSquare
}

function gridDifficulty(x, y) {
    for (let i = 0; i < x; i++) {
        let newElem = squareGenerator("div", y);
        gridContainer.appendChild(newElem);
    }
}

function squareClickAdd(x, y) {
    let squareClick = document.querySelectorAll(x);
        console.log(squareClick);

        for (let i = 0; i < squareClick.length; i++) {
            squareClick[i].addEventListener ('click', 
                function() {
                    squareClick[i].classList.add(y);
                    squareClick[i].innerText = i + 1;
                }
            );
        }
}