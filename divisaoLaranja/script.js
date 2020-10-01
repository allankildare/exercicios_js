function divisaoLaranja (quantidadeLaranjas, quantidadeVizinhos) {
    var laranja = quantidadeLaranjas / (quantidadeVizinhos + 1)
    console.log("Olá Joselito, você pode dar " + Math.round(laranja) + ' laranjas para seus vizinhos e ficar com o restante.')
}

function sobraLaranja (quantidadeLaranjas, quantidadeVizinhos) {
    var laranja = quantidadeLaranjas / (quantidadeVizinhos + 1)
    console.log('Restará para você ' + Math.round(laranja) + ' laranjas' )
} 

divisaoLaranja(69, 12)
sobraLaranja(8, 2)