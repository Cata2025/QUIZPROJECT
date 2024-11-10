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




