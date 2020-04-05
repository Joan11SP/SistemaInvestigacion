const cedula = (cad) => {
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud - 1) == total) {
            console.log("Cedula Válida");
            return true;
        } else {
            console.log("Cedula Inválida");
            return false;
        }
    }

}

const validar = (ced) =>{
    if(cedula(ced)===true){
        return true
    }else{
        return false
    }
}

module.exports=validar