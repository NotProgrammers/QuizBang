function handleMessage(from, message) {

    if (window.quizMode === 'REGISTRATION') {
        if ($('#' + from).length > 0) {
            $('#' + from).html(message);
        }
        else {
            $('#messageBox').append('<div id="' + from + '"><span>' + message + '</span></div>');

            distributeUsers();
            if ($('#messageBox div').length > 1) {
                $('#startInstructions').show();
            }
        }
    }
    else if (window.quizMode == 'QUIZ') {
        if (message.length < 2) {
            $('#' + from).addClass('received');
            var correctAnswer = $('#answer').val();
            if (message.toUpperCase() !== correctAnswer) {
                $('#' + from).addClass('incorrect');
            }
            var messageBoxDivs = $('#messageBox div').length;
            var receivedDivs = $('.received').length;
            if (messageBoxDivs === receivedDivs) {
                $('.answerblock-' + correctAnswer).addClass("correct");
            }
        }
    }
}