# FootballAPIConexion

## API

Para este proyecto he usado una API llamada API-Football, la cual se encuentra disponible en Rapid API. Esta cuenta con datos sobre fútbol actualizados y numerosos y cuenta con 100 llamadas diarias de forma gratuita.

## WEB

La web cuenta con 2 campos a rellenar a modo de formulario, puedes escoger entre buscar equipos o Ligas de fútbol por su nombre, finalmente tras pulsar uno de los 2 botones aparecerá el resultado debajo con imágenes y una ficha técnica. Hay 2 métodos que se conectan con la API, uno con async-await y otro con promise, ambos se conectan y filtran solo los datos que se requieren del archivo JSON para mostrar en el html.

La parte que se muestra en el html tras la llamada es generada desde el propio JavaScript. Se usan try catch para capturar los errores y mostrar al usuario un mensaje en caso de error. Los elementos del HTML cuentan con unos estilos CSS personalizados, el código de JS cuenta con funciones arrow, y los archivos están separados en carpetas y cada uno cumple una función.

El resultado que se muestra siempre es el primero que la API filtra según el texto enviado desde el html, con lo cual en caso de no escribir el nombre de forma correcta o completo, puede que se muestre un resultado diferente o de un error de búsqueda. Por motivos de la API no todos los clubes y ligas cuentan con fotos de escudos y estadios, aunque habitualmente todos los datos e imágenes están presentes.

## Errores

Si buscas un nombre que no corresponde con nada que la API puede interpretar como resultado, se mostrará un mensaje de error en una ventana emergente, para indicar al usuario que no se han encontrado datos. Por ejemplo si escribes ferrari en clubes, se mostrará este error.
