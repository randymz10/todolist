# **Aplicación Lista de tareas**

## **Objetivo:**

El objetivo de esta aplicación es permitir a los usuarios crear, gestionar y realizar un seguimiento de sus tareas diarias de manera efectiva.

## **Funcionalidades:**

1. ### **Registro de Tareas:**

   - Los usuarios podrán agregar nuevas tareas proporcionando los siguientes detalles:
     - Título de la tarea.
     - Descripción (opcional).
     - Fecha de vencimiento (opcional).
     - Prioridad de la tarea (alta, media, baja).
     - Etiquetas (opcional) para categorizar las tareas.

2. ### **Visualización de Tareas:**

   - Los usuarios podrán ver todas las tareas registradas en el sistema.
   - Las tareas se mostrarán agrupadas por su estado (pendiente, en progreso, completada).
   - Se mostrarán detalles como el título, la descripción, la fecha de vencimiento, la prioridad y las etiquetas de cada tarea.

3. ### **Actualización de Tareas:**

   - Los usuarios podrán modificar el estado, la descripción, la fecha de vencimiento, la prioridad y las etiquetas de las tareas existentes.
   - Deberán poder cambiar una tarea de estado pendiente a en progreso y de en progreso a completada.

4. ### **Eliminación de Tareas:**

   - Los usuarios podrán eliminar tareas existentes del sistema.
   - Se debe proporcionar una confirmación antes de eliminar una tarea para evitar eliminaciones accidentales.

5. ### **Búsqueda de Tareas:**

   - Los usuarios podrán buscar tareas por título, descripción, fecha de vencimiento, prioridad o etiquetas.
   - El sistema deberá proporcionar resultados de búsqueda relevantes y precisos.

6. ### **Filtrado de Tareas:**

   - Los usuarios podrán filtrar las tareas según su estado (pendiente, en progreso, completada) y su prioridad (alta, media, baja).
   - Se deberán proporcionar opciones para filtrar las tareas por fecha de vencimiento.

7. ### **Recordatorios y Notificaciones:**

   - Se deberá implementar un sistema de recordatorios para las tareas próximas a su fecha de vencimiento.
   - Se pueden enviar notificaciones por correo electrónico o mensajes push a los usuarios para recordarles las tareas pendientes.

8. ### **Seguridad:**

   - Se requerirá autenticación para acceder a las funcionalidades de la aplicación.
   - Se deben implementar niveles de autorización para restringir el acceso a las funcionalidades según el rol del usuario.
   - Se deben aplicar prácticas de seguridad estándar para proteger los datos del usuario y prevenir ataques como inyecciones SQL y ataques de scripting entre sitios (XSS).

9. ### **Registro de Auditoría:**

   - Se debe mantener un registro de auditoría para realizar un seguimiento de las acciones realizadas en las tareas, incluyendo quién realizó la acción y cuándo.

## **Plataforma y Tecnologías:**

- La aplicación estará desarrollada como una aplicación web o móvil.
- Se utilizará un lenguaje de programación adecuado para el desarrollo backend (por ejemplo, Python, Java, Node.js).
- Se utilizará un sistema de gestión de bases de datos para almacenar y gestionar los datos de las tareas (por ejemplo, MySQL, PostgreSQL, MongoDB).
- Se pueden utilizar tecnologías como React, Angular o Vue.js para el desarrollo frontend.
- Se deben seguir las mejores prácticas de desarrollo y documentación.

## **Interfaces de Usuario:**

- Se deben proporcionar interfaces de usuario intuitivas y fáciles de usar para permitir a los usuarios interactuar con las tareas de manera eficiente.

## **Entregables:**

- Documentación detallada de la API (si es una aplicación web) o de las funcionalidades de la aplicación (si es una aplicación móvil), incluyendo especificaciones de los endpoints, parámetros esperados, códigos de estado de respuesta y ejemplos de solicitud y respuesta.
- Código fuente del backend con comentarios y documentación adecuados.
- Código fuente del frontend (si es aplicable) con comentarios y documentación adecuados.
- Pruebas unitarias y de integración para garantizar la calidad del software.

Estas especificaciones proporcionan una base sólida para el desarrollo de la aplicación de lista de tareas y garantizan que se cumplan los requisitos funcionales y no funcionales del sistema.

## **Flujo de la Aplicación**

1. **Inicio de Sesión / Registro:**
   - Los usuarios deben iniciar sesión en la aplicación utilizando sus credenciales existentes o registrarse si son nuevos usuarios.
   - Después de la autenticación, se les dirigirá al tablero principal de la aplicación.

