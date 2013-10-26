var questionGenerator = new QuestionGenerator();

function QuestionGenerator() {
    this.nextQuestion = function() {
        var questionIndex = Math.floor(Math.random() * questions.length) + 1;
        return questions[questionIndex];
    };
}

var questions = [
    {
        question: 'SignalR is a ...',
        answer1: 'Programming framework',
        answer2: 'Refreshing minty toothpaste',
        answer3: 'Ruby',
        answer4: 'C hash',
        correct_answer: 4
    },
    {
        question: 'Which of the following comic book characters can be found on a HackManchester pinball machine?',
        answer1: 'Superman',
        answer2: 'Wolverine',
        answer3: 'The Incredible Hulk',
        answer4: 'Robin',
        correct_answer: 2
    },
    {
        question: 'In which gallery at the Museum of Science and Industry will you find the Beyer-Garratt articulated steam locomotive?',
        answer1: 'The Age of Steam Gallery',
        answer2: 'The Rail Yard',
        answer3: 'The Revolution Manchester Gallery',
        answer4: 'The Power Hall',
        correct_answer: 4
    },
    {
        question: 'How many packs of Refreshing Wipes did you get in your HackManchester comfort kit?',
        answer1: '1',
        answer2: '2',
        answer3: '3',
        answer4: '4',
        correct_answer: 2
    },
    {
        question: 'Bell End is a small town south of which city?',
        answer1: 'Nottingham',
        answer2: 'Birmingham',
        answer3: 'London',
        answer4: 'Exeter',
        correct_answer: 2
    },
    {
        question: 'Who took over when Lenin died?',
        answer1: 'Starr',
        answer2: 'Stalin',
        answer3: 'Harrison',
        answer4: 'McCartney',
        correct_answer: 2
    },
    {
        question: 'What is the first letter of the English alphabet?',
        answer1: 'C',
        answer2: 'D',
        answer3: 'A',
        answer4: 'B',
        correct_answer: 3
    },
    {
        question: 'As I was going to St. Ives,<br />'
                    + 'I met a man with seven wives,<br />'
                    + 'Each wife had seven sacks,<br />'
                    + 'Each sack had seven cats,<br />'
                    + 'Each cat had seven kits:<br />'
                    + 'Kits, cats, sacks, and wives,<br />'
                    + 'How many were there going to St. Ives?',
        answer1: '1',
        answer2: '1542',
        answer3: '2802',
        answer4: 'Jeremy Irons',
        correct_answer: 1
    },
    {
        question: 'What part of the body does a turtle use to breathe?',
        answer1: 'Proboscus',
        answer2: 'Shell lining',
        answer3: 'Nasal cavity',
        answer4: 'Anus',
        correct_answer: 4 
    },
    {
        question: 'The Mancherster City Council motto is Concilio et Labore. What does it mean?',
        answer1: 'Four lighters for a pound',
        answer2: 'Pride in Battle',
        answer3: 'By wisdom and effort',
        answer4: 'Look mate, I don\'t make the rules. No trainers.',
        correct_answer: 3
    },
    {
        question: 'Nottingham is well known for its violent gangs, but who was tasked with tackling legendary 12th century criminals Robin Hood and his Merry Men?',
        answer1: 'Nottinghamshire Constabulary',
        answer2: 'Operation Trident',
        answer3: 'The Sheriff of Nottingham',
        answer4: 'Vigilante Justice',
        correct_answer: 3
    },
    {
        question: 'Which of the following is Coronation Street\'s longest serving character?',
        answer1: 'Ken Barlow',
        answer2: 'Samir Rashid',
        answer3: 'Vera Duckworth',
        answer4: 'Fred West',
        correct_answer: 3
    },
    {
        question: 'A sphinctersayswhat?',
        answer1: 'What?',
        answer2: 'Who?',
        answer3: 'Eh?',
        answer4: 'You want me to say what right? Like, I don\'t get it?',
        correct_answer: 4
    },
    {
        question: 'Which of the following was the Happy Mondays\' highest charting UK single?',
        answer1: 'Maaaaaaaaate',
        answer2: 'Step On',
        answer3: 'Bob\'s Yer Uncle',
        answer4: 'What Makes You Beautiful',
        correct_answer: 2
    },
    {
        question: 'What was the first song ever sung by a computer?',
        answer1: 'Daisy Bell',
        answer2: 'Bangarang feat. Sirah',
        answer3: 'Mary Had a Little Lamb',
        answer4: 'Still Alive',
        correct_answer: 1
    }
]
/*
,
{
    question: '?',
    answer1: 'C',
answer2: 'D',
answer3: 'A',
answer4: 'B',
correct_answer: 3
}
*/
