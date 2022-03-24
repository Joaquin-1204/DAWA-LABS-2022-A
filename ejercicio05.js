/**
 * Cree una función que reciba un número entero J y un arreglo de enteros, la 
 * función debe retornar el arreglo con los enteros desplazados hacia la izquierda 
 * según el entero J. Ej. J = 2 y el arreglo original es igual a [1,2,3,4,5] el
 * resultado debe ser [3,4,5,1,2], NOTA. Investigue el método Shift() de Javascript 
 * para obtener el resultado.
 */

let mov, arreglo, pnum, recorrido;
let aentero = []
mov = parseInt(prompt("Ingrese numero de desplazamiento"))
arreglo = parseInt(prompt("Ingrese numero la longitud del array"))
resultado(mov, arreglo, aentero, pnum, recorrido) 

function resultado(){
    for(i = 0; i < arreglo; i++){
        let contenido = parseInt(prompt("Ingrese numero para agregar en el array"))
        aentero.push(contenido)
    }
    pnum = aentero.indexOf(mov) + 1
    for(i = 0; i < pnum; i++) {
        recorrido = aentero.shift()
        aentero.push(recorrido)
    }
    window.alert(aentero)
}
