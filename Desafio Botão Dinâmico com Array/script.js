// Criar uma função que cria um botao dinâmico
var nomeBotoes = ["Allan", "Marcus", "Henryque", "Lorenzo", "Amanda", "Gabriel"]

function criaBotao () {
    // Para cada nome no array, criar um botao que chame um alert com o próprio nome do botao
    for (var contador = 0; contador < nomeBotoes.length; contador++) {
        document.write(`<button onclick="alert('` + nomeBotoes[contador] + `')">` + nomeBotoes[contador] + `</button>`)
    }
}

criaBotao()