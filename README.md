Quiz SPA


Proyecto de Quiz Interactivo
Este proyecto es un cuestionario de conocimientos generales, diseñado como una aplicación web interactiva. 
El cuestionario obtiene las preguntas de la API de Open Trivia Database, permitiendo a los usuarios evaluar su conocimiento a través de diez preguntas seleccionadas de forma aleatoria. 
Este cuestionario cuenta con una interfaz sencilla de navegación, y almacena los puntajes previos de cada usuario en el almacenamiento local (Local Storage) para consulta posterior.



Incluye una pantalla de bienvenida, opciones de respuesta, retroalimentación inmediata, un historial de resultados y la visualización de puntajes previos en un gráfico.


<img width="710" alt="image" src="https://github.com/user-attachments/assets/db771ccc-4a63-473b-9d66-20eee1b3228f">



Funcionalidades

Pantalla de Bienvenida: La aplicación inicia mostrando un mensaje de bienvenida y un botón para comenzar el cuestionario. 

También se presenta un gráfico que muestra el historial de puntajes anteriores.

Obtención de Preguntas desde la API: Al iniciar el cuestionario, la aplicación solicita un conjunto de 10 preguntas a la API de Open Trivia Database.

Estas preguntas incluyen una correcta y varias opciones incorrectas.

Presentación de Preguntas: Cada pregunta muestra el texto de la misma y una lista de opciones aleatorias. 

Las opciones se muestran en botones que permiten al usuario seleccionar una sola respuesta.

Verificación de Respuestas y Retroalimentación: Al elegir la respuesta, la aplicación muestra si es correcta o incorrecta y desactiva los botones de opciones para evitar múltiples intentos. 

La respuesta correcta se muestra si el usuario falla.

Navegación entre Preguntas: Después de responder, se muestra un botón "Siguiente" que permite al usuario avanzar a la siguiente pregunta.

Pantalla de Resultados: Al completar el cuestionario, se muestra una pantalla con el puntaje del usuario, el número de intentos y un botón para reiniciar el cuestionario.

Almacenamiento del Historial de Resultados: Los resultados se guardan en el localStorage para permitir que el usuario vea su historial de puntajes en sesiones futuras.

Gráfico de Resultados: Utilizando Chart.js, la aplicación muestra un gráfico de barras que ilustra los puntajes de los intentos previos.

Código

Variables Principales
apiUrl: URL de la API de preguntas.
questions: Almacena las preguntas recibidas de la API.
currentQuestionIndex: Índice de la pregunta actual.
score: Puntaje de respuestas correctas.
totalAttempts: Número total de intentos realizados.
resultsHistory: Historial de puntajes almacenado en localStorage.


Requisitos:

Antes de ejecutar la aplicación, asegúrate de contar con lo siguiente:

Un navegador web moderno (por ejemplo, Chrome, Firefox)
Conocimientos básicos de HTML, CSS y JavaScript
Tecnologías Utilizadas
HTML: Estructura básica de la aplicación.
CSS: Estilos para la interfaz de usuario.
JavaScript: Lógica de la aplicación y manejo de eventos.
Axios: Para realizar solicitudes HTTP a la API.
Bootstrap: Para estilos y diseño responsivo.

Explicación del Código:


Obteniendo Preguntas: La función getQuestions obtiene preguntas de trivia de la API.
Lógica del Juego: Las funciones manejan el inicio del quiz, la presentación de preguntas, la selección de respuestas y la visualización de resultados.

Resultados:
Las respuestas correctas se muestran en color verde y las incorrectas en color rojo.
La sección Results muestra una gráfica de barras con los puntajes de intentos previos guardados en localStorage.

Librerías y tecnologías usadas:
Axios para realizar las peticiones HTTP.
Bootstrap 5.3 para la interfaz de usuario.
Chart.js para mostrar las gráficas de estadísticas.

Instalación
No requiere instalación previa, unicamente abre el archivo index.html en un navegador para ejecutar la presente aplicación.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

Descripción
Quiz SPA es una aplicación web que permite a los usuarios participar en cuestionarios de trivia de manera dinámica y sencilla. Los usuarios responden una serie de preguntas de opción múltiple, reciben retroalimentación instantánea sobre sus respuestas y pueden ver un historial de sus intentos en un gráfico de barras, gracias al uso de localStorage y Chart.js para almacenar y visualizar los resultados.

Instalación
Clona este repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/usuario/quiz-spa.git
Asegúrate de tener un servidor local para ejecutar el archivo HTML, o simplemente abre el archivo index.html en tu navegador.

No se requieren dependencias adicionales ya que las librerías necesarias (Bootstrap y Chart.js) se cargan desde un CDN.

Uso
Abre el archivo index.html en tu navegador.
Se mostrará una pantalla de bienvenida que invita al usuario a iniciar el cuestionario.
Haz clic en Iniciar para comenzar.
Responde las preguntas haciendo clic en las opciones de respuesta. La aplicación te dará retroalimentación inmediata para cada pregunta.
Al finalizar, se mostrarán los resultados junto con la opción de reiniciar el cuestionario.
Puedes revisar el gráfico de barras que muestra los resultados de intentos anteriores.
Documentación del Código
Estructura del Código
HTML (index.html): Define la estructura básica de la página, incluyendo contenedores para el contenido dinámico y enlaces a Bootstrap y Chart.js.
JavaScript (main.js):
Constantes y Variables Principales:
apiUrl: URL de la API para obtener preguntas de trivia.
questions, currentQuestionIndex, score, totalAttempts: Variables de estado para gestionar el cuestionario.
resultsHistory: Array para almacenar los resultados de los intentos pasados, guardado en localStorage.
Funciones Principales:
showWelcomeScreen(): Muestra la pantalla de bienvenida y renderiza el gráfico de resultados anteriores.
startQuiz(): Resetea las variables del cuestionario y obtiene nuevas preguntas de la API.
fetchQuestions(): Llama a la API para obtener un conjunto de preguntas y las almacena en questions.
showQuestion(): Renderiza una pregunta en el DOM y genera las opciones de respuesta en orden aleatorio.
checkAnswer(selectedAnswer): Verifica la respuesta seleccionada por el usuario y actualiza el marcador.
nextQuestion(): Muestra la siguiente pregunta o los resultados finales.
showResults(): Muestra la pantalla de resultados, guarda el puntaje en resultsHistory, y actualiza el gráfico.
renderChart(): Utiliza Chart.js para mostrar un gráfico de barras con los resultados de intentos anteriores.
Ejemplos de Código
javascript
Copiar código
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
En este ejemplo, la función checkAnswer compara la respuesta seleccionada por el usuario con la correcta. Si es correcta, incrementa el puntaje y muestra un mensaje positivo; si es incorrecta, muestra la respuesta correcta. Esta retroalimentación inmediata mejora la experiencia de usuario en la aplicación.

Contribuciones
Si deseas contribuir a Quiz SPA, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit de ellos (git commit -m 'Agrega nueva funcionalidad').
Sube tus cambios a tu fork (git push origin feature/nueva-funcionalidad).
Abre un Pull Request en el repositorio original.
Licencia
Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Autores y Agradecimientos
[Tu Nombre] - Desarrollador principal de la aplicación.
Agradecimientos a Open Trivia DB API por proporcionar las preguntas de trivia, y a los equipos de Bootstrap y Chart.js por las herramientas de diseño y gráficos.
Este README proporciona una guía clara y completa de la aplicación Quiz SPA. Cubre la instalación, el uso, la estructura de código y las contribuciones, permitiendo que cualquier usuario o desarrollador pueda comprender y trabajar con el proyecto sin dificultad.
