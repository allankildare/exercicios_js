let botao = document.querySelector("#botao")
let pedido = new XMLHttpRequest();

let contador = 1

botao.addEventListener("click", function(){
    pedido.onreadystatechange = function( dados ) {
        let nome = document.getElementById("nome-pok")
        let img = document.getElementById("imagem")

        if ( this.status == 200 && this.readyState == 4 )
        {
            let texto = this.responseText
            let json = JSON.parse(texto)
            let results = json.name
            console.log(json)
            
            img.innerHTML = `<img src="${json.sprites.front_default}">`
            nome.textContent = results
        }
    }
    
  
    pedido.open("GET", `https://pokeapi.co/api/v2/pokemon/${contador}`)
    pedido.send()
    contador += 1
    
})