Este proyecto está desarrollado utilizando Laravel como backend y React como frontend, implementando el Starter Kit Breeze con Inertia.js para la autenticación y estructura básica del sistema. Aquí se detallan los pasos necesarios para instalar, configurar y ejecutar el proyecto correctamente.

REQUISITOS PREVIOS

Antes de iniciar, asegúrese de tener instalado:

PHP 8.1+

Composer

Node.js 18+

NPM o PNPM

XAMPP / Laragon / Valet (o cualquier entorno con MySQL)

MySQL o MariaDB

Git (opcional)

CLONAR EL PROYECTO

git clone https://github.com/usuario/nombre-del-proyecto.git

cd nombre-del-proyecto

INSTALAR DEPENDENCIAS DE LARAVEL

composer install

CONFIGURAR ARCHIVO .env

Duplicar el archivo .env.example y renombrarlo como .env:

cp .env.example .env

Luego configurar los datos de la base de datos:

DB_DATABASE=nombre_bd
DB_USERNAME=root
DB_PASSWORD=

GENERAR LA KEY DE LARAVEL

php artisan key:generate

INSTALAR DEPENDENCIAS DE REACT

npm install

EJECUTAR MIGRACIONES Y SEEDERS (OPCIONAL)

php artisan migrate

Si el proyecto tiene datos de prueba:

php artisan db:seed

LEVANTAR EL SERVIDOR DE LARAVEL

php artisan serve

El proyecto estará disponible en:
http://127.0.0.1:8000

COMPILAR EL FRONTEND (REACT)

En otra terminal ejecutar:

npm run dev

NOTAS IMPORTANTES

El proyecto utiliza Inertia.js, por lo que React está integrado directamente en Laravel mediante Vite.

Breeze incluye autenticación, login, registro y protección de rutas.

Si hay algún error de compilación puede intentar:
npm install
npm run build