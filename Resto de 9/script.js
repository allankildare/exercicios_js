function restoNove (numero) {
    var divisao = numero / 9
    var resto = Math.trunc(divisao) - divisao

    if (resto < 0) {
        document.write("O resto de " + numero + " divididos por 9 é: não tem resto, ou ele é negativo")
    } else if (resto === 0) {
        document.write("O resto de " + numero + " divididos por 9 é: nenhum")
    } else {
        document.write("O resto de " + numero + " divididos por 9 é: " + resto)
    }
    
    // console.log(divisao, resto) -> Usei para testar o resultado da divisao e seu resto

}

restoNove(9) // imprime "O resto de 9 divididos por 9 é: nenhum"