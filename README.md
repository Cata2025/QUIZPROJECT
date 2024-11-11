Proyecto de Quiz Interactivo
Este proyecto es un cuestionario de conocimientos generales, diseñado como una aplicación web interactiva. 
El cuestionario obtiene las preguntas de la API de Open Trivia Database, permitiendo a los usuarios evaluar su conocimiento a través de diez preguntas seleccionadas de forma aleatoria. 
Este cuestionario cuenta con una interfaz sencilla de navegación, y almacena los puntajes previos de cada usuario en el almacenamiento local (Local Storage) para consulta posterior.

Incluye una pantalla de bienvenida, opciones de respuesta, retroalimentación inmediata, un historial de resultados y la visualización de puntajes previos en un gráfico.

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

Funciones

showWelcomeScreen: Muestra la pantalla de bienvenida y el gráfico de historial de resultados.
startQuiz: Inicializa las variables de estado y llama a la función para obtener preguntas de la API.
fetchQuestions: Realiza una solicitud a la API para obtener preguntas.
showQuestion: Presenta la pregunta actual y las opciones de respuesta en el DOM.
shuffleOptions: Mezcla las opciones de respuesta para evitar que la respuesta correcta esté en la misma posición.
checkAnswer: Verifica si la respuesta seleccionada es correcta, muestra retroalimentación y desactiva las opciones.
nextQuestion: Avanza a la siguiente pregunta.
showResults: Muestra el puntaje final y la opción de reiniciar el cuestionario.
saveResult: Guarda el puntaje en el historial de resultados en localStorage.
renderChart: Renderiza el gráfico de resultados usando Chart.js.
Requisitos Previos
Chart.js: Para la visualización de resultados en el gráfico de barras. Asegúrate de incluir Chart.js en tu proyecto.
Cómo Ejecutar el Proyecto
Incluye el código en un archivo HTML con soporte para JavaScript.
Asegúrate de tener acceso a la librería Chart.js para visualizar el historial de resultados.
Abre el archivo HTML en un navegador compatible.
Notas
Este proyecto utiliza localStorage para almacenar el historial de resultados, permitiendo que los datos persistan entre sesiones.
La API de preguntas devuelve preguntas en formato JSON, que luego son interpretadas y mostradas al usuario en el cuestionario.
