var quizMode = 'REGISTRATION';

$(function () {
    var quiz = $.connection.quizHub;

    quiz.client.broadcastMessage = handleMessage;
    
    $.connection.hub.start();

    startScreen();
});

jQuery.fn.visible = function () {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function () {
    return this.css('visibility', 'hidden');
};

function nextQuestion() {
    if ($('.user').length > 1) {
        ShowCountdown();
        window.quizMode = 'QUIZ';
        $('.user').removeClass('received');
        $('#intro').hide();
        startOrbiting();
        cycleQuestionBackgroundColors();
        $('#question').show();
        $('#question-instruction').visible();
        var question = new QuestionSelector().getNext();
        $('#question-text').html(question.question);
        $('#answer-a').html(question.answerA);
        $('#answer-b').html(question.answerB);
        $('#answer-c').html(question.answerC);
        $('#answer-d').html(question.answerD);
        $('#answer').val(question.correct_answer);
    }
    else if ($('.user').length === 1) {
        winScreen();
    }
}

function startScreen() {
    window.quizMode = 'REGISTRATION';
    $('#intro').show();
    $('#question').hide();
    $('#win-screen').hide();

    $(document).keypress(function (event) {
        if (event.which == 119) { // w is the winscreen shortcut
            event.preventDefault();
            winScreen();
        }
        else if ($('.user').length > 1) {
            event.preventDefault();
            nextQuestion();
        }
    });

    // stop the body
    $('body').stop(true);
    
    bubblesMain(new Object({
        type: 'radial',
        revolve: 'center',
        minSpeed: 100,
        maxSpeed: 500,
        minSize: 50,
        maxSize: 150,
        num: 150,
        colors: new Array('#FFFFFF', '#BBBBBB', '#999999')
    }));
}

function winScreen() {
    window.quizMode = 'WIN';
    var winnerName = $('.user span').html();
    var winnerMobile = $('.user').attr('id');
    $('#winner').html(winnerName);
    $('#intro').hide();
    $('#question').hide();
    $('.user').hide();
    $('#win-screen').show();

    // send the winner an SMS
    $.get('/OutboundSMS/SendSMS', { to: winnerMobile, message: 'Thaaaat\'s QuizBang!\n\nYou won the quiz and have wowed the world with your superior trivia knowledge. Well done you.' });

    $(document).keypress(function (event) {
        startScreen();
    });

    bubblesMain(new Object({
        type: 'linear',
        revolve: 'center',
        minSpeed: 100,
        maxSpeed: 500,
        minSize: 50,
        maxSize: 150,
        num: 100,
        colors: new Array('#FFFFFF', '#BBBBBB')
    }));
    cycleBackgroundColors();
}

function cycleQuestionBackgroundColors() {
    var colors = ["#ccffcc", "#ffcccc", "#ADD8E6"];
    var i = 0;
    while (i < colors.length) {
        $("body").animate({ backgroundColor: colors[i++ % colors.length] }, 1000, cycleQuestionBackgroundColors);
    }
}

function cycleBackgroundColors() {
    var colors = ["green", "yellow", "red", "purple", "blue"];
    var i = 0;
    while (i < colors.length) {
        $("body").animate({ backgroundColor: colors[i++ % colors.length] }, 200, cycleBackgroundColors);
    }
}
