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
            
            var correctAnswer = $('#answer').val();
            if (message.toUpperCase() !== correctAnswer) {
                $('#' + from).addClass('incorrect');
            }
            
            // show correct answer if everyone has answered
            $("body").stop(true);
            $("body").animate({ backgroundColor: "#ADD8E6" }, 200);

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