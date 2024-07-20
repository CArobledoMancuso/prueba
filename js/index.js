function convertirNumero(num) {
    if (num % 2 === 0) {
        return num.toString(2); // Convertir a binario
    } else {
        return num.toString(16); // Convertir a hexadecimal
    }
}

function miInformacion() {
    return {
        nombre: 'Juan Pérez',
        edad: 30,
        nacionalidad: 'Argentina'
    };
}

// Nueva función
function laCajaDePandora(num){
    if (num % 2 === 0) {
      return num.toString(2); // Convertir a binario
    } else {
      return num.toString(16); // Convertir a hexadecimal
    }
}

// Nueva función
function cristianRobledo() {
    return {
      nombre: "Cristian Robledo",
      edad: 30, // Reemplaza con tu edad real
      nacionalidad: "Argentina" // Reemplaza con tu nacionalidad real
    };
  }
