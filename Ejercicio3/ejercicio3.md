# Ejercicio 3: Sistema de registro y validacion con tipos refinados y callback

## Enunciado del problema

Implementar un sistema de registros para validar la entrada de usuarios. El sistema debe aceptar los datos de entrada(nombre, correo, telefono y edad) y realizar validaciones exhaustivas para garantizar que cada dato cumple con los requisitos establecidos.

## Entrada: Datos de entrada del usuario
- Nombre(string), correo(string), telefono(string) y Edad(number)

## Salida esperada:

1. Si los datos son validos, la salida debe ser un objeto que confirme el registro del usuario.
2. Si los datos no son validos, la salida debe ser un objeto que contenga informacion sobre los errores, pero sin detener la ejecucion.

## Restricciones:

- No se puede utilizar funciones anonimas.
- Validacion exhaustiva de datos con tipado refinado
- No se permite try/catch
- polimorfismo en interfaces
- uso de la tecnica de "Structural Typing" de TypesScript