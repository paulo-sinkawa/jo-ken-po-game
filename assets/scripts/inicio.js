let h1 = document.getElementById("h1");
h1.innerText = "Jo-Ken-Po"; // Somente para teste.

const gameBoard = document.getElementById("game-board");
const iniciarBtn = document.getElementById("start");

const game = new Game(gameBoard);

iniciarBtn.addEventListener("click", () => {
  game.iniciaOJogo();
});

const jogarPedra = document.getElementById("pedra");
const jogarPapel = document.getElementById("papel");
const jogarTesoura = document.getElementById("tesoura");
jogarPedra.addEventListener("click", () => {
  game.jogadaPedra();
});

jogarPapel.addEventListener("click", () => {
  game.jogadaPapel();
});

jogarTesoura.addEventListener("click", () => {
  game.jogadaTesoura();
});

// Condicoes das jogadas.

const pedra = "pedra"; // Como declarar se a variavel sera por "string" ou pela imagem ? Como vincular a opcao do jogador ? Existe as duas opcoes ?
const tesoura = "tesoura";
const papel = "papel";

const opcaoJogador = ""; // Verificar como será lancada a opcao do jogador e verificar qual foi a opcao.

// primeiraOpcao = opcaoJogador === rock && opcaoComputador === scissors;
// segundaOpcao = opcaoJogador === scissors && opcaoComputador === paper;
// terceiraOpcao = opcaoJogador === paper && opcaoComputador === rock;
// quartaOpcao = opcaoComputador === rock && opcaoJogador === scissors;
// quintaOpcao = opcaoComputador === scissors && opcaoJogador === paper;
// sextaOpcao = opcaoComputador === paper && opcaoJogador === rock;
// setimaOpcao = opcaoJogador === opcaoComputador;

// if (primeiraOpcao  | | segundaOpcao | | terceiraOpcao) {
//   console.log('Vitoria !');
// } else if (quartaOpcao | |  quintaOpcao | |  sextaOpcao){
//   console.log('Derrota !')
// } else if (setimaOpcao) {
//   console.log('Empate !');
//   else {
//     console.log('Erro ! Reinicie o jogo.')
//   }
// }
