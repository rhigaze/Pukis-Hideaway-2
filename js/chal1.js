var gQuests = [
    {
        id: 'quest1',
        options:    [
            'Ugi is holding a cookie',
            'Ugi is eating a cat',
            'Ugi is calling 911',
            'Ugi is watching a movie'
                    ],
        correctAnswerIndex: 0,
        isAnswered: false
    },
    {
        id: 'quest2',
        options:    [
            'The cat is yawning',
            'The duck is picking flowers',
            'The duck is dancing',
            'The dart is flying'
                    ],
        correctAnswerIndex: 1,
        isAnswered: false
    },
    {
        id: 'quest3',
        options:    [
            'The infant is playing',
            'The elephant is bathing',
            'The elephant is asleep',
            'The water is smiling'
                    ],
        correctAnswerIndex: 1,
        isAnswered: false
    },
]

var LEVEL = +getState().level;

function getQuest() {
    // gets the first question that is not answered
    var quest = gQuests.filter(function (quest) {
        return (!quest.isAnswered)
    })[0];
    
    return quest;
}

function renderChal1() {
    var quest = getQuest();
    var elQuestImg = document.querySelector('img');
    elQuestImg.src = '/img/chal1/'+ quest.id +'.jpg';

    var elOptions = document.querySelector('.options');
    var strHtml = '';
    
    for (var i = 0; i < (LEVEL+1); i++) {
        strHtml += '<div class="row">';
        strHtml += '<div class="col-xs-12 btn btn-success option" onclick="checkAnswer(this)">'
        strHtml += quest.options[i];
        strHtml += '</div></div>';
    }
    elOptions.innerHTML = strHtml;
}

function checkAnswer(elButton) {
    var quest = getQuest();
    if (elButton.innerText === quest.options[quest.correctAnswerIndex]) {
        quest.isAnswered = true;
        if (getQuest()) renderChal1();
        else {
            reportSolved('chal1');
            alert('Challenge finished!');
            window.location.assign('index.html');
        }
    } else {
        elButton.classList.remove('btn-success');
        elButton.classList.add('btn-danger');
    }
}