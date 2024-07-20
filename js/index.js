function laCajaDePandora(num){
        if (num % 2 === 0) {
          return num.toString(2); // Convertir a binario
        } else {
          return num.toString(16); // Convertir a hexadecimal
        }
    }