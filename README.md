# EvaDoc

## Descripción del Proyecto

El proyecto es una plataforma web para la creación y gestión de cuestionarios, similar a Google Forms. Permite a los usuarios diseñar formularios con preguntas abiertas y cerradas, administrar respuestas y evaluar resultados con reglas específicas.

### Características Principales

- Debe permitir consultar reportes anteriores
- Debe depurar un csv
- Debe generar reportes
- CRUD profesores
- CRUD encuesta


### Levantar el proyecto

Proyecto creado con Nest como *framework* backend
TypeORM como *ORM*
Mysql como *BD*
Jest para *testing*

1. Tener el CLI de nest, puedes instalarlo con el siguiente comando `npm i -g @nestjs/cli`
2. Tener instalado typeorm junto con de driver de la bd `npm install --save @nestjs/typeorm typeorm mysql2` , en este caso instale el driver de mysql que es necesario para este proyecto...
3. Crear un archivo .env
4. Copiar los datos de .env.example al .env
5. Inicializar tus variables de entorno con `npm i --save @nestjs/config`
6. Crear una base de datos con el mismo nombre que pusiste en tu .env
   1. Abre tu terminal y ejecuta `mysql -h localhost -u root -p`, procedes a ingresar tu contraseña
   2. Crea tu BD con `CREATE DATABASE database-name`
7. Ejecutar el comando `npm run dev:start`