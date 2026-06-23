function printQuiz(questions) {
    questions.forEach(question => {

        console.log(question.description);

        question.display();

        console.log('');
    });

}


class Question {  // Make the base class behave like an interface

    constructor() {
        if (this.display === Question.prototype.display) {
            throw new Error('Classes extending Question must implement display()');
        }
    }


    display() {
        throw new Error('display() must be implemented.');
    }

}


class BooleanQuestion extends Question {

    constructor(description) {
        super();
        this.description = description;
    }


    display() {
        console.log('1. True');
        console.log('2. False');
    }

}


class TextQuestion extends Question {

    constructor(description) {
        super();
        this.description = description;
    }


    display() {
        console.log('Answer: _________________');
    }

}


class MultipleChoiceQuestion extends Question {

    constructor(description, options) {
        super();
        this.description = description;
        this.options = options;
    }


    display() {

        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

    }

}


class InvalidQuestion extends Question {

}


// Test

const questions = [
    new BooleanQuestion('This course is useful.'),
    new MultipleChoiceQuestion('What is your favorite language?', ['CSS', 'HTML', 'JS', 'Python']),
    new TextQuestion('Describe your favorite JS feature.')
];

printQuiz(questions);


// Test interface error

// const invalidQuestion = new InvalidQuestion();