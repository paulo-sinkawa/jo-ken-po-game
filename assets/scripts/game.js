class Game {
  constructor(gameBoard) {
    // Sera onde iremos criar toda a plataforma do jogo.
    this.gameBoard = gameBoard;
    this.vitoria = "./assets/images/vitoria.jpg";
    this.derrota = "./assets/images/derrota.jpg";
    this.tesoura = "./assets/images/tesoura.jpg";
    this.papel = "./assets/images/papel.jpg";
    this.pedra = "./assets/images/pedra.jpg";
  }
  boardGenerator() {
    const image = document.createElement("img");
  }
}
