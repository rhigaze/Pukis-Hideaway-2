
var gChals = [
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

function getChals() {
    var chals;
    var state = JSON.parse(localStorage.getItem('gState'));
    if (!state) chals = gChals;
    else chals = state.chals;

    return chals;
}

function getChalById(chalId) {}

function getCurrChal() {
    var state = JSON.parse(localStorage.getItem('gState'));
    var currChal;
    if (!state) currChal = gChals[0];
    else currChal = state.chals.filter(function (chal) {
        return (!chal.isSolved)
    })[0];

    return currChal;
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

function reportSolved(chalId){
    var state = JSON.parse(localStorage.getItem('gState'));
    state.chals[chalId].isSolved = true;
    localStorage.setItem('gState', JSON.stringify(state));
}
