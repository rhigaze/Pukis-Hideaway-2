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
        picture: '../img/chal1/3.jpg',
        options:    [
            'The infant is playing',
            'The elephant is bathing',
            'The elephant is asleep',
            'The water is smiling'
                    ],
        answerIndex: 1,
        isAnswered: false
    },
]

// var gState = JSON.parse(localStorage.getItem('gState'));

function renderChal1() {
    var quest = getQuest();
    var elQuestImg = document.querySelector('img');
    elQuestImg.src = quest.picture;

    var elOptions = document.querySelector('.options');

    var strHtml = '';
    var LEVEL = 4;   // TODO: change '4' to difficulty level

    for (var i = 0; i < LEVEL; i++) {
        strHtml += '<div class="row">';
        strHtml += '<div class="col-xs-12 btn btn-success option" onclick="checkAnswer(this)">'
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

function checkAnswer(elButton) {
    var quest = getQuest();
    if (elButton.innerText === quest.options[quest.answerIndex]) {
        quest.isAnswered = true;
        if (getQuest()) renderChal1();
        else {
            alert('Challenge finished!');
            window.location.assign('index.html');
        }
    } else {
        elButton.classList.remove('btn-success');
        elButton.classList.add('btn-danger');
    }
}