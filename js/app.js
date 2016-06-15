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

function updateLevel() {
    var level = document.querySelector('[name="level"]:checked').value;
    
    var state = JSON.parse(localStorage.getItem('gState'));
    state.level = level;
    localStorage.setItem('gState', JSON.stringify(state));
}

// console.log('gState:', gState);
