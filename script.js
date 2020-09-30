function quebraLinha () {
    document.write('<br>')
}

function dobrar (num) {
    document.write('O dobro é ', num * 2)
    quebraLinha()
}

function dividirDois (num) {
    document.write('A metade é ', num / 2)
    quebraLinha()
}

function saudacao (name) {
    document.write('Olá ', name, '! ', 'Tudo bem com você?')
}

dobrar(18) // um numero qualquer para dobra-lo
dividirDois(20) // um numero qualquer para chegar a sua metade
saudacao('Allan') // insira qualquer nome