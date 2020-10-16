// 1° algoritmo

// index.of
function assiduidade (matriculados, presentes) {
    var listaMatriculados = ["Guilhermina", "Allan", "João", "Gabriel", "Ana"];
    
    for (var i = 0; i < listaMatriculados.length; i++) {
        var listaPresentes = ["Guilhermina", "Allan", "João"];
        var newArray = []
        var faltosos = listaPresentes.indexOf(listaMatriculados[i])
        if (faltosos != -1) {
            faltosos++ 
            console.log(faltosos[i])
        }
    }
}

assiduidade()
// Imprime quantos alunos responderam ao formulário

// - Criar uma lista de chamada
// - Percorrer a lista de chamada
// - Verificar assinatura do aluno (de acordo com a totalAlunos)
// - Se o nome estiver lá
// - Botar na lista alunosPresentes
// - Cria lista alunosFaltosos
// - Coloca os alunos não presentes na lista alunosFaltosos
// - Mostra os alunosPresentes
// - Sinaliza os alunosFaltosos