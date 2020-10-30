// this file is read only, you cannot write it
function series(prefixo, array)
{
    // Escreve sua função abaixo:
    var prefixArray = []
    for(var i = 0; i < array.length; i++) {
        prefixArray[i] = prefixo + " " + array[i]
    }
    return prefixArray
    
}
