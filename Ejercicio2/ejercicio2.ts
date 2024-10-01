
// Ejercicio 2: Sistema de permisos basado en herencia y prototipos


// Enunciado del problema:

// Diseñar un sistema de permisos para diferentes tipos de usuarios
// UsuarioBase, Admin, SuperAdmin). Cada tipo de usuario tiene diferentes niveles de acceso. Usar herencia y genericos para gestionar los niveles de permisos, y emplea prototipos para añadir metodos adicionales a los tipos de usuario.

// Restricciones:

// 1. No se puede usar decoradores de TypesScript. Se debe usar la herencia y los prototipos de JavaScript tradicionales para extender la funcionalidad de las clases.

// 2. No se puede modificar directamente los metodos de UsuarioBase. Las nuevas funcionalidades deben agregarse usando prototipos.

// 3. El sistema de permisos debe estar estrictamente tipado. No se puede usar any o unknown en ninguna parte del sistema de permisos

// 4. No se puede usar interfaces para definir los permisos. Todo el manejo de permisos debe hacerse a traves de clases, herencia y genericos


// Instrucciones del ejercicio 2

// 1. Clase base UsuarioBase: Crear una clase UsuarioBase que tenga propiedades como nombre y correo, y un metodo verPermisos que retorne los permisos basicos del usuario.

// 2. Clase Admin (herencia): Implementar una clase Admin que extienda de UsuarioBase y tenga permisos adicionales como gestionarUsuarios. Usa herencia para agregar este nuevo comportamiento

// 3. Clase SuperAdmin(herencia avanzada): crea una clase SuperAdmin que herede de Admin y tenga permisos avanzados como gestionarSistema.

// 4. genericos para gestionar tipos de usuarios: Implementar una clase generica gestorDePermisos<T> extends UsuarioBase> que permita asignar permisos especificos a los usuarios basandose en el tipo de usuario

// 5. Uso de prototipos: Añade metodos adicionales a la clase Admin utilizando prototipo para agregar nuevas funcionalidades sin modificar directamente la clase como por ejemplo, actualizarConfiguraciones)

// Solución del ejercicio 2

class UsuarioBase {
  nombre: string;
  correo: string;

  constructor(nombre: string, correo: string) {
    this.nombre = nombre;
    this.correo = correo;
  }

  verPermisos(): string[] {
    return ['Ver permisos basicos'];
  }
}

class Admin extends UsuarioBase {
    constructor(nombre: string, correo: string) {
    super(nombre, correo);
  }

  verPermisos(): string[] {
    return super.verPermisos().concat(['Gestionar usuarios']);
  }

  agregarUsuario(usuario: UsuarioBase): void {
    // Agregar código para agregar un nuevo usuario
  }
  eliminarUsuario(usuario: UsuarioBase): void {
    // Agregar código para eliminar un usuario
  }
  editarUsuario(usuario: UsuarioBase): void {
    // Agregar código para editar un usuario
  }
  listarUsuarios(): UsuarioBase[] {
    // Agregar código para listar los usuarios
    return [];
  }
  // Agregar metodos adicionales para gestionar usuarios
  // ...
}

class SuperAdmin extends Admin {
  constructor(nombre: string, correo: string) {
    super(nombre, correo);
  }

  verPermisos(): string[] {
    return super.verPermisos().concat(['Gestionar sistema']);
  }

  // Agregar metodos adicionales para gestionar el sistema
  // ...
}

class GestorDePermisos<T extends UsuarioBase> {
    private usuarios: T[];
    constructor() {
    this.usuarios = [];
  }
  agregarUsuario(usuario: T): void {
    this.usuarios.push(usuario);
  }
  eliminarUsuario(usuario: T): void {
    const index = this.usuarios.indexOf(usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }
  editarUsuario(usuario: T, nuevoUsuario: T): void {
    const index = this.usuarios.indexOf(usuario);
    if (index !== -1) {
      this.usuarios[index] = nuevoUsuario;
    }
  }
  listarUsuarios(): T[] {
    return this.usuarios;
  }
}

// Uso de la clase GestorDePermisos
const gestorDePermisosAdmin = new GestorDePermisos<Admin>();
const admin = new Admin('Administrador', 'admin@example.com');
gestorDePermisosAdmin.agregarUsuario(admin);
console.log(gestorDePermisosAdmin.listarUsuarios()[0].verPermisos()); // Debería imprimir ['Ver permisos basicos', 'Gestionar usuarios']
admin.agregarUsuario(new UsuarioBase('Usuario 1', 'usuario1@example.com'));
console.log(gestorDePermisosAdmin.listarUsuarios()[0].verPermisos()); // Debería imprimir ['Ver permisos basicos', 'Gestionar usuarios', 'Agregar usuario', 'Eliminar usuario', 'Editar usuario', 'Listar usuarios']

