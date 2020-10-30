// this file is read only, you cannot write it
function maiorQueNum(array, num)
{
  var maiorQueNum = []
  for ( var i=0 ; i < array.length ; i++){
    if(array[i] > num){
      maiorQueNum.push(array[i])
    }
  }
  return maiorQueNum;
}
