// Question class
class Question {
    constructor(description, choices, correctAnswerIndex) {
      this.description = description;
      this.choices = choices;
      this.correctAnswerIndex = correctAnswerIndex;
    }
  }
  
  // QuizGame class
  class QuizGame {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = {
        correct: 0,
        incorrect: 0,
      };
    }
  
    // Function to add a question to the quiz game
    addQuestion(description, choices, correctAnswerIndex) {
      const question = new Question(description, choices, correctAnswerIndex);
      this.questions.push(question);
    }
  
    // Function to display a random quiz question along with multiple-choice answers
    displayQuestion() {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      console.log(`Question ${this.currentQuestionIndex + 1}: ${currentQuestion.description}`);
      currentQuestion.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
      });
    }
  
    // Function to check the user's answer and provide feedback
    checkAnswer(answer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (answer === currentQuestion.choices[currentQuestion.correctAnswerIndex]) {
        console.log("Correct answer!");
        this.score.correct++;
      } else {
        console.log("Incorrect answer!");
        this.score.incorrect++;
      }
    }
  
    // Function to display the final score at the end of the quiz
    displayFinalScore() {
      console.log("Quiz completed!");
      console.log(`Correct answers: ${this.score.correct}`);
      console.log(`Incorrect answers: ${this.score.incorrect}`);
    }
  
    // Function to start the quiz game
    startQuiz() {
      console.log("Quiz started!");
      while (this.currentQuestionIndex < this.questions.length) {
        this.displayQuestion();
  
        const answer = prompt("Enter your answer (1, 2, 3, etc.):");
        this.checkAnswer(answer);
  
        this.currentQuestionIndex++;
      }
  
      this.displayFinalScore();
    }
  }
  
  // Usage example
  const quizGame = new QuizGame();
  
  // Add questions to the quiz game
  quizGame.addQuestion(
    "What is the capital of France?",
    ["Paris", "London", "Berlin"],
    0
  );
  quizGame.addQuestion(
    "What is the largest planet in our solar system?",
    ["Jupiter", "Saturn", "Earth"],
    0
  );
  quizGame.addQuestion(
    "Who painted the Mona Lisa?",
    ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
    0
  );
  
  // Start the quiz game
  quizGame.startQuiz();