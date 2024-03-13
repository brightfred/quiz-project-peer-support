const readline = require('readline');

// Creating interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Questions array with question and answer key-value pairs
const questions = [
  { question: 'What is 2 + 2?', option:["2","3","4","5"] ,answer: '4' },
  { question: 'What is the capital of New Zealand?',option:["2","3","4","5"] ,answer: 'Wellington' },
  { question: 'What year did the Titanic sink?', answer: '1912' },
];

const askQuestion = (question) => {
    return new Promise((resolve, reject) => {
      rl.question(question.question + ' ', (input) => {
        // Checking if the answer is correct
        if(input.trim().toLowerCase() === question.answer.trim().toLowerCase()){
          console.log('Correct!\n');
          score++;
        } else {
          console.log(`Wrong! The correct answer was ${question.answer}.\n`);
        }
        resolve();
      });
    });
  };
  
  const startQuiz = async () => {
    console.log('Welcome to the Quiz!\n');
  
    for (let i = 0; i < questions.length; i++) {
      await askQuestion(questions[i]);
    }
  
    console.log(`Quiz completed! Your score is ${score} out of ${questions.length}.`);
    rl.close();
  };
  
  startQuiz().catch(console.error);

