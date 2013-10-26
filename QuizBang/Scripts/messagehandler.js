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
        $('#' + from).addClass('received');
    } 
}