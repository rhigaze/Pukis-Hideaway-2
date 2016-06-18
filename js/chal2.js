'use strict';

var gBoard;
var gLevel = 1;
var chartType;
function initGame() {
<<<<<<< HEAD
=======
    
>>>>>>> 642d9dde429f5761a209adb5dd9f60e6b5698cbc
    gBoard = buidBoard(chartType);
    document.querySelector('.board').style.display = 'block';
    startGame(gBoard);
}
function getChartType(type) {
    chartType = type;   
    document.querySelector('.chartType').style.display = 'none';   
    initGame();
<<<<<<< HEAD
=======
    drop();
>>>>>>> 642d9dde429f5761a209adb5dd9f60e6b5698cbc
}
function buidBoard(chartType) {
    var arrayBoard = [];
    var start = chartType;
<<<<<<< HEAD
    
    for(var i = start ;i <= 9   ;i++){
        arrayBoard[i] = [];
        for(var j = start ;j < start+10 ;j++ ){
            arrayBoard[i][j] = i*10 + j;
        }
    }
    console.table(arrayBoard);
    return arrayBoard;
}
=======
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
        $("[data-row='1'][data-colm='3']" ).droppable({
        
        drop: function( event, ui ) {
            $( this )   
            .addClass( "ui-state-highlight" )
                .html( "Dropped!" );
        }
        });
        $( "#answer td" ).draggable();
  }
    
>>>>>>> 642d9dde429f5761a209adb5dd9f60e6b5698cbc
function startGame(board) {
    var gameBoard = board;
    for(var i = 0 ;i < gameBoard.length ;i++){
        renderRow(i, gameBoard);
<<<<<<< HEAD
        randCell(i);
=======
        playRow(i);
>>>>>>> 642d9dde429f5761a209adb5dd9f60e6b5698cbc
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
<<<<<<< HEAD
        elTd.setAttribute('onclick', 'f(this)');
       
        
=======
        // elTd.setAttribute('onclick', 'f(this)');
>>>>>>> 642d9dde429f5761a209adb5dd9f60e6b5698cbc
        elRow.appendChild(elTd);
    }
    document.querySelector('#tableGame').appendChild(elRow);
}
<<<<<<< HEAD
function randCell(row) {
    var rand1 = Math.floor(Math.random()*10);
    var rand2 = Math.floor(Math.random()*10);
    
}
  
=======
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
    var flag = false;
    setTimeout(function () {
        flag = true;
    }, 10000)
    return flag;
} 
>>>>>>> 642d9dde429f5761a209adb5dd9f60e6b5698cbc

