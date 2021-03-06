const gameBoard = document.getElementById("game-board");
const escolherPedra = document.getElementById("pedra");
const escolherPapel = document.getElementById("papel");
const escolherTesoura = document.getElementById("tesoura");

let game = new Game(gameBoard);

escolherPedra.addEventListener("click", () => {
  game.jogadaPedra();
  game.jogadaComputador();
  game.verificaVencedor();
  document.location.reload();
});

escolherPapel.addEventListener("click", () => {
  game.jogadaPapel();
  game.jogadaComputador();
  game.verificaVencedor();
  document.location.reload();
});

escolherTesoura.addEventListener("click", () => {
  game.jogadaTesoura();
  game.jogadaComputador();
  game.verificaVencedor();
  document.location.reload();
});
