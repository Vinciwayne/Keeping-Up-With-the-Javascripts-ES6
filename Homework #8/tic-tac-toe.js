






let boxes = [],
    turn,
    score,
    moves;


/**
  Initializing game board and starting game.
 */
function init() {
    let gameBoard = document.createElement('table');    // initialize game table

    let identifier = 1;
    for (let i=0; i<3; i++) {
        let row = document.createElement('tr');     // initialize table rows
        gameBoard.appendChild(row);

        for (let j=0; j<3; j++) {
            let cell = document.createElement('td');     // initialize row cell
            cell.classList.add('col' + j, 'row' + i);

            // helper for checking diagonal
            if (i === j) {
                cell.classList.add('diagonal0');
            }
            if (j === 3 - i - 1) {
                cell.classList.add('diagonal1');
            }

            cell.identifier = identifier;   // identify cell
            cell.addEventListener('click', set);    // add event listener for user mouse click
            row.appendChild(cell);
            boxes.push(cell);
            identifier += identifier;   // increment identifier
        }
    }

    document.getElementById('ticTacToe').appendChild(gameBoard);    // append board to page
    startNewGame();
}


/**
 * Cleaning board game and resetting variables
 */
function startNewGame() {
    // reset main variables
    score = {
        'X': 0,
        'O': 0
    };
    moves = 0;
    turn = 'X';

    // clean board cells
    boxes.forEach(function (cell) {
        cell.innerHTML = '&nbsp;';
    });

    document.getElementById('turn').textContent = `Next turn: player ${turn}`;
}


/**
 * Checking score after each click
 * @param click Click event
 * @returns {boolean}
 */
function checkScore(click) {

    let memberOf = click.className.split(/\s+/);    // Get all cell classes

    for (let i = 0; i < memberOf.length; i++) {
        let testClass = '.' + memberOf[i];
        let items = contains('#ticTacToe ' + testClass, turn);

        if (items.length === 3) return true;
    }

    return false;
}


/**
 * Helper function to check if NodeList from selector has a particular text
 */
function contains(selector, text) {
    let elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}


/**
 * Sets clicked square and also updates the turn.
 */
function set() {
    if (this.innerHTML !== '&nbsp;') return;
    this.innerHTML = turn;
    moves += 1;
    score[turn] += this.identifier;

    if (checkScore(this)) {
        alert(`${turn} has won!`);
        startNewGame();
    } else if (moves === 3 * 3) {
        alert(`Cats game!`);
        startNewGame();
    } else {
        turn = turn === 'X' ? 'O' : 'X';
        document.getElementById('turn').textContent = `Next turn: player ${turn}`;
    }
}



init();




/*
EZEBUIRO UCHECHUKWU VINCENT
*/