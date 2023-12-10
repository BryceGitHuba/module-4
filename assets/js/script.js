// Sample questions (replace with your own questions)
const questions = [
    {
      question: "What is the main purpose of the 'public static void main(String[] args)' method in Java?",
      options: [
        "To define the main entry point for a Java program",
        "To declare a new class in Java",
        "To print 'Hello, World!' to the console",
        "To create an array in Java"
      ],
      correctAnswer: "To define the main entry point for a Java program",
    },
    {
      question: "What is the correct syntax for declaring a variable in Java?",
      options: [
        "var x = 10;",
        "int x = 10;",
        "String x = 'Hello';",
        "float x = 3.14;"
      ],
      correctAnswer: "int x = 10;",
    },
    {
      question: "Which of the following is not a valid Java keyword?",
      options: [
        "class",
        "interface",
        "function",
        "enum"
      ],
      correctAnswer: "function",
    },
    // Add more Java-related questions as needed
  ];
  
  
  const startBtn = document.getElementById("start-btn");
  const quizScreen = document.getElementById("quiz-screen");
  const endScreen = document.getElementById("end-screen");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const finalScoreElement = document.getElementById("final-score");
  const submitScoreBtn = document.getElementById("submit-score");
  const initialsInput = document.getElementById("initials");
  
  let currentQuestionIndex = 0;
  let timer;
  let score = 0;
  let maxTime = 60;
  
  startBtn.addEventListener("click", startQuiz);
  submitScoreBtn.addEventListener("click", saveScore);
  
  function startQuiz() {
    startBtn.parentElement.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
  
    // Initialize the timer display
    const timerElement = document.getElementById("timer");
    timerElement.textContent = maxTime;
  
    timer = setInterval(updateTimer, 1000);
  }
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      score += 10; // Adjust score as needed
    } else {
      // Subtract time for incorrect answer
      maxTime -= 10; // Adjust time penalty as needed
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    clearInterval(timer);
    quizScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    finalScoreElement.textContent = score;
  }
  
  function updateTimer() {
    const timerElement = document.getElementById("timer");
    if (maxTime <= 0) {
      endQuiz();
    } else {
      maxTime--;
      timerElement.textContent = maxTime; // Update the timer display
    }
  }
  
  function saveScore() {
    const initials = initialsInput.value.trim();
    if (initials !== "") {
      // Save the score and initials to your desired location (e.g., localStorage)
      alert(`Score saved! ${initials}: ${score}`);
    } else {
      alert("Please enter your initials.");
    }
  }
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById("feedback"); // Add this line
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score += 10; // Adjust score as needed
      feedbackElement.textContent = "Correct!"; // Display "Correct!"
    } else {
      // Subtract time for incorrect answer
      maxTime -= 10; // Adjust time penalty as needed
      feedbackElement.textContent = "Wrong!"; // Display "Wrong!"
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }