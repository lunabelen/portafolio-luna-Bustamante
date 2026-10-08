## Organización del proyecto

El proyecto está separado en componentes para mantener el código más ordenado.

```text
src/
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
│
├── data/
│   └── noticias.json
│
├── pages/
│
├── App.js
├── App.css
├── App.test.js
└── index.js
```

---

## Cómo abrir el proyecto

Si el proyecto se abre por primera vez en otro computador, primero se instalan los archivos necesarios con:

```bash
npm install
```

Después se inicia el proyecto con:

```bash
npm start
```

La página se abrirá en el navegador.

---

## Pruebas

Para revisar que los componentes principales del portafolio funcionen correctamente, utilicé Jasmine y Karma.

Las pruebas se ejecutan con:

```bash
npx karma start karma.conf.js
```

Se realizaron pruebas para revisar:

- el formulario de contacto;
- los eventos y cambios de estado;
- las tarjetas de proyectos;
- las noticias;
- el contenido mostrado en el DOM;
- las props de los componentes.

En total se ejecutaron 10 pruebas y todas fueron aprobadas.

### Cobertura de pruebas

La cobertura obtenida fue:

- Statements: 76.47%
- Branches: 70%
- Functions: 60%
- Lines: 76.47%

El detalle de las pruebas realizadas se encuentra en:

`PLAN_PRUEBAS.md`

El informe de cobertura se genera en la carpeta:

`coverage`

---

## Autora

Luna Bustamante

Estudiante de Ingeniería en Informática  
Desarrollo Full Stack II  
Duoc UC  
2026