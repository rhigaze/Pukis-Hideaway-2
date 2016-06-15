'use strict';

var gBoard;
var gLevel = 1;
var chartType;
function initGame() {
    gBoard = buidBoard(chartType);
    document.querySelector('.board').style.display = 'block';
    startGame(gBoard);
}
function getChartType(type) {
    chartType = type;   
    document.querySelector('.chartType').style.display = 'none';   
    initGame();
}
function buidBoard(chartType) {
    var arrayBoard = [];
    var start = chartType;
    
    for(var i = start ;i <= 9   ;i++){
        arrayBoard[i] = [];
        for(var j = start ;j < start+10 ;j++ ){
            arrayBoard[i][j] = i*10 + j;
        }
    }
    console.table(arrayBoard);
    return arrayBoard;
}
function startGame(board) {
    var gameBoard = board;
    for(var i = 0 ;i < gameBoard.length ;i++){
        renderRow(i, gameBoard);
        randCell(i);
    }
}
function renderRow(row , board) {
    var elRow = document.createElement('tr');
    for(var i = 0; i < board[row].length; i++){
        
        var elTd = document.createElement('td');
        elTd.innerHTML = board[row][i];
        var className = i % 2 === 0? 'even' : 'odd';
        elTd.setAttribute('class', className);
        elTd.setAttribute('data-row', row);
        elTd.setAttribute('data-colm', i);
        elTd.setAttribute('onclick', 'f(this)');
       
        
        elRow.appendChild(elTd);
    }
    document.querySelector('#tableGame').appendChild(elRow);
}
function randCell(row) {
    var rand1 = Math.floor(Math.random()*10);
    var rand2 = Math.floor(Math.random()*10);
    
}
  

