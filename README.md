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


