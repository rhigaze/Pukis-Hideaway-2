'use strict';

// checks if it's the first entry to the game.
// if it is, gets default (JS) gState
var gState = JSON.parse(localStorage.getItem('gState'));


if (!gState) {
    gState =    {
            chals: getChals(),
            level: 1  
                } 
}

localStorage.setItem('gState', JSON.stringify(gState));

 function updateLevel(){
      gState.level =  +document.querySelector('input[name="level"]:checked').value; 
    }  

// console.log('gState:', gState);

function chalFinished(chalId) {
    alert('challenge'+ chalId +'finished');
}