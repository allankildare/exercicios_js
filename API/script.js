let botao = document.getElementById("botao")

// criacao o objeto XMLHttpRequest e chama a request
let pedido = new XMLHttpRequest()

botao.addEventListener("click", function() {
    // evento que altera o atributo readyState
    pedido.onreadystatechange = function (dados) {

        let name = document.getElementById("name")
        let photo = document.getElementById("photo")

        if ( this.status == 200 && this.readyState == 4 ) {
            let string = this.responseText
            let json = JSON.parse(string) // converte para JSON
            let results = json.results // pega o results do objeto
            let arr = results[0] // seleciona o indice do array

            photo.innerHTML = `<img src="${arr.picture.large}">`
            name.textContent = arr.name.first + ' ' + arr.name.last
        }
    }
    
    /* metodo que inicializa uma requisicao ou incializa uma já existente 
                 metodo           URL                */
    pedido.open( "GET", "https://randomuser.me/api" );
    
    // envia a requisicao para o servidor
    pedido.send()
    
})