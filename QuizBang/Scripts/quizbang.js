var quizMode = 'REGISTRATION';

$(function () {
    var quiz = $.connection.quizHub;

    quiz.client.broadcastMessage = handleMessage;
    $(document).keypress(nextQuestion);
    $.connection.hub.start();
});

function nextQuestion() {
    window.quizMode = 'QUIZ';
    $('#messageBox div').removeClass('received');
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