2. **Tablero Principal:**
   - En el tablero principal, los usuarios verán una lista de tareas pendientes, en progreso y completadas.
   - También tendrán acceso a las opciones de agregar, editar, eliminar, buscar y filtrar tareas.

3. **Agregar Tarea:**
   - Desde el tablero principal, los usuarios pueden hacer clic en el botón "Agregar Tarea" para abrir el formulario de creación de tareas.
   - Aquí, pueden ingresar los detalles de la nueva tarea, como título, descripción, fecha de vencimiento, prioridad y etiquetas, y luego guardar la tarea.

4. **Editar Tarea:**
   - Los usuarios pueden hacer clic en una tarea existente para editar sus detalles.
   - Esto abrirá el formulario de edición de tareas, donde pueden realizar cambios en el título, la descripción, la fecha de vencimiento, la prioridad y las etiquetas, y luego guardar los cambios.

5. **Eliminar Tarea:**
   - Desde el tablero principal o la vista de detalles de una tarea, los usuarios pueden eliminar una tarea existente haciendo clic en la opción "Eliminar".
   - Se mostrará una confirmación para asegurarse de que el usuario realmente desea eliminar la tarea.

6. **Buscar y Filtrar Tareas:**
   - Los usuarios pueden utilizar la función de búsqueda para encontrar tareas específicas escribiendo palabras clave.
   - También pueden aplicar filtros para mostrar solo tareas pendientes, en progreso, completadas o todas las tareas.
   - Se pueden aplicar filtros adicionales según la fecha de vencimiento y la prioridad.

7. **Marcar Tarea como Completada:**
   - Desde la lista de tareas pendientes o en progreso, los usuarios pueden marcar una tarea como completada haciendo clic en una opción correspondiente.
   - La tarea se moverá automáticamente a la sección de tareas completadas y ya no se mostrará en la lista de tareas pendientes o en progreso.

8. **Recordatorios y Notificaciones:**
   - Los usuarios pueden recibir notificaciones o alertas sobre tareas próximas a su fecha de vencimiento.
   - Estas notificaciones pueden ser enviadas por correo electrónico, mensajes push o en la misma aplicación, según las preferencias del usuario.

## **Personas Involucradas:**

1. **Usuarios Finales:**
   - Son los individuos que utilizan la aplicación para gestionar sus tareas diarias.
   - Pueden ser cualquier persona que necesite organizar y realizar un seguimiento de sus actividades, como profesionales, estudiantes, etc.

2. **Desarrolladores:**
   - Son responsables de construir y mantener la aplicación.
   - Pueden incluir desarrolladores de frontend, backend, diseñadores de interfaz de usuario, ingenieros de calidad, entre otros.

3. **Administradores del Sistema:**
   - Son responsables de administrar y mantener el sistema en funcionamiento.
   - Pueden ser responsables de la gestión de usuarios, configuración de seguridad, monitoreo del sistema, entre otras tareas relacionadas con la infraestructura y el funcionamiento del sistema.

4. **Propietarios o Gestores del Producto:**
   - Son responsables de definir las características y funcionalidades de la aplicación.
   - Trabajan en estrecha colaboración con los desarrolladores para garantizar que la aplicación cumpla con los requisitos del usuario y las expectativas del negocio.

## **Historias de Usuario**

1. **Como usuario, quiero poder agregar una nueva tarea para poder realizar un seguimiento de mis actividades diarias.**
   - Criterios de Aceptación:
     - Debería haber un formulario donde pueda ingresar el título de la tarea.
     - Opcionalmente, debería poder agregar una descripción, una fecha de vencimiento y seleccionar la prioridad y etiquetas para la tarea.
     - Después de agregar la tarea, debería aparecer en la lista de tareas pendientes.

2. **Como usuario, quiero ver todas mis tareas pendientes para saber qué debo hacer a continuación.**
   - Criterios de Aceptación:
     - Debería haber una sección clara en la interfaz de usuario que muestre todas las tareas pendientes.
     - Cada tarea pendiente debería mostrar su título, descripción (si está disponible), fecha de vencimiento, prioridad y etiquetas asociadas.

3. **Como usuario, quiero poder marcar una tarea como completada una vez que haya terminado con ella.**
   - Criterios de Aceptación:
     - Debería haber un botón o opción para marcar una tarea como completada.
     - Una vez marcada como completada, la tarea debería moverse a la sección de tareas completadas y ya no debería aparecer en la lista de tareas pendientes.

