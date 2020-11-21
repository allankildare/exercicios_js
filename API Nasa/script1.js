let botao = document.getElementById("botao")

// criacao o objeto XMLHttpRequest e chama a request
let pedido = new XMLHttpRequest()

// evento que altera o atributo readyState
botao.addEventListener('click', function () {
    pedido.onreadystatechange = function (dados) {
    
        let name = document.getElementById("name")
        let photo = document.getElementById("photo")
    
        if ( this.status == 200 && this.readyState == 4 ) {
        //     let string = this.responseText
        //     let json = JSON.parse(string) // converte para JSON
        //     let results = json.results // pega o results do objeto
        //     let arr = results[0] // seleciona o indice do array
    
        //     photo.innerHTML = `<img src="${arr.picture.large}">`
        //     name.textContent = arr.name.first + ' ' + arr.name.last
            console.log(this)
        }
    }
})

/* metodo que inicializa uma requisicao ou incializa uma já existente 
                metodo           URL                */
pedido.open( "GET", "https://api.nasa.gov/planetary/apod?api_key=laQUTbkbRZHvE99chEF5U8VBcDOnqgHcBH2zlnDI" )

console.log(pedido)
// envia a requisicao para o servidor
pedido.send()