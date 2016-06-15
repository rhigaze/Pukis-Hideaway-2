
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

function getChals() {}
function getChalById(chalId) {}
function getCurrChal() {
    var gState = localStorage.getItem('gState');
    if (gState) {
        var currChal = JSON.parse(gState).currChal;
    }

    return currChal;
}
function renderChals() {}
function reportSolved(chalId){}
