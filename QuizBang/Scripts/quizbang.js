var quizMode = 'REGISTRATION';

$(function () {
    var quiz = $.connection.quizHub;

    quiz.client.broadcastMessage = handleMessage;
    $(document).keypress(nextQuestion);
    $.connection.hub.start();
});

function nextQuestion() {
    window.quizMode = 'QUIZ';
    
    $('#intro').hide();
    $('#question').show();
    var question = new QuestionSelector().getNext();
    $('#question-text').html(question.question);
    $('#answer-a').html(question.answerA);
    $('#answer-b').html(question.answerB);
    $('#answer-c').html(question.answerC);
    $('#answer-d').html(question.answerD);
    $('#answer').val(question.correct_answer);
}

function winScreen() {
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

function cycleBackgroundColors() {
    var colors = ["green", "yellow", "red", "purple", "blue"];
    var i = 0;
    while (i < colors.length) {
        $("body").animate({ backgroundColor: colors[i++ % colors.length] }, 200, cycleBackgroundColors);
    }
}
