function dobro() {
    var num = parseInt(document.getElementById("num").value)
    var resposta = document.getElementById('resposta')
    var resultado = ''
  
    resultado += num + ' x 2' + ' = ' + num*2 + '<br />'
    
    resposta.innerHTML = resultado
}

function metade () {
    var num2 = parseInt(document.getElementById("num2").value)
    var resposta2 = document.getElementById("resposta2")
    var resultado2 = ''

    resultado2 += num2 + ' / 2' + ' = ' + num2 / 2 + '<br />'
    resposta2.innerHTML = resultado2
}

function saudacao () {
    var ola = document.getElementById("saudacao").value
    var resposta3 = document.getElementById("resposta3")
    var resultado3 = ''

    resultado3 += 'Olá, ' + ola + '<br>' + 'Tudo bem com você?'
    resposta3.innerHTML = resultado3
}