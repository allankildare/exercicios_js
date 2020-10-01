// Variables
var name = "Allan Kildare" 
var children = "nenhum filho planejado para os próximos 5 anos"
var city = "Vancouver, no Canadá"
var job = "desenvolvedor web ou na área de TI"

var item1 = "Facão" 
var item2 = "isqueiro"
var item3 = "sapato"

var animal = "macaco"

// Functions
function lineBreak () {
    document.write("<br><br>")
}

function vidente () {
    document.write("A vidente prevê: " + name + " terá " + children + " e viverá em " + city + ", trabalhando como " + job)
    lineBreak()
}

function desertIsland () {
    document.write("Eu levaria para uma ilha deserta: " + item1 + ", " + item2 + " e um " + item3)
    lineBreak()
}

function chooseAnimal () {
    document.write("Num primeiro momento, eu gostaria de ser um ", animal)
    document.write("<br>")

    animal = "guepardo"
    document.write("Pensando melhor, prefiro ser um ", animal)
}

vidente()
desertIsland()
chooseAnimal()