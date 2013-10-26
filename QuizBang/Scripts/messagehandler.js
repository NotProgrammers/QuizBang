function handleMessage(from, message) {

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

function startQuiz() {
    window.quizMode = 'QUIZ';
    $('.centred-content').html(new QuestionSelector().getNext().question);
}