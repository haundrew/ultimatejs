/*
    indice validar que no sea manor a cero y que el elemento exista
    en el array 
*/

function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe';
    }

    return arr[idx];
}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);