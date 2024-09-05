# McCann_MarcoJuarez_EmailMaqueta

### Descripción
Este proyecto implementa una maqueta de email y un formulario de contacto funcionales, integrando un frontend basado en **React** con estilos en **Tailwind CSS**, junto con un backend en **Node.js** y **Express**. Los datos capturados en el formulario se almacenan en una base de datos local usando **PostgreSQL**.

### Tecnologías
El proyecto está desarrollado usando las siguientes tecnologías:

- **Node.js** (v20.15)
- **Express**: Framework para construir APIs en Node.js.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y configurables.
- **HTML/CSS**: Maquetación de la plantilla de email.
- **PostgreSQL**: Base de datos para almacenar la información de los formularios.
- **Vite**: Herramienta de desarrollo para la aplicación React.

### Funcionalidades

#### 1. **Componente ContactForm**
Este componente presenta un formulario con los campos necesarios (nombre, teléfono, email) para recopilar información del usuario. Los datos se envían al backend para ser almacenados en la base de datos PostgreSQL.

#### 2. **Componente EmailTemplate**
Renderiza una maqueta de un email que incluye imágenes en el encabezado y pie de página, con texto personalizado. El email está diseñado para ajustarse visualmente a los estándares de diseño moderno. Además, incluye enlaces a redes sociales y secciones interactivas.

### Requisitos del Sistema

Para ejecutar este proyecto localmente, asegúrate de tener instalados:

- **Node.js** (v20.15 o superior)
- **PostgreSQL** (configurado y en ejecución)
- **Vite** (para el entorno de desarrollo de React)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/McCann_MarcoJuarez_EmailMaqueta.git
2. Accede al directorio del proyecto:

    ```bash
    cd McCann_MarcoJuarez_EmailMaqueta
3. Instala las dependencias del proyecto:

    ```bash
    npm install
4. Configura tu base de datos PostgreSQL y actualiza el archivo .env con los detalles de la conexión a la base de datos.
    ```bash
    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=nombre_base_datos
5. Ejecuta el servidor backend de Node.js y Express:
    ```bash
    npm run start
6. Ejecuta el servidor de desarrollo para React:

    ```bash
    npm run dev
### Uso
Accede al formulario de contacto en la ruta principal (http://localhost:3000/).
Envía la información del formulario, la cual se almacenará en la base de datos.

## Navega a la ruta /email-template para ver la maqueta del email renderizada.
