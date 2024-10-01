# Ejercicio 1: Simulador de Servidor Asincrono

## Descripción

Implementar un simulador de un servidor asincrono que simula la llegada de solicitudes de un cliente y las procesa en background. El simulador debe tener las siguientes características:

1. Intervalo de tiempo para la simulación de llegada de nuevas solicitudes: 2 segundos
2. Cada solicitud tiene un ID único que se asigna automaticamente (puede ser un número o un string único)
3. Cada solicitud tarda entre 1 y 5 segundos en procesarse
4. El servidor acepta hasta 5 solicitudes simultaneamente; las solicitudes adicionales deben esperar en una cola.

5. Errores simulados: 20% de las solicitudes fallan aleatoriamente durante el procesamiento.

6. Si no hay solicitudes nuevas durante 10 segundos, el servidor se detiene automáticamente.

## Ejemplos de Salida

1. Solicitud 1 procesada correctamente en 3 segundos
2. Solicitud falló en 4 segundos
3. Solicitud 3 procesada correctamente en 2 segundos
4. Solicitud 4 en cola
5. El servidor ha sido detenido por inactividad

## Notas Adicionales

- Utilicé la biblioteca de tiempo de Node.js para generar tiempos aleatorios.
- Utilicé callbacks, promises, o async/await para simular el proceso de procesamiento de las solicitudes.
- Utilicé una cola o un algoritmo de cola para manejar las solicitudes en cola.
- Utilicé una estructura de datos de cola para almacenar las solicitudes pendientes.
- Utiliceé un contador de solicitudes procesadas para controlar el número máximo de solicitudes simultaneas.
