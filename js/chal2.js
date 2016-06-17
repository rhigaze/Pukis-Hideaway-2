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
    drop();
}
function buidBoard(chartType) {
    var arrayBoard = [];
    var start = chartType;
    for(var i = 0 ;i < 10   ;i++){
        arrayBoard[i] = [];
        start = chartType;
        for(var j = 0 ;j < 10 ;j++ , start++ ){
            arrayBoard[i][j] = i*10 + start;
        }
    }
    return arrayBoard;
}
 function drop() {
        alert("sssss");
        $("[data-row='1'][data-colm='3']" ).droppable({
        
        drop: function( event, ui ) {
                alert("---");
            $( this )   
            .addClass( "ui-state-highlight" )
                .html( "Dropped!" );
        }
        });
        $( "#answer td" ).draggable();
  }
    
function startGame(board) {
    var gameBoard = board;
    for(var i = 0 ;i < gameBoard.length ;i++){
        renderRow(i, gameBoard);
        playRow(i);
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
        // elTd.setAttribute('onclick', 'f(this)');
       
        
        elRow.appendChild(elTd);
    }
    document.querySelector('#tableGame').appendChild(elRow);
}
function playRow(row) {
    var arryMissNum = [];
    arryMissNum.push(randCell(row)); 
    arryMissNum.push(randCell(row));
    renderAnswers(arryMissNum);
    if(userTurn()) return true; 
}
function randCell(row) {
 
    var rand = Math.floor(Math.random()*10);
 
    var st = "[data-row= '"+row +"'][data-colm='"+ rand+"']";
    var cell = document.querySelector(st);
    
    cell.style.visibility= 'hidden';
    return cell;
}
function renderAnswers(answers) {
    var tblAnswer = document.querySelector('#answer');
     
    
    for(var i = 0; i < answers.length ;i++){
        var a =answers[i].cloneNode(true);
        a.style.visibility = 'visible';
          tblAnswer.appendChild(a);
    }
}

function userTurn() {
    // alert('---');
    var flag = false;
    setTimeout(function () {
        flag = true;
    }, 10000)
    return flag;
} 

