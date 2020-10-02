function idadeBeber (idadeUsuario, idadePermissao) {
    if (idadeUsuario >= idadePermissao) {
        document.write("Você pode beber")
    } else {
        document.write("Você não pode beber, lamento")
    }
}

idadeBeber(14, 18) // imprime "Você não pode beber, lamento" ufaaa