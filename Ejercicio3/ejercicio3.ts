// Ejercicio 3: Sistema de registro y validacion con tipos refinados y callback


// Enunciado del problema:

// Implementar un sistema de registros para validar la entrada de usuarios. El sistema debe aceptar
// los datos de entrada(nombre, correo, telefono y edad) y realizar validaciones
// exhaustivas para garantizar que cada dato cumple con los requisitos establecidos.

// Entrada: Datos de entrada del usuario
// Nombre(string), correo(string), telefono(string) y Edad(number)

// Salida esperada:

// 1. si los datos son validos, la salida debe ser un objeto que confirme el registro del usuario

// 2. si los datos no son validos, la salida debe ser un objeto que contenga informacion sobre los
// errores, pero sin detener la ejecucion

// Restricciones:

// NO se puede utilizar funciones anonimas.
// Validacion exhaustiva de datos con tipado refinado
// No se permite try/catch
// polimorfismo en interfaces
// uso de la tecnica de "Structural Typing" de TypesScript

// Solucion del ejericio 3

interface IUsuario {
  nombre: string;
  correo: string;
  telefono: string;
  edad: number;
}

// Tipos de datos para validacion
type EmailType = string;
type TelefonoType = string;
type NombreType = string;
type EdadType = number;

// Tipos de datos para salida
type ValidacionResultadoType = {
  valido: boolean;
  errores?: { [key: string]: string[] };
};

// Validacion de datos
function validarUsuario(usuario: IUsuario): ValidacionResultadoType {
  const errores: { [key: string]: string[] } = {};

  // Validacion nombre
  if (typeof usuario.nombre !== 'string' || usuario.nombre.length < 2) {
    errores.nombre = ['Nombre debe ser un string de al menos 2 caracteres'];
  }

  // Validacion correo
  if (typeof usuario.correo !== 'string' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usuario.correo)) {
    errores.correo = ['Correo electronico invalido'];
  }

  // Validacion telefono
  if (typeof usuario.telefono !== 'string' || !/^\+?[1-9]\d{1,14}$/.test(usuario.telefono)) {
    errores.telefono = ['Telefono invalido'];
    
    // Validacion edad
    if (typeof usuario.edad !== 'number' || usuario.edad < 18 || usuario.edad > 99) {
      errores.edad = ['Edad debe ser un numero entre 18 y 99'];
    }
  }

  return { valido: Object.keys(errores).length === 0, errores };
  // return { valido: true }; // Para desactivar las validaciones
  // return { valido: false, errores }; // Para activar las validaciones
}

// Callback
function callback(validacionResultado: ValidacionResultadoType): void {
  if (validacionResultado.valido) {
    console.log('Usuario registrado correctamente');
  } else {
    console.log('Errores en la validacion:', validacionResultado.errores);
  }
}

// Uso del sistema
const usuario: IUsuario = {
  nombre: 'John Doe',
  correo: 'johndoe@example.com',
  telefono: '+5491122233333',
  edad: 25,
};

const validacionResultado = validarUsuario(usuario);
callback(validacionResultado);
