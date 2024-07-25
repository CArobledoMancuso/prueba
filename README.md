# Guía del Módulo de Autenticación con JWT en NestJS

## Descripción

Este módulo de autenticación en NestJS utiliza JWT para autenticar a los usuarios. Incluye funcionalidad para registro (sign up), inicio de sesión (sign in) y protección de rutas mediante guards.



## Configuración de Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```bash
`JWT_SECRET=your_secret_key`
```

`JWT_SECRET` es la clave secreta utilizada para firmar los tokens JWT.

## API Referencia
#### logeo

```http
  POST /auth/signin
```
#### Body:

| Parametros | Type     | Ejemplo                     |
| :-------- | :------- | :------------------------- |
| `email`      | `string` | **requerido**. juan@mail.com |
| `password`      | `string` | **requerido**.  123@Admin |

 - #### exitoso
- Retorna un token JWT si las credenciales son correctas.
ejemplo:
```http
token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
-  #### en caso de error 

   - status: 200, description: 'Inicio de sesión exitoso'
   - status: 400, description: 'Solicitud incorrecta. Campos faltantes o inválidos.'
   - status: 401, description: 'No autorizado. Correo electrónico o contraseña incorrectos.'
   - status: 404, description: 'Usuario no encontrado.'
   - status: 500, description: 'Error interno del servidor. Ocurrió un error inesperado.'

#### Registro

```http
  POST /auth/signup
```
#### body:
| Parametros | Type     | Ejemplo                     |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **requerido**. Juan  |
| `email`      | `string` | **requerido**. juan@mail.com |
| `password`      | `string` | **requerido**.  123@Admin |
| `passwordConfirm`      | `string` |**requerido**.123@Admin |
| `address`      | `string` | **requerido**.123 Calle Principal |
| `phone`      | `string` | **requerido**. 555-1234 |
| `country`      | `string` | **requerido**. México |
| `city`      | `string` | **requerido**. Ciudad de México |
| `createdAt`      | `string` | **requerido**. 2024-07-23T17:00:00Z |
| `birthday`      | `IsDateString` | **requerido**. 1990-05-15T17:00:00Z |
| `allergies`      | `string` | leche |
| `picture`      | `string` | http://example.com/picture.jpg |
| `auth0Id`      | `string` | auth0|1234567890abcdef |

 - #### exitoso
  - status: 201, description: 'Usuario registrado exitosamente'

-  #### en caso de error 

   - status: 400, description: 'Solicitud incorrecta. Campos faltantes o inválidos.'
   - status: 409, description: 'Conflicto. Usuario con este correo electrónico ya existe.' 
   - status: 500, description: 'Error interno del servidor. Ocurrió un error inesperado.'


