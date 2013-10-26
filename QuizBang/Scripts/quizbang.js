$(function () {
    var quiz = $.connection.quizHub;
    var quizMode = 'REGISTRATION';

    quiz.client.broadcastMessage = handleMessage;
    $(document).keypress(startQuiz);
    $.connection.hub.start();
});