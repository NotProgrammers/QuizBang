var quizMode = 'REGISTRATION';

$(function () {
    var quiz = $.connection.quizHub;

    quiz.client.broadcastMessage = handleMessage;
    $(document).keypress(nextQuestion);
    $.connection.hub.start();
});

function nextQuestion() {
    window.quizMode = 'QUIZ';
    var questionContainer = new QuestionSelector().getNext();
    $('#answer').val(questionContainer.correct_answer);
    $('.centred-content').html(questionContainer.question);
}