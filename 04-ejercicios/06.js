/* 
    crear algoritmo que devuelva cantidad
    de numeros positivos de un array
*/

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let cantidad = 0;
    for (elemeto of arr) {
        if (elemto > 0){
            cantidad++;
        }
    }
    return cantidad;
}

let resultado = cuantosPositivos(array)
console.log(resultado);