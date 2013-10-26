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
        alert(from + ' said ' + message);
    } else {
        throw ('Unknown quiz mode');
    }
}