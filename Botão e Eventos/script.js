function criaBotao (x, y, z) {
    var botao = document.createElement("button")
    var textoBotao = document.createTextNode(x)
    botao.appendChild(textoBotao)
    
    botao.addEventListener("mouseover", () => botao.textContent = y)
    botao.addEventListener("mouseout", () => botao.textContent = x)
    botao.addEventListener("mousedown", () => botao.textContent = z)
    botao.addEventListener("mouseup", () => botao.textContent = y)
    document.body.appendChild(botao)
}

criaBotao("Neutro", "Em cima", "Pressionando")