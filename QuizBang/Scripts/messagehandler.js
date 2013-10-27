function handleMessage(from, message) {

    if (window.quizMode === 'REGISTRATION') {
        if ($('#' + from).length > 0) {
            $('#' + from + ' span').html(message);
        }
        else {
            $('#users').append('<div class="user" id="' + from + '"><span>' + message + '</span></div>');

            distributeUsers();
            if ($('.user').length > 1) {
                $("#waitingForPlayers").hide();
                $('#startInstructions').show();
            }
        }
    }
    else if (window.quizMode == 'QUIZ') {
        var answerValidAndIsFirstAttempt = (message.length < 2) && ($('#' + from + ' .received').length === 0);
        if (answerValidAndIsFirstAttempt) {
            $('#' + from).addClass('received');
           
            if (message.toUpperCase() !== $('#answer').val()) {
                $('#' + from).addClass('incorrect');
            }

            ShowAnswer();
        }
    }
}

function ShowAnswer() {
    if ($('.user').length === $('.received').length) {
        $("body").stop(true);
        $("body").animate({ backgroundColor: "#800080" }, 200);
        $(".user").delay(200).stop(true);
        $('.answerblock-' + $('#answer').val()).addClass("correct");

        // if no-one answers correctly, move to next question
        if ($('.incorrect').length !== $('.user').length) {
            $('.incorrect').animate({ opacity: 0 }, 1000, function () {
                $(this).remove();
                if ($(".incorrect:animated").length === 0)
                    distributeUsers();
            });
        }

        // give it 5 seconds before moving on
        $('#question-instruction').invisible();
        setTimeout(function () {
            $('.user').removeClass('incorrect');
            $('.answerblock-' + $('#answer').val()).removeClass("correct");

            nextQuestion();
        }, 5000);
    }
}