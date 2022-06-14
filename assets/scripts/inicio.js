// let h1 = document.getElementById("h1");
// h1.innerText = "Ta funcionando inicio.html com inicio.js"; // Somente para teste.

const gameBoard = document.getElementById("game-board");
const escolherPedra = document.getElementById("pedra");
const escolherPapel = document.getElementById("papel");
const escolherTesoura = document.getElementById("tesoura");

let game = new Game(gameBoard);

escolherPedra.addEventListener("click", () => {
  game.jogadaPedra();
  game.jogadaComputador();
  game.verificaVencedor();
});

escolherPapel.addEventListener("click", () => {
  game.jogadaPapel();
  game.jogadaComputador();
  game.verificaVencedor();
});

escolherTesoura.addEventListener("click", () => {
  game.jogadaTesoura();
  game.jogadaComputador();
  game.verificaVencedor();
});

//mostrarJogadaComputador() - Evento que vai separar por parte a jogada do jogador, depois ele clicar em
//um botao para fazer a jogada do computador e mostrar a jogada e imprimir o resultado.

// iniciarBtn.addEventListener("click", () => {
//   game.iniciaOJogo();
// });
//
// const jogarPedra = document.getElementById("pedra");
// const jogarPapel = document.getElementById("papel");
// const jogarTesoura = document.getElementById("tesoura");
// jogarPedra.addEventListener("click", () => {
//   game.jogadaPedra();
// });

// jogarPapel.addEventListener("click", () => {
//   game.jogadaPapel();
// });

// jogarTesoura.addEventListener("click", () => {
//   game.jogadaTesoura();
// });

// const opcaoJogador = ""; // Verificar como será lancada a opcao do jogador e verificar qual foi a opcao.
