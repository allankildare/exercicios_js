/* modela um cachorro 
Pelo menos 3 atributos e
2 metodos
*/

class Catioro {
    constructor() {
        // atributos
        this.cor = 'caramelo'
        this.porte = 'grande'
        this.raca = 'vira-lata'
        this.qtdPatas = 4
        this.sexo = 'feminino'
    }

    // metodos
    latir() {
        console.log('au au')
    }

    fazXixi() {
        console.log('sujou')
    }

    senta() {
        console.log('sentei dono')
    }

    dorme() {
        console.log('ZZZZZ')
    }

    fala(string) {
        console.log(string)
    }
}

// variavel para instanciar a classe
let cachorro = new Catioro()

cachorro.latir() // chamando metodo latir

console.log(cachorro.cor) // mostrando atributo cor

cachorro.senta() // chamando metodo senta

cachorro.fala('Oi, eu estou falando resilientes') // chama o metodo fala