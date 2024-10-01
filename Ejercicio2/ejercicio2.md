# Ejercicio 2: Sistema de permisos basado en herencia y prototipos

## Enunciado del problema

Diseñar un sistema de permisos para diferentes tipos de usuarios
- `UsuarioBase`, `Admin`, `SuperAdmin`). Cada tipo de usuario tiene diferentes niveles de acceso. Usar herencia y genericos para gestionar los niveles de permisos, y emplea prototipos para añadir metodos adicionales a los tipos de usuario.
## Restricciones
1. No se puede usar decoradores de TypesScript. Se debe usar la herencia y los prototipos de JavaScript tradicionales para extender la funcionalidad de las clases.
2. No se puede modificar directamente los metodos de `UsuarioBase`. Las nuevas funcionalidades deben agregarse usando prototipos.
3. El sistema de permisos debe estar estrictamente tipado. No se puede usar any o unknown en ninguna parte del sistema de permisos
4. No se puede usar interfaces para definir los permisos. Todo el manejo de permisos debe hacerse a traves de clases, herencia y genericos

## Instrucciones del ejercicio 2
1. Crear una clase `UsuarioBase` que tenga propiedades como nombre y correo, y un método `verPermisos` que retorne los permisos básicos del usuario.
2. Crear una clase `Admin` que herede de `UsuarioBase` y tenga permisos adicionales como gestionar usuarios. Usa herencia para agregar este nuevo comportamiento
3. Crear una clase `SuperAdmin` que herede de `Admin` y tenga permisos avanzados como gestionar el sistema.
4. Implementar una clase genérica `GestorDePermisos<T extends UsuarioBase>` que permita asignar permisos específicos a los usuarios basandose en el tipo de usuario
5. Añadir metodos adicionales a la clase `Admin` utilizando prototipo para agregar nuevas funcionalidades sin modificar directamente la clase


## Solución del ejercicio 2

Explicación del código:

- Se define la clase `UsuarioBase` con los atributos `nombre` y `correo`.
- Se implementa la clase `Admin` que hereda de `UsuarioBase` y agrega los permisos específicos de administrador.
- Se implementa la clase `SuperAdmin` que hereda de `Admin` y agrega los permisos específicos de superadministrador.
- Se define la clase `GestorDePermisos` que es una clase genérica que permite gestionar permisos específicos para un tipo de usuario basado en el tipo de usuario.
- Se crea un objeto de la clase `GestorDePermisos` para administrar permisos de administradores y se agrega un administrador.
- Se muestra el listado de permisos del administrador agregado.
- Se agrega un nuevo usuario al administrador y se muestra el listado de permisos actualizados.