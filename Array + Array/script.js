var arrayNumeros1 = [1, 1, 1]
var arrayNumeros2 = [1, 2, 1]

function somaArrays (array1, array2) {
    var lista1 = 0
    var lista2 = 0
    for (var i = 0; i < array1.length; i++) {
        lista1 += array1[i]
    }
    for (var i = 0; i < array2.length; i++) {
        lista2 += array2[i]
    }
    return lista1 + lista2
}

console.log(somaArrays(arrayNumeros1, arrayNumeros2))