🏡 Sistema de Reservas de Cabañas – Full Stack App
Este proyecto es una aplicación web full stack construida con React en el frontend y Node.js + Express en el backend. Permite registrar usuarios, gestionar cabañas, realizar reservas, subir imágenes y visualizar estadísticas.

🚀 Tecnologías utilizadas
🖥️ Frontend
React.js (con Hooks y Context API)

JavaScript

CSS / TailwindCSS (según configuración)

Firebase Storage (para imágenes)

SweetAlert2 (alertas visuales)

🖥️ Backend
Node.js

Express.js

MongoDB + Mongoose

JWT (autenticación y autorización)

Firebase Admin SDK (manejo de imágenes)

Nodemailer (envío de correos)

📁 Estructura del Proyecto
Frontend
Contexts: AuthContext, LodgesContext, ReservationsContext, RecordsContext

Componentes organizados por vistas

Hooks personalizados (useAuth, useRecords, etc.)

Manejo global de estado con useContext

Backend (carpeta /api)
/sessions – Registro, login, logout, sesión actual

/users – CRUD de usuarios y sus imágenes

/lodges – CRUD de cabañas

/reservations – CRUD de reservas

/records – Registro de reservas finalizadas

✅ Funcionalidades
👤 Autenticación y Usuarios
Registro de nuevos usuarios con envío de contraseña aleatoria por email

Inicio y cierre de sesión (JWT en cookies)

Visualización y edición del perfil

Cambio de imagen de perfil

🏘️ Gestión de Cabañas
Crear nuevas cabañas

Editar detalles (capacidad, habitaciones, wifi, precios por temporada)

Eliminar cabañas

Subir y eliminar imágenes de cada cabaña

Marcar disponibilidad y URL de ubicación

📅 Reservas
Crear reservas indicando fechas y cantidad de personas

Visualizar reservas activas del usuario

Finalizar reservas marcándolas como "pagadas"

Registro automático en el historial una vez pagadas

📊 Paneles de Administración
Usuarios registrados y activos

Estadísticas básicas de actividad

🔐 Seguridad
Autenticación con JWT (almacenado en cookies HTTP Only)

Validación de roles (user, admin, developer)

Protección de rutas tanto en frontend como backend

Validaciones básicas de datos

🌐 Endpoints principales
Sessions

POST /api/sessions/register

POST /api/sessions/login

POST /api/sessions/logout

GET /api/sessions/current/user

GET /api/sessions/users/logged

GET /api/sessions/users/registered

Users

GET /api/users/:id

PUT /api/users/:id

PATCH /api/users/image/:id

DELETE /api/users/:id

Lodges

GET /api/lodges

GET /api/lodges/:id

GET /api/lodges/user/:userId

POST /api/lodges/:userId

PATCH /api/lodges/:id (agregar imagen)

PATCH /api/lodges/wifi/:id

PATCH /api/lodges/available/:id

PATCH /api/lodges/location/:id

DELETE /api/lodges/:id

DELETE /api/lodges/image/:id

Reservations

POST /api/reservations/:lodgeId/:userId

GET /api/reservations/user/:userId

PATCH /api/reservations/:id (marcar como pagada)

Records

GET /api/records/user/:userId

📸 Gestión de Imágenes
Las imágenes se almacenan en Firebase Storage desde el frontend. El backend usa Firebase Admin SDK para gestionar y eliminar imágenes asociadas a usuarios y cabañas.

🛠️ Instalación
Backend
bash
cd backend
npm install
npm run dev
Frontend
bash
cd frontend
npm install
npm start
Variables de entorno necesarias (.env):

👨‍💻 Autor
José Pablo Lubiano
Desarrollador Full Stack MERN
LinkedIn | Portafolio