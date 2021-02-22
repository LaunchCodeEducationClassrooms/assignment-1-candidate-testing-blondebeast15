const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let correct = 0; 
let questions = [
  "Who was the first American woman in space?",
  "True or false: 5000 meters = 5 kilometers.",
  "(5 + 3)/ 2 *1 0 = ?",
  "Given the array [8, 'Orbit', 'Trajectory', '45'],\nwhat entry is at index 2?",
  "What is the minimum crew size for the ISS?"
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [
  "", 
  "", 
  "", 
  "", 
  ""
];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("Enter your first and last name: ");
}

function askQuestion() {

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for(let i = 0; i < questions.length; i++){
    candidateAnswer = input.question(questions[i] + "\nYour answer: ");
    candidateAnswers[i] = candidateAnswer;
    console.log("Correct answer: " + correctAnswers[i]);
  }

}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
correct = 0;

for(let i = 0; i < questions.length; i++){
  if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
    correct+=1;
  }
}

let grade = (correct / questions.length) * 100;

return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("\nHello, " + candidateName + "!");

  askQuestion();

  let grade = gradeQuiz(this.candidateAnswers);

  console.log("\nOverall grade: " + grade + "%" + " (" + correct + " out of " + questions.length + " responses correct)");

  if (grade >= 80){
    console.log("Status: PASSED")
  } else {
    console.log("Status: FAILED")
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};