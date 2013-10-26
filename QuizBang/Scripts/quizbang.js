var quizMode = 'REGISTRATION';

$(function () {
    var quiz = $.connection.quizHub;

    quiz.client.broadcastMessage = handleMessage;
    $(document).keypress(startQuiz);
    $.connection.hub.start();
});