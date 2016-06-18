//
var gLevel ;
var gState ;
//
function init() {
 
    gLevel = getLevel();
    gState = getState(gLevel);
    renderBoard(gLevel , gState);
    addDragToAns();   
}

//TO DO get level from local storage
function getLevel() {
    return 2   ;
}
function getState(level) {
    var state = {};
    switch(level){
        case 1:
                state.level = level;
                state.quest = [ { qNumber: 1, qu: '1 + 9 =' , ans: '10'} ,
                                { qNumber: 2, qu: '2 + 3 =' , ans: '5'}  ,
                                { qNumber: 3,qu:  '9 - 3 =' , ans: '6'} ,
                                { qNumber: 4,qu:  '4 + 3 =' , ans: '7'},
                                { qNumber: 5,qu:  '7 - 5 =' , ans: '2'},
                                { qNumber: 6, qu:  '4 - 1 = ' , ans: '3'},
                                { qNumber: 7, qu:  '4 + 4 =' , ans: '8'}, 
                                { qNumber: 8,qu:  '7 + 2 =' , ans: '9'},
                                { qNumber: 9,qu:  '4 - 3 =' , ans: '1'},];
                state.upTo = 10;
                break;
        case 2:
                state.level = level;
                state.quest = [ { qNumber: 1, qu: '16-9=' , ans: '7'} ,
                                { qNumber: 2, qu: '2+13 =' , ans: '15'}  ,
                                { qNumber: 3, qu:  '9-3 =' , ans: '6'} ,
                                { qNumber: 4, qu:  '14+3 =' , ans: '17'},
                                { qNumber: 5, qu:  '17-5 =' , ans: '12'},
                                { qNumber: 6, qu:  '4+9 = ' , ans: '13'},
                                { qNumber: 7, qu:  '4+14 =' , ans: '18'}, 
                                { qNumber: 8, qu:  '17+2 =' , ans: '19'},
                                { qNumber: 9, qu:  '11-3 =' , ans: '8'},
                                { qNumber: 10, qu: '1+9 =' , ans: '10'} ,
                                { qNumber: 11, qu: '20-0 =' , ans: '20'}  ,
                                { qNumber: 12, qu:  '9+11 =' , ans: '20'} ,
                                { qNumber: 13, qu:  '4+3 =' , ans: '7'},
                                { qNumber: 14, qu:  '1+15 =' , ans: '16'},
                                { qNumber: 15, qu:  '10+4 = ' , ans: '14'},
                                { qNumber: 16, qu:  '14-1 = ' , ans: '3'},];
                state.upTo = 20;
                break;
        case 3:
                state.level = level;
                state.quest = [ { qu: '16 - 9 =' , ans: '7'} ,
                                { qu: '2 + 13 =' , ans: '15'}  ,
                                { qu:  '9 - 3 =' , ans: '6'} ,
                                { qu:  '14 + 3 =' , ans: '17'},
                                { qu:  '17 - 5 =' , ans: '12'},
                                { qu:  '4 + 9 = ' , ans: '13'},
                                { qu:  '4 + 14 =' , ans: '18'}, 
                                { qu:  '17 + 2 =' , ans: '19'},
                                { qu:  '11 - 3 =' , ans: '8'},
                                { qu: '1 + 9 =' , ans: '10'} ,
                                { qu:  '17 - 5 =' , ans: '12'},
                                { qu:  '4 + 9 = ' , ans: '13'},
                                { qu:  '4 + 14 =' , ans: '18'}, 
                                { qu:  '17 + 2 =' , ans: '19'},
                                { qu:  '11 - 3 =' , ans: '8'},
                                { qu: '1 + 9 =' , ans: '10'} ,
                                { qu: '20 - 0 =' , ans: '20'}  ,
                                { qu:  '9 + 11 =' , ans: '20'} ,
                                { qu:  '4 + 3 =' , ans: '7'},
                                { qu:  '1 + 15 =' , ans: '16'},
                                { qu:  '10 + 4 = ' , ans: '14'},
                                { qu:  '14 - 1 = ' , ans: '3'},];
                state.upTo = 100;
                break;
        default:
                break;
                
    }
    return state;
}
function renderBoard(level , state) {
    var strBoard = '<table background="../img/chal3/'+level+'.jpg">';
    var qLength = state.quest.length;
    var length = Math.sqrt(qLength);
 
    strBoard += (state.quest).map(function(qObj , i){ 
       if(i % length === 0) { return '<tr><td data-qNumber="'+ qObj.qNumber+'" class="quest">'+ qObj.qu+'</td>'};
        return '<td data-qNumber="'+ qObj.qNumber+'" class="quest">'+ qObj.qu+'</td>';
    }).join(' ');
   
    strBoard += '</table>';
    document.querySelector('.board').innerHTML = strBoard;
    renderAnswers(state)
}
function f(cell) {
    cell.innerHTML ='';
    cell.classList.remove('quest');
    
}

function renderAnswers(state) {
    var strAnsw ="<table><tr> ";
    var qLength = state.quest.length;
    var length =qLength/2;
    var arrAns = state.quest;
    arrAns.sort(function(a,b){return a.ans-b.ans})
   
    
    strAnsw += (arrAns.map(function(qObj , i){ 
        if(i > 0 && i % length === 0) { return '</tr><td onclick="drage(this)" class="answer" data-qNumber="'+ qObj.qNumber +'">'+ qObj.ans +'</td>'};
        return '<td onclick="drage(this)" class="answer" data-qNumber="'+ qObj.qNumber +'">'+qObj.ans +'</td>';
    })).join(' ');
    
    strAnsw += '</tr></table>';
   
    var ansEl = document.createElement('div');
    ansEl.setAttribute('class' , 'answer');
    ansEl.innerHTML = strAnsw;
    document.querySelector('.board').appendChild(ansEl); 
  
}
 function addDragToAns() {
     
        $( "td.answer" ).draggable({opacity : .7 , revert:'invalid'});
 }
 function drage(ansCell){

     var qNumber = ansCell.getAttribute('data-qNumber');
    $("[data-qNumber = '"+qNumber +"']" ).droppable({
    
        drop: function( event, ui ) {
            $( this )   
            .removeClass( "quest" )
                .html( "" );          
             $(ansCell).addClass("quest").removeClass("answer");
             
             setTimeout(function(){
                  $(ansCell).removeClass("quest").html("");;
             }, 1000);   
        }
    });
 }