// this file is read only, you cannot write it
var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = []
var grupoC = []


for(var i = 0; i < alunos.length; i++) {
    if(alunos[i] <= 159) {
        grupoA.push(alunos[i])
    } else if (alunos[i] <= 169) {
        grupoB.push(alunos[i])
    } else {
        grupoC.push(alunos[i])
    }

}
