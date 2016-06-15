var gQuests = [
    {
        id: 1,
        picture: '../img/chal1/1.png',
        options:    [
            'Ugi is holding a cookie',
            'Ugi is eating a cat',
            'Ugi is calling 911',
            'Ugi is watching a movie'
                    ],
        answerIndex: 0,
        isAnswered: false
    },
    {
        id: 2,
        picture: '../img/chal1/2.jpg',
        options:    [
            'The cat is yawning',
            'The duck is picking flowers',
            'The duck is dancing',
            'The dart is flying'
                    ],
        answerIndex: 1,
        isAnswered: false
    },
    {
        id: 3,
        picture: '../img/chal/3.jpg',
        options:    [
            'The infant is playing',
            'The elephant is taking a shower',
            'The elephant is throwing a ball',
            'The water is smiling'
                    ],
        answerIndex: 1,
        isAnswered: false
    },
]

// var gState = JSON.parse(localStorage.getItem('gState'));

function renderChal1(quest) {
    var elQuestImg = document.querySelector('img');
    elQuestImg.src = quest.picture;

    var elOptions = document.querySelector('.options');

    var strHtml = '';
    for (var i = 0; i < 4; i++) {
        strHtml += '<div class="row">';
        strHtml += '<div class="col-xs-12 btn btn-success option">'
        strHtml += quest.options[i];
        strHtml += '</div></div>';
    }
    elOptions.innerHTML = strHtml;
}

function getQuest() {
    // gets the first question that is not answered
    var quest = gQuests.filter(function (quest) {
        return (!quest.isAnswered)
    })[0];
    
    return quest;
}