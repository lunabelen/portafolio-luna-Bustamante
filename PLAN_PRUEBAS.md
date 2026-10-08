# Plan de pruebas

Para revisar el funcionamiento del portafolio se realizaron pruebas unitarias utilizando Jasmine y Karma.

El objetivo fue comprobar que los componentes principales se mostraran correctamente y que respondieran a las acciones del usuario.

## Pruebas realizadas

### ContactSection

Se revisó:

- que aparezca la sección de contacto;
- que existan los campos nombre, correo y mensaje;
- que al enviar el formulario aparezca el mensaje de confirmación.

Resultado esperado: el formulario debe mostrarse correctamente y responder al evento de envío.

Resultado obtenido: pruebas aprobadas.

### ProjectCard

Se revisó:

- que aparezca el título del proyecto;
- que aparezca la descripción;
- que se muestren las tecnologías utilizadas;
- que la imagen tenga texto alternativo;
- que exista el enlace para ver el proyecto.

Resultado esperado: la tarjeta debe mostrar correctamente la información recibida mediante props.

Resultado obtenido: pruebas aprobadas.

### NewsCard

Se revisó:

- que aparezca el título de la noticia;
- que se muestre la fecha;
- que aparezca el contenido;
- que se muestre una imagen cuando el componente recibe una imagen.

Resultado esperado: la tarjeta debe mostrar correctamente la información recibida.

Resultado obtenido: pruebas aprobadas.

## Resultado general

Se ejecutaron 10 pruebas unitarias.

Resultado:

10 pruebas aprobadas.

## Cobertura obtenida

- Statements: 76.47%
- Branches: 70%
- Functions: 60%
- Lines: 76.47%

La cobertura permite revisar qué parte del código fue ejecutada durante las pruebas.
## Datos simulados

En la prueba de NewsCard utilicé datos simulados (mock) para representar una noticia y comprobar que el componente mostrara correctamente el título, la fecha, el contenido y la imagen.