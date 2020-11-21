/* OBS
as duas proximas funcoes estao limitadas ao deslocamento 78 (com precisao), depois desse
deslocamento, nao havera mais precisao.
*/

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
    return mensagemEncriptada.join('')
}

// deslocamento 2 e mensagem passados como parametro
cifraComCifraDeCesar(2, "ABCDZ") // saida esperada: CDEFB

function desencriptografar(deslocamento, mensagem) {
    let descriptografada = []
    let arrayTemp = []

    for (let i = 0; i < mensagem.length; i++) {
        let letraEncriptada = mensagem[i].charCodeAt() - deslocamento
        
        if (letraEncriptada < 65 && letraEncriptada >= 39) {
            letraEncriptada += 26
        } else if (letraEncriptada < 39 && letraEncriptada >= 13) {
            letraEncriptada += 52
        } else if (letraEncriptada < 13) {
            letraEncriptada += 78
        }

        arrayTemp.push(letraEncriptada)
    }

    arrayTemp.forEach((e) => descriptografada.push(String.fromCharCode(e)))
    

    return descriptografada.join('')
}

desencriptografar(2, "CDEFB") // saida esperada: ABCDZ