function multiplos (valor) {
    var soma = 0
    for (var i = 0; i < valor; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i
        } else if (i < 0) {
            return 0
        }
    }
    return soma
}

// Os multiplos sao: 3, 5, 6 e 9, logo a soma deles deve resultar em 23
console.log(multiplos(10)) // imprime 23