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

function renderFoxes() {
    var elFrame = document.querySelector('.frame');
    var strHTML = gFoxes.map(function (fox) {
        return  '<div class="fox '+ fox.id +'" style="'+
                'bottom: '+ fox.pos[0] +'%; left: '+ fox.pos[1] +'%; width: '+ fox.size +'%">' +
                '<img src="img/chal4/fox.png" alt="fox"></div>';
    }).join('');
    elFrame.innerHTML += strHTML;
}