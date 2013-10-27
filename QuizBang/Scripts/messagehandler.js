function handleMessage(from, message) {

    if (window.quizMode === 'REGISTRATION') {
        if ($('#' + from).length > 0) {
            $('#' + from).html(message);
        }
        else {
            $('#messageBox').append('<div id="' + from + '">' + message + '</div>');

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
            
            if ($('#messageBox div').length === $('.received').length) {
                alert(correctAnswer);
            }
        }
    }
}