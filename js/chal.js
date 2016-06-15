
var gChals = [
    {
        id: 'chal1',
        name: 'What\'s in the picture?',
        isSolved: false
    },
    {
        id: 'chal2',
        name: 'Up to 100',
        isSolved: false
    },
    {
        id: 'chal3',
        name: 'The puzzles master',
        isSolved: false
    },
    {
        id: 'chal4',
        name: 'Fun counting',
        isSolved: false
    }
];

function getChals() {
    var chals = JSON.parse(localStorage.getItem('gState')).chals;
    if (!chals) chals = gChals;
    return chals;
}

function getChalById(chalId) {}
function getCurrChal() {
    var gState = localStorage.getItem('gState');
    if (gState) {
        var currChal = JSON.parse(gState).currChal;
    }

    return currChal;
}

function renderChals() {}

function reportSolved(chalId){
    var state = JSON.parse(localStorage.getItem('gState'));
    state.chals[chalId].isSolved = true;
    localStorage.setItem('gState', JSON.stringify(state));
}
