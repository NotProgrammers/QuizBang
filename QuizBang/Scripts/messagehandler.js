function handleMessage(from, message) {

    if (window.quizMode === 'REGISTRATION') {
        if ($('#' + from).length > 0) {
            $('#' + from + ' span').html(message);
        }
        else {
            $('body').prepend('<div class="user" id="' + from + '"><span>' + message + '</span></div>');

            distributeUsers();
            if ($('.user').length > 1) {
                $('#waitingForPlayers').hide();
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
            ShowAnswers();
            
            // show correct answer if everyone has answered
            var numberOfUsers = $('.user').length;
            var usersThatHaveAnswered = $('.received').length;
            
            if (numberOfUsers === usersThatHaveAnswered) {
                $('.answerblock-' + correctAnswer).addClass("correct");
                
                // if no-one answers correctly, move to next question
                if ($('.incorrect').length !== numberOfUsers) {
                    $('.incorrect').animate({ opacity: 0 }, 1000, function () {
                        $(this).remove();
                        if ($(".incorrect:animated").length === 0)
                            distributeUsers();
                    });
                }
                
                // give it 5 seconds before moving on
                setTimeout(function () {
                    $('.user').removeClass('incorrect');
                    $('.answerblock-' + correctAnswer).removeClass("correct");
                    
                    nextQuestion();
                }, 5000);
            }
        }
    }
}

function ShowAnswers() {
    // show correct answer if everyone has answered
    var numberOfUsers = $('.user').length;
    var usersThatHaveAnswered = $('.received').length;

    if (numberOfUsers === usersThatHaveAnswered) {
        $('.answerblock-' + $('#answer').val()).addClass("correct");
        $('#question-instruction').invisible();
        // if no-one answers correctly, move to next question
        if ($('.incorrect').length !== numberOfUsers) {
            $('.incorrect').animate({ opacity: 0 }, 1000, function () {
                $(this).remove();
                if ($(".incorrect:animated").length === 0)
                    distributeUsers();
            });
        }

        // give it 5 seconds before moving on
        setTimeout(function () {
            $('.answerblock-' + $('#answer').val()).removeClass("correct");

            nextQuestion();
        }, 5000);
    }
}