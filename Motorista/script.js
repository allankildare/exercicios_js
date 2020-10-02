function idadeDirigir (idadeUsuario, idadePermissao) {
    if (idadeUsuario >= idadePermissao) {
        document.write("Você pode dirigir!")
    } else {
        document.write("Você não pode dirigir :(")
    }
}

idadeDirigir(18, 18) // imprime "Você pode dirigir"