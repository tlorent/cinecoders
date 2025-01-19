/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  currentScore: 0,
  // the questions in the quiz
  questions: [
    {
      text:
        'What is the name of the spaceship in Star Wars piloted by Han Solo?',
      answers: {
        a: 'Star Destroyer',
        b: 'Millennium Falcon',
        c: 'X-Wing',
        d: 'Solar Sailor',
      },
      correctAnswerIndex: 1,
    },
    {
      text: 'Which of these actors below did not play Spider Man?',
      answers: {
        a: 'Andrew Garfield',
        b: 'Tom Holland',
        c: 'Tobey Maguire',
        d: 'Henry Cavill',
      },
      correctAnswerIndex: 3,
    },
    {
      text:
        'In the Harry Potter series, what house does Draco Malfoy belong to?',
      answers: {
        a: 'Slytherin',
        b: 'Hufflepuff',
        c: 'Gryffindor',
        d: 'Ravenclaw',
      },
      correctAnswerIndex: 0,
    },
    {
      text:
        'Who directed movies like Royal Tenenbaums, Grand Budapest Hotel, and the Moonrise Kingdom?',
      answers: {
        a: 'Sofia Coppola',
        b: 'Paul Thomas Anderson',
        c: 'Wes Anderson',
        d: 'Yorgos Lanthimos',
      },
      correctAnswerIndex: 2,
    },
    {
      text: 'What was the first feature-length animated movie ever released?',
      answers: {
        a: 'Cinderella',
        b: 'Snow White and the Seven Dwarfs',
        c: 'Fantasia',
        d: 'Pinocchio',
      },
      correctAnswerIndex: 1,
    },
    {
      text:
        'In The Shining, what is the name of the hotel where the story takes place?',
      answers: {
        a: 'The Overlook Hotel',
        b: 'The Bates Motel',
        c: 'The Hotel Cortez',
        d: 'The Grand Budapest Hotel',
      },
      correctAnswerIndex: 0,
    },
    {
      text:
        'Which was the first anime to win the Academy Award for Best Animated Feature?',
      answers: {
        a: 'Akira',
        b: 'Ghost in the Shell',
        c: 'Grave of the Fireflies',
        d: 'Spirited Away',
      },
      correctAnswerIndex: 3,
    },
    {
      text: "Which of these directors has won the Palme d'Or twice?",
      answers: {
        a: 'Jane Campion',
        b: 'Ken Loach',
        c: 'Pedro Almodovar',
        d: 'Ingmar Bergman',
      },
      correctAnswerIndex: 1,
    },
    {
      text: 'Which film won the Academy Award for Best Picture in 1995?',
      answers: {
        a: 'Pulp Fiction',
        b: 'The Shawshank Redemption',
        c: 'Forrest Gump',
        d: 'Four Weddings and a Funeral',
      },
      correctAnswerIndex: 2,
    },
    {
      text: 'Which actress played the leading role in the film Amélie (2001)?',
      answers: {
        a: 'Audrey Tautou',
        b: 'Marion Cotillard',
        c: 'Irène Jacob',
        d: 'Juliette Binoche',
      },
      correctAnswerIndex: 0,
    },
  ],
};

export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));
export const originalQuizData = deepCopy(quizData);
