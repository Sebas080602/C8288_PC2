// TypesScript

// Ejercicio 1

// Implementar un servidor web simulado que procese solicitudes de clientes de forma asincrona.

// El servidor recibirá nuevas solicitudes cada 2 seconds y cada solicitud tardará entre 1 y 5 seconds

// El sistema debe ser capaz de manejar multiples solicitudes simultaneamente,pero con un limite de 5 solicitudes en paralelo.

// Las solicitudes adicionales deberán esperar en una cola hasta que haya espacio disponible para procesarse.


// Como condiciones se debe implementar el procedimiento de solicitudes en tres fases:

// Primera fase (con callbacks): Usar solo callbacks con error primero para manejar el procedimiento de las solicitudes y su cola.


// Segunda fase (con promises): Refactorizar el code para utilizar promesas, eliminando los callbacks


// Tercera fase (con async/await): Refactorizar el code nuevamente para usar async/await, optimizando el manejo de errores y la estion de solicitudes pendientes.


// Solucion ejercicio 1 con typescript

// Primera fase: (Callbacks)

function simularServidorAsincrono(callback: (error: Error | null, solicitud?: ISolicitude) => void): void {
  setTimeout(() => { 
    const randomTime = Math.floor(Math.random() * 4000) + 1000; // Tiempo de simulación entre 1 y 5 segundos
    const error = Math.random() < 0.5? new Error('Error en la solicitud') : null; // Genera un error aleatorio

    if (error) {
      callback(error);
    } else {
      const solicitud: ISolicitude = {
        id: Date.now(),
        data: 'Datos de solicitud',
      };
      callback(null, solicitud);
    }
  }, randomTime);
}

// Segunda fase: (Promises)

interface ISolicitude {
  id: number;
  data: any;
}

function simularServidorAsincronoConPromises(): Promise<ISolicitude> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        const randomTime = Math.floor(Math.random() * 4000) + 1000; // Tiempo de simulación entre 1 y 5 segundos
        const error = Math.random() < 0.5? new Error('Error en la solicitud') : null; // Genera un error aleatorio

        if (error) {
          reject(error);
        } else {
          const solicitud: ISolicitude = {
            id: Date.now(),
            data: 'Datos de solicitud',
          };
          resolve(solicitud);
        }
      }, randomTime);
    });
}

// Tercera fase: (async/await)

async function simularServidorAsincronoConAsyncAwait(): Promise<ISolicitude> {
  try {
    const randomTime = Math.floor(Math.random() * 4000) + 1000; // Tiempo de simulación entre 1 y 5 segundos
    const error = Math.random() < 0.5? new Error('Error en la solicitud') : null; // Genera un error aleatorio

    if (error) {
      throw error;
    } else {
      const solicitud: ISolicitude = {
        id: Date.now(),
        data: 'Datos de solicitud',
      };
      return solicitud;
    }
  } catch (error) {
    console.error('Error en el simulador de servidor:', error.message);
    throw error;
  }
}

// Las entradas del ejercicio 1 serán asi:

// 1. Intervalo de tiempo para la simulacion de llegada de nuevas solicitudes: 2 seconds
setInterval(() => {
  simularServidorAsincronoConPromises()
   .then((solicitud) => console.log('Solicitud procesada correctamente:', solicitud))
   .catch((error) => console.error('Error en la solicitud:', error.message));
}, 2000);

// 2. Cada solicitud tiene un ID unico que se asigna automaticamente(puede ser un numero o un string unico)


// 3. Cada solicitud tarda entre 1 y 5 segundos en procesarse

// 4. El servidor acepta hasta 5 solicitudes simultaneamente; las solicitudes adicionales deben esperar en una cola.

// 5. Errores simulados: 20% de las solicitudes fallan aleatoriamente durante el procesamiento.

// 6. Si no hay solicitudes nuevas durante 10 segundos, el servidor se detiene automaticamente



// Ejemplo de salida para el Ejercicio 1

// Solicitud 1 procesada correctamente en 3 segundos
simularServidorAsincronoConPromises()
 .then((solicitud) => console.log('Solicitud 1 procesada correctamente:', solicitud))
 .catch((error) => console.error('Error en la solicitud 1:', error.message));

// Solicitud falló en 4 segundos
setTimeout(() => {
  simularServidorAsincronoConPromises()
   .then((solicitud) => console.log('Solicitud 2 procesada correctamente:', solicitud))
   .catch((error) => console.error('Error en la solicitud 2:', error.message));
}, 4000);

// Solicitud 3 procesada correctamente en 2 segundos
setTimeout(() => {
  simularServidorAsincronoConPromises()
   .then((solicitud) => console.log('Solicitud 3 procesada correctamente:', solicitud))
   .catch((error) => console.error('Error en la solicitud 3:', error.message));
}, 2000);

// Solicitud 4 en cola
setTimeout(() => {
  simularServidorAsincronoConPromises()
   .then((solicitud) => console.log('Solicitud 4 procesada correctamente:', solicitud))
   .catch((error) => console.error('Error en la solicitud 4:', error.message));
}, 6000);

// El servidor se ha detenido por inactividad
setTimeout(() => {
  console.log('El servidor ha sido detenido por inactividad');
}, 10000);

