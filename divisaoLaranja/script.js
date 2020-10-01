function divisaoLaranja (quantidadeLaranjas, quantidadeVizinhos) {
    var laranja = quantidadeLaranjas / (quantidadeVizinhos + 1)
    var sobra = quantidadeLaranjas - (Math.trunc(laranja) * quantidadeVizinhos)
    console.log("Olá Joselito, você pode dar " + Math.trunc(laranja) + " laranjas para seus vizinhos e ficar com " + sobra + " laranjas")
}

divisaoLaranja(10, 2)