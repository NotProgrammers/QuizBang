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
    $('#answer-a').html(question.answer1);
    $('#answer-b').html(question.answer2);
    $('#answer-c').html(question.answer3);
    $('#answer-d').html(question.answer4);
}