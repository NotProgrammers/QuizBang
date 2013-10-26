function QuestionSelector() {
    this.getNext = function() {
        if (questions.length === 0) {
            throw ('No more questions');
        }
        var questionIndex = Math.floor(Math.random() * questions.length);
        var question = questions[questionIndex];
        questions.splice(questionIndex, 1);
        return question;
    };
}

var questions = [
    {
        question: 'SignalR is a ...',
        answerA: 'Programming framework',
        answerB: 'Refreshing minty toothpaste',
        answerC: 'Ruby',
        answerD: 'C hash',
        correct_answer: 'D'
    },
    {
        question: 'Which of the following comic book characters can be found on a HackManchester pinball machine?',
        answerA: 'Superman',
        answerB: 'Wolverine',
        answerC: 'The Incredible Hulk',
        answerD: 'Robin',
        correct_answer: 'B'
    },
    {
        question: 'In which gallery at the Museum of Science and Industry will you find the Beyer-Garratt articulated steam locomotive?',
        answerA: 'The Age of Steam Gallery',
        answerB: 'The Rail Yard',
        answerC: 'The Revolution Manchester Gallery',
        answerD: 'The Power Hall',
        correct_answer: 'D'
    },
    {
        question: 'How many packs of Refreshing Wipes did you get in your HackManchester comfort kit?',
        answerA: '1',
        answerB: '2',
        answerC: '3',
        answerD: '4',
        correct_answer: 'B'
    },
    {
        question: 'Bell End is a small town south of which city?',
        answerA: 'Nottingham',
        answerB: 'Birmingham',
        answerC: 'London',
        answerD: 'Exeter',
        correct_answer: 'B'
    },
    {
        question: 'Who took over when Lenin died?',
        answerA: 'Starr',
        answerB: 'Stalin',
        answerC: 'Harrison',
        answerD: 'McCartney',
        correct_answer: 'B'
    },
    {
        question: 'What is the first letter of the English alphabet?',
        answerA: 'C',
        answerB: 'D',
        answerC: 'A',
        answerD: 'B',
        correct_answer: 'C'
    },
    {
        question: 'As I was going to St. Ives,<br />'
            + 'I met a man with seven wives,<br />'
            + 'Each wife had seven sacks,<br />'
            + 'Each sack had seven cats,<br />'
            + 'Each cat had seven kits:<br />'
            + 'Kits, cats, sacks, and wives,<br />'
            + 'How many were there going to St. Ives?',
        answerA: '1',
        answerB: '1542',
        answerC: '2802',
        answerD: 'Jeremy Irons',
        correct_answer: 'A'
    },
    {
        question: 'What part of the body does a turtle use to breathe?',
        answerA: 'Proboscus',
        answerB: 'Shell lining',
        answerC: 'Nasal cavity',
        answerD: 'Anus',
        correct_answer: 'D'
    },
    {
        question: 'The Mancherster City Council motto is Concilio et Labore. What does it mean?',
        answerA: 'Four lighters for a pound',
        answerB: 'Pride in Battle',
        answerC: 'By wisdom and effort',
        answerD: 'Look mate, I don\'t make the rules. No trainers.',
        correct_answer: 'C'
    },
    {
        question: 'Nottingham is well known for its violent gangs, but who was tasked with tackling legendary 12th century criminals Robin Hood and his Merry Men?',
        answerA: 'Nottinghamshire Constabulary',
        answerB: 'Operation Trident',
        answerC: 'The Sheriff of Nottingham',
        answerD: 'Vigilante Justice',
        correct_answer: 'C'
    },
    {
        question: 'Which of the following is Coronation Street\'s longest serving character?',
        answerA: 'Ken Barlow',
        answerB: 'Samir Rashid',
        answerC: 'Vera Duckworth',
        answerD: 'Fred West',
        correct_answer: 'C'
    },
    {
        question: 'A sphinctersayswhat?',
        answerA: 'What?',
        answerB: 'Who?',
        answerC: 'Eh?',
        answerD: 'You want me to say \'what\' right? Like, I don\'t get it?',
        correct_answer: 'D'
    },
    {
        question: 'Which of the following was the Happy Mondays\' highest charting UK single?',
        answerA: 'Maaaaaaaaate',
        answerB: 'Step On',
        answerC: 'Bob\'s Yer Uncle',
        answerD: 'What Makes You Beautiful',
        correct_answer: 'B'
    },
    {
        question: 'What was the first song ever sung by a computer?',
        answerA: 'Daisy Bell',
        answerB: 'Bangarang feat. Sirah',
        answerC: 'Mary Had a Little Lamb',
        answerD: 'Still Alive',
        correct_answer: 'A'
    }
];
