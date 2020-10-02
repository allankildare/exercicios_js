
function semaforoControle (semaforoCor) {
    if (semaforoCor == "verde") {
        document.write("Pode passar!")
    }
    if (semaforoCor == "amarelo") {
        document.write("Melhor frear")
    } 
    if (semaforoCor == "vermelho") {
        document.write("Pare já!")
    }
}

semaforoControle("verde") // imprime "Pode passar"