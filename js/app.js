'use strict';

var gState = null;
var STATE_KEY = 'pukiGameState';

function getState() {
    if (gState) return gState;
    gState = getFromStorage(STATE_KEY);
    if (!gState) {
        gState = getInitialState();
        saveToStorage(STATE_KEY, gState);
    }
    return gState;
}

function getInitialState() {

    var chals = [
        {
            id: 'chal1',
            name: 'What\'s in the picture?',
            imgSrc: 'img/monster/2.png',
            isSolved: false
        },
        {
            id: 'chal2',
            name: 'Up to 100',
            imgSrc: 'img/monster/2.png',
            isSolved: false
        },
        {
            id: 'chal3',
            name: 'The puzzles master',
            imgSrc: 'img/monster/2.png',
            isSolved: false
        },
        {
            id: 'chal4',
            name: 'Fun counting',
            imgSrc: 'img/monster/2.png',
            isSolved: false
        }
                ];

    return  {
                chals: chals,
                level: 1  
            };
}


function updateLevel() {
    var level = document.querySelector('[name="level"]:checked').value;

    var state = getState();
    state.level = level;
    saveToStorage(STATE_KEY, state);
}

function getChals() {
    return getState().chals;
}

function getChalById(chalId) {
    return getChals().filter(function (chal) {
        return chal.id === chalId;
    })[0];
}

function getCurrChal() {
    return getChals().filter(function (chal) {
        return !chal.isSolved;
    })[0];
}

function reportSolved(chalId){
    var state = getState();
    getChalById(chalId).isSolved = true;
    saveToStorage(STATE_KEY, state);
}

function renderChals() {
    var chals = getChals();
    var currChal = getCurrChal();
    var strHTML = '';
    chals.forEach(function (chal, i) {
        strHTML += '<div class="col-md-3 col-xs-6 chal'+ ((chal.id <= currChal.id)? '':' locked') +'">';
        strHTML += '<a href="'+ chal.id +'.html">';
        strHTML += '<img src="'+ chal.imgSrc +'" class="img-responsive" alt="">';
        strHTML += '</a></div>';
    })
    
    var elChals = document.querySelector('.chals');
    elChals.innerHTML = strHTML;
}

