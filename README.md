# README

## Descripción del Proyecto

Esta aplicación es un sistema de gestión de reservas desarrollado con un frontend en Angular y un backend en .NET Core 8 utilizando una arquitectura modular. La aplicación permite la creación, edición, eliminación y visualización de reservas, así como el uso de filtros avanzados en tablas de datos.

---

## Arquitectura

### Frontend
El frontend de esta aplicación fue desarrollado en Angular con las siguientes características:

- **Componentización:** Uso extensivo de componentes reutilizables para garantizar un código mantenible y modular.
- **Estilos con Tailwind CSS:** Todo el diseño y estilos fueron manejados utilizando Tailwind CSS para mantener consistencia y personalización.
- **Gestión de estado:** Se utiliza RxJS para manejar el estado de la aplicación y la comunicación entre componentes.
- **Validación de formularios:** Implementación de formularios reactivos para validaciones dinámicas y personalizadas.

### Backend
El backend está desarrollado con .NET Core 8 utilizando una arquitectura modular. Esta arquitectura divide la aplicación en módulos independientes para garantizar la separación de responsabilidades y facilitar la escalabilidad. Las características principales incluyen:

- **Módulos Independientes:** Cada módulo representa una funcionalidad o dominio específico.
- **Patrón Repository:** Utilizado para abstraer la lógica de acceso a datos.
- **Inyección de Dependencias:** Implementado para facilitar pruebas unitarias y disminuir el acoplamiento.
- **Servicios RESTful:** Proporciona endpoints para CRUD y otras operaciones relacionadas con reservas.

---

## Instrucciones para Levantar y Probar la Aplicación

### Requisitos Previos
- Node.js 18 o superior
- Angular CLI instalado globalmente
- .NET Core 8 SDK
- SQL Server (u otra base de datos configurada en el backend)
- Git

### Pasos para el Frontend
1. Clona el repositorio del proyecto:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Ve al directorio del frontend:
   ```bash
   cd frontend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta la aplicación:
   ```bash
   ng serve
   ```
5. Accede a la aplicación desde el navegador en:
   ```
   http://localhost:4200
   ```

### Pasos para el Backend
1. Ve al directorio del backend:
   ```bash
   cd backend
   ```
2. Restaura los paquetes NuGet:
   ```bash
   dotnet restore
   ```
3. Configura la cadena de conexión a la base de datos en el archivo `appsettings.json`:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=TU_SERVIDOR;Database=TU_BASE_DE_DATOS;Trusted_Connection=True;"
     }
   }
   ```
4. Aplica las migraciones:
   ```bash
   dotnet ef database update
   ```
5. Ejecuta la aplicación:
   ```bash
   dotnet run
   ```
6. La API estará disponible en:
   ```
   http://localhost:7026
   ```

### Pruebas de la Aplicación

#### Pruebas del Frontend
1. Ejecuta las pruebas unitarias:
   ```bash
   ng test
   ```
2. Para pruebas end-to-end:
   ```bash
   ng e2e
   ```

#### Pruebas del Backend
1. Ve al directorio del proyecto de pruebas:
   ```bash
   cd backend/Tests
   ```
2. Ejecuta las pruebas:
   ```bash
   dotnet test
   ```

---

---

## Contacto
Si tienes alguna duda o sugerencia, no dudes en ponerte en contacto:
- **Correo:** joelalbino19@gmail.com
- **GitHub:** [TuUsuarioGitHub](https://github.com/joelalbino19)