4. **Como usuario, quiero poder editar una tarea existente para actualizar su información si es necesario.**
   - Criterios de Aceptación:
     - Debería haber una opción para editar una tarea existente.
     - Debería poder cambiar el título, la descripción, la fecha de vencimiento, la prioridad y las etiquetas asociadas de la tarea.
     - Después de editar la tarea, los cambios deben reflejarse correctamente en la lista de tareas.

5. **Como usuario, quiero poder eliminar una tarea si ya no es relevante o necesaria.**
   - Criterios de Aceptación:
     - Debería haber una opción para eliminar una tarea existente.
     - Se debe mostrar una confirmación antes de eliminar la tarea para evitar eliminaciones accidentales.
     - Después de eliminar la tarea, ya no debe aparecer en la lista de tareas.

6. **Como usuario, quiero poder buscar y filtrar mis tareas para encontrar rápidamente lo que necesito.**
   - Criterios de Aceptación:
     - Debería haber un campo de búsqueda donde pueda ingresar texto para buscar tareas por título, descripción, etiquetas, etc.
     - Debería haber opciones de filtro para mostrar solo tareas pendientes, en progreso, completadas o todas las tareas.
     - Debería poder filtrar las tareas por fecha de vencimiento y prioridad.

7. **Como usuario, quiero recibir recordatorios o notificaciones sobre tareas próximas a su fecha de vencimiento.**
   - Criterios de Aceptación:
     - Debería recibir notificaciones o alertas cuando una tarea esté próxima a su fecha de vencimiento.
     - Las notificaciones pueden ser enviadas por correo electrónico, mensajes push o en la misma aplicación.

8. **Como usuario, quiero tener un registro de auditoría de mis acciones en las tareas para realizar un seguimiento de los cambios.**
   - Criterios de Aceptación:
     - Debería haber un registro de auditoría que registre quién realizó qué acción (agregar, editar, eliminar) en cada tarea y cuándo se realizó la acción.
     - El registro de auditoría debería ser accesible solo para usuarios autorizados y estar protegido contra modificaciones no autorizadas.

Para diseñar el modelo de base de datos en PostgreSQL para una aplicación de lista de tareas, primero necesitamos identificar las entidades principales y las relaciones entre ellas. Basándonos en las historias de usuario proporcionadas y en el modelo de datos básico que presenté anteriormente, aquí está una propuesta para el modelo de base de datos:

## **Entidades Principales:**

1. **Usuario:**
   - Atributos: `id` (clave primaria), `username`, `email`, `password_hash`, `created_at`.
   - Relaciones: Un usuario puede tener muchas tareas.

2. **Tarea:**
   - Atributos: `id` (clave primaria), `user_id` (clave foránea referenciando al usuario), `title`, `description`, `due_date`, `priority`, `status`, `created_at`, `updated_at`.

**Modelo de Datos:**

```plaintext
Tabla "usuario"
| Columna         | Tipo         | Restricciones                        |
|-----------------|--------------|--------------------------------------|
| id              | SERIAL       | PRIMARY KEY                          |
| username        | VARCHAR(50)  | NOT NULL, UNIQUE                     |
| email           | VARCHAR(100) | NOT NULL, UNIQUE                     |
| password_hash   | VARCHAR(100) | NOT NULL                             |
| created_at      | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP            |

Tabla "tarea"
| Columna         | Tipo         | Restricciones                        |
|-----------------|--------------|--------------------------------------|
| id              | SERIAL       | PRIMARY KEY                          |
| user_id         | INT          | FOREIGN KEY (usuario.id)             |
| title           | VARCHAR(100) | NOT NULL                             |
| description     | TEXT         |                                      |
| due_date        | DATE         |                                      |
| priority        | VARCHAR(20)  |                                      |
| status          | VARCHAR(20)  | DEFAULT 'pendiente'                  |
| created_at      | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP            |
| updated_at      | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP            |
```

En este modelo:

- La tabla `usuario` almacena información sobre los usuarios registrados en la aplicación.
- La tabla `tarea` almacena las tareas asociadas a cada usuario. La columna `user_id` actúa como una clave foránea que hace referencia al `id` del usuario en la tabla `usuario`.
- El campo `status` en la tabla `tarea` indica el estado actual de la tarea (pendiente, en progreso, completada).
- Se incluyen campos de fecha y hora `created_at` y `updated_at` para realizar un seguimiento de cuándo se creó y actualizó cada tarea.

Este modelo proporciona una base sólida para almacenar y gestionar la información de usuarios y tareas en PostgreSQL. Se pueden realizar ajustes adicionales según los requisitos específicos de la aplicación, como la adición de índices para mejorar el rendimiento de consultas frecuentes o la inclusión de campos adicionales según sea necesario.
