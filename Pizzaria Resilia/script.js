var sla = ["custo", "valor", "nome", "imposto", "lucro liquido"]


function pizza (nome, custo, valorVenda) {
    var lucroBruto = valorVenda - custo
    var lucroLiquido = lucroBruto * 0.911 // Lucro descontando o imposto de 8,9%
    var imposto = lucroBruto * 0.089
    console.log('Para a pizza ' + nome + ' o lucro líquido é de R$ ' + lucroLiquido + ' e o imposto é de R$ ' + imposto)
}

pizza('Marguerita', 20, 36)
// Para a pizza {nome da pizza} o lucro líquido é de R${valor do
//     lucro} e o imposto é de {valor do imposto}