// this file is read only, you cannot write it
function filme(personagens, filmes, lancamentos, id)
{
  // Escreva abaixo o seu código:
  if(id > 0 && id <= filmes.length) {
    id--
    return personagens[id] + " é um personagem do filme " + filmes[id] + " que estreou no cinema em " + lancamentos[id]  + "."
  } else {
    return "Essa não é uma opção válida."
  }

}
