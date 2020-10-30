// this file is read only, you cannot write it
// seu código vem aqui!
function calculaGostos(notas){

    var naoGostaram = 0
    var filmeMediano = 0
    var gostaramDoFilme = 0
    var opniaoFilme = []

    for( var i = 0 ; i < notas.length ; i++){
        if(notas[i] <= 1){
            naoGostaram++
        }else if(notas[i] <= 3){
            filmeMediano++
        }else {
            gostaramDoFilme++
        }
    }

    opniaoFilme = [naoGostaram, filmeMediano, gostaramDoFilme]

    return opniaoFilme;
}
