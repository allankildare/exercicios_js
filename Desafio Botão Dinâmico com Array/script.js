// Criar uma funçao que cria um botao dinamico
// Solução com While
var nomeBotoes = ["Allan", "Marcus", "Henryque", "Lorenzo", "Amanda", "Gabriel"]

function criaBotao () {
    var contador = -1
    while (contador < (nomeBotoes.length - 1)) {
        contador++
        document.write(`<button onclick="alert('` + nomeBotoes[contador] + `')">` + nomeBotoes[contador] + `</button>`)
    }
}

criaBotao()