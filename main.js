const apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalAttempts = 0;

let resultsHistory = JSON.parse(localStorage.getItem("quizResults")) || [];

function showWelcomeScreen() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = `
        <h1 class="text-center">Bienvenido al Quiz</h1>
        <p class="text-center">Pulsa "Iniciar" para comenzar el cuestionario</p>
        <button class="btn btn-primary start" onclick="startQuiz()">Iniciar</button>
        <div id="chart-container" class="my-4">
            <canvas id="resultChart"></canvas>
        </div>
    `;
    renderChart();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    totalAttempts = 0;
    fetchQuestions();
}

// Obtiene las preguntas de la API
async function fetchQuestions() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    questions = data.results;
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('app');
    questionContainer.innerHTML = `
        <h2>Pregunta ${currentQuestionIndex + 1} de ${questions.length}</h2>
        <h3>${questionData.question}</h3>
        <div id="options">
            ${shuffleOptions([...questionData.incorrect_answers, questionData.correct_answer])
                .map(option => `<button class="btn btn-outline-primary option" onclick="checkAnswer('${option}')">${option}</button>`)
                .join('')}
        </div>
        <p id="feedback" class="mt-3 text-center"></p>
        <button class="btn btn-success next" onclick="nextQuestion()" style="display:none;">Siguiente</button>
        <p class="mt-3">Respuestas correctas: ${score}</p>
    `;
}

// Mezcla las opciones de respuesta para que la correcta no esté siempre en la misma posición
function shuffleOptions(options) {
    return options.sort(() => Math.random() - 0.5);
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    const feedback = document.getElementById('feedback');

    if (selectedAnswer === correctAnswer) {
        score++;
        feedback.innerHTML = `<span class="text-success">¡Correcto!</span>`;
    } else {
        feedback.innerHTML = `<span class="text-danger">Incorrecto. La respuesta correcta era: ${correctAnswer}</span>`;
    }

    totalAttempts++;
    document.querySelectorAll(".option").forEach(button => button.disabled = true);
    document.querySelector(".next").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const questionContainer = document.getElementById('app');
    questionContainer.innerHTML = `
        <h2 class="result">Resultados</h2>
        <p class="result">Respuestas correctas: ${score} de ${questions.length}</p>
        <p>Intentos realizados: ${totalAttempts}</p>
        <button class="btn btn-primary start" onclick="startQuiz()">Intentar de nuevo</button>
    `;
    saveResult(score);
    renderChart();
}

function saveResult(score) {
    resultsHistory.push(score);
    localStorage.setItem("quizResults", JSON.stringify(resultsHistory));
}

function renderChart() {
    const ctx = document.getElementById('resultChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: resultsHistory.map((_, index) => `Intento ${index + 1}`),
            datasets: [{
                label: 'Resultados Anteriores',
                data: resultsHistory,
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: '#007bff',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: questions.length
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}









