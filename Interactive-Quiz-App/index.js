const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Saturn", "Jupiter"],
      answer: "Jupiter"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["J.K. Rowling", "Harper Lee", "Stephen King", "Charles Dickens"],
      answer: "Harper Lee"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const nextButton = document.getElementById("next-btn");
  const resultText = document.getElementById("result");
  
  // Function to load question and options
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement("li");
      optionElement.innerText = option;
      optionElement.setAttribute("data-index", index);
      optionsContainer.appendChild(optionElement);
      optionElement.addEventListener("click", selectOption);
    });
    nextButton.style.display = "none";
  }
  
  // Function to handle option selection
  function selectOption(event) {
    const selectedOption = event.target.innerText;
    const selectedIndex = event.target.getAttribute("data-index");
    const correctAnswer = quizData[currentQuestion].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
      resultText.innerText = "Correct!";
    } else {
      resultText.innerText = "Wrong!";
    }
  
    optionsContainer.querySelectorAll("li").forEach(option => {
      option.removeEventListener("click", selectOption);
      if (option.innerText === correctAnswer) {
        option.style.backgroundColor = "Green";
      } else {
        option.style.backgroundColor = "Red";
      }
    });
  
    nextButton.style.display = "block";
  }
  
  // Function to load next question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      resultText.innerText = "";
    } else {
      showResult();
    }
  }
  
  // Function to show final result
  function showResult() {
    questionContainer.innerText = "";
    optionsContainer.innerHTML = "";
    resultText.innerText = `You scored ${score} out of ${quizData.length}!`;
    nextButton.style.display = "none";
  }
  
  // Initial load
  loadQuestion();
  
  // Event listener for next button
  nextButton.addEventListener("click", nextQuestion);