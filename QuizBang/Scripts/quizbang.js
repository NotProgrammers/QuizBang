var quizMode = 'REGISTRATION';

$(function () {
    var quiz = $.connection.quizHub;

    quiz.client.broadcastMessage = handleMessage;
    $(document).keypress(nextQuestion);
    $.connection.hub.start();
});

function nextQuestion() {
    window.quizMode = 'QUIZ';
    $('.centred-content').html(new QuestionSelector().getNext().question);
}