# DevTree 🌳

DevTree es un clon full-stack de LinkTree. Esta plataforma permite a los usuarios crear cuentas personalizadas para centralizar, gestionar y compartir todos sus enlaces de redes sociales (Instagram, YouTube, Facebook, etc.) en una sola página de perfil público.

## 🚀 Tecnologías y Herramientas

El proyecto está construido bajo una arquitectura cliente-servidor utilizando las siguientes tecnologías:

### Frontend
*   **React + Vite:** Construcción de interfaces de usuario con un entorno de desarrollo ultrarrápido.
*   **TypeScript:** Tipado estático para un código más robusto.
*   **Tailwind CSS:** Diseño responsivo y moderno a través de clases de utilidad.
*   **React Query:** Sincronización eficiente de datos con el servidor y manejo de caché.

### Backend
*   **Node.js & Express:** Entorno de ejecución y framework para la API REST.
*   **TypeScript:** Tipado estricto en el servidor.
*   **MongoDB:** Base de datos NoSQL para almacenar perfiles de usuario y sus enlaces.
*   **Cloudinary:** Servicio en la nube para la gestión y almacenamiento de las imágenes de perfil (avatares) subidas por los usuarios.
*   **JWT (JSON Web Tokens):** Manejo seguro de la autenticación y sesiones.

## 🌟 Características Principales

*   **Autenticación Completa:** Registro de usuarios, inicio de sesión y protección de rutas privadas.
*   **Panel de Administración (Dashboard):** Interfaz para que el usuario añada, edite, ordene y elimine sus enlaces de manera intuitiva.
*   **Subida de Archivos:** Integración para que los usuarios puedan subir y actualizar su foto de perfil.
*   **Perfil Público Dinámico:** Generación automática de una URL única por usuario para compartir sus enlaces centralizados.

## 📂 Estructura del Repositorio

```text
devtree/
├── backend/       # API RESTful (Node.js, Express, MongoDB)
└── frontend/      # Aplicación cliente (React, Vite, Tailwind CSS)
```

## 🛠️ Instalación y Uso en Desarrollo

Para ejecutar este proyecto localmente, necesitarás tener instalado [Node.js](https://nodejs.org/) y acceso a una base de datos de MongoDB, además de una cuenta en Cloudinary.

### 1. Clonar el repositorio
```bash
git clone <url-de-tu-repositorio>
cd devtree
```

### 2. Configurar el Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:
```env
PORT=4000
MONGO_URI=<tu-string-de-conexion-mongodb>
JWT_SECRET=<tu-secreto-para-tokens>
CLOUDINARY_URL=<tus-credenciales-de-cloudinary>
FRONTEND_URL=http://localhost:5173
```

Inicia el servidor:
```bash
npm run dev
```

### 3. Configurar el Frontend

Abre una nueva terminal y navega a la carpeta del frontend:
```bash
cd frontend
npm install
```

Crea un archivo `.env` en la carpeta `frontend`:
```env
VITE_API_URL=http://localhost:4000/api
```

Inicia la aplicación de React:
```bash
npm run dev
```

## 👨‍💻 Autor

*   **Facundo Ledesma**
