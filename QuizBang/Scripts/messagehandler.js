﻿function handleMessage(from, message) {

    if (window.quizMode === 'REGISTRATION') {
        if ($('#' + from).length > 0) {
            $('#' + from).html(message);
        }
        else {
            $('body').append('<div class="user" id="' + from + '"><span>' + message + '</span></div>');

            distributeUsers();
            if ($('.user').length > 1) {
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
            
            // show correct answer if everyone has answered
            var numberOfUsers = $('.user').length;
            var receivedDivs = $('.received').length;
            
            if (numberOfUsers === receivedDivs) {
                $('.answerblock-' + correctAnswer).addClass("correct");
                
                // give it 5 seconds before moving on
                setTimeout(function () {
                    $('.answerblock-' + correctAnswer).removeClass("correct");
                    nextQuestion();
                }, 5000);
            }
        }
    }
}