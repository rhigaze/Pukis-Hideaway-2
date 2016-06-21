'use strict'

function runTests(){

    (function checkGetState() {
        gState = getState();
        console.assert(gState, 'supposed to get state');
    })();

    (function checkGetChals() {
        var chals = getChals();
        console.assert(chals, 'supposed to get chals');
    })();



}