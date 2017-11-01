$(document).ready(function() {
    console.log('in js');

    var origBoard;
    var huPlayer = 'O';
    var aiPlayer = 'X';
    var winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ];
    var cells = $('.cell');
    startGame();

    function startGame() {
        $('.endGame').css("display: none");
        origBoard = Array.from(Array(9).keys());
        for(var i = 0; i < cells.length; i++) {
            cells[i].innerText = '';
            cells[i].style.removeProperty('background-color');
            cells[i].addEventListener('click', turnClick, false);
        }
    }

    function turnClick(square) {
        console.log(square.target.id);
        turn(square.target.id, huPlayer);
    }

    function turn(squareId, player) {
        origBoard[squareId] = player;
        document.getElementById(squareId).innerText = player;
    }
    
});