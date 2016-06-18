'use strict';

var gFoxes = [
    {
        id: 'fox1',
        pos: [10,5],
        size: 15,
    },
    {
        id: 'fox2',
        pos: [0,50],
        size: 22,
    },
    {
        id: 'fox3',
        pos: [35,32],
        size: 5,
    },
    {
        id: 'fox4',
        pos: [25,75],
        size: 8,
    },
    {
        id: 'fox5',
        pos: [20,38],
        size: 10,
    }
]


function getFoxes() {
    var foxNum = getRandomIntInclusive(2,5);
    console.log('foxNum:', foxNum);
    var foxes = [];
    for (var i = 0; i < foxNum; i++) {

        var num = getRandomIntInclusive(0,foxNum-1);
        while (foxes.indexOf(gFoxes[num]) > -1) {
            num = getRandomIntInclusive(0,foxNum-1);
        }
        foxes.push(gFoxes[num]);
        console.log('gFoxes[num]:', gFoxes[num]);
    }
    console.log('foxes: ', foxes);
    return foxes;
}

function renderFoxes() {
    var elFrame = document.querySelector('.frame');
    var strHTML = getFoxes().map(function (fox) {
        return  '<div class="fox '+ fox.id +'" style="'+
                'bottom: '+ fox.pos[0] +'%; left: '+ fox.pos[1] +'%; width: '+ fox.size +'%">' +
                '<img src="img/chal4/fox.png" alt="fox"></div>';
    }).join('');
    elFrame.innerHTML += strHTML;
}

function checkAnswer(elButton) {
    var userAns = +elButton.innerText;
    var correctAns = document.querySelectorAll('.fox').length;

    if (userAns === correctAns) {
        reportSolved('chal4');
        alert('Challenge finished!');
        window.location.assign('index.html');

    } else {
        elButton.classList.remove('btn-success');
        elButton.classList.add('btn-danger');
    }
}