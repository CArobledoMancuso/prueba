function convertirNumero(num) {
    if (num % 2 === 0) {
        return num.toString(2); // Convertir a binario
    } else {
        return num.toString(16); // Convertir a hexadecimal
    }
}
// index.js

// Función para convertir números a binario o hexadecimal
function convertirNumero(num) {
    if (num % 2 === 0) {
        return num.toString(2); // Convertir a binario
    } else {
        return num.toString(16); // Convertir a hexadecimal
    }
}

// Función con tu nombre que retorna un objeto con nombre, edad y nacionalidad
function miInformacion() {
    return {
        nombre: 'Juan Pérez',
        edad: 30,
        nacionalidad: 'Argentina'
    };
}

// Ejemplos de uso
console.log(convertirNumero(4));  // Output: '100'
console.log(convertirNumero(7));  // Output: '7'
console.log(miInformacion());     // Output: { nombre: 'Juan Pérez', edad: 30, nacionalidad: 'Argentina' }
