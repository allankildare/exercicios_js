let botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    console.log("apertei")
    sendAPIRequest()
})

async function sendAPIRequest () {
    // let KEY_API = "laQUTbkbRZHvE99chEF5U8VBcDOnqgHcBH2zlnDI"
    // let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY_API}`)
    let res = await fetch(`https://api.nasa.gov/planetary/apod`)
    console.log(res)
    //let dados = res.json()
    //console.log(dados)
}

function usarAPI () {

}