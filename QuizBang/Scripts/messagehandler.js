function handleMessage(from, message) {

    if (window.quizMode === 'REGISTRATION') {
        if ($('#' + from).length > 0) {
            $('#' + from).html(message);
        }
        else {
            $('#messageBox').append('<li id="' + from + '">' + message + '</li>');

            if ($('#messageBox li').length > 1) {
                $('#startInstructions').show();
            }
        }
    }
    else if (window.quizMode == 'QUIZ') {
        // record answer
    } else {
        alert('boom');
    }
}

function startQuiz() {
    window.quizMode = 'QUIZ';
    $('.centred-content').html(new QuestionSelector().getNext().question);
}