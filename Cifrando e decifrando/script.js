function cifraComCifraDeCesar( deslocamento, mensagem ) {
    let mensagemEncriptada = []
    let arrayTemp = []

    for (let i = 0; i < mensagem.length; i++) {
        let letraEncriptada = mensagem[i].charCodeAt() + deslocamento

        if (letraEncriptada > 90 && letraEncriptada <= 116 && letraEncriptada <= 142) {
            letraEncriptada -= 26
        } else if (letraEncriptada > 116 && letraEncriptada <= 142) {
            letraEncriptada -= 52
        } else if (letraEncriptada > 142) {
            letraEncriptada -= 78
        }

        arrayTemp.push(letraEncriptada)
    }

    arrayTemp.forEach((e) => mensagemEncriptada.push(String.fromCharCode(e)))
    
    //return mensagemEncriptada.join('')
    console.log(mensagemEncriptada.join(''))
}

// deslocamento 2 e mensagem passados como parametro
cifraComCifraDeCesar(2, "ABCDZ") // saida esperada: CDEFB

/* Adendo
essa funcao esta limitada ao deslocamento 78 com precisao, depois desse
deslocamento, nao havera mais a perfeita precisao.
*/
