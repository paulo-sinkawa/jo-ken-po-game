class Game {
  constructor(gameBoard) {
    // Sera onde iremos criar toda a plataforma do jogo.
    this.gameBoard = gameBoard; //
    this.inicio = "../assets/images/inicio.jpg";
    this.opcao = [
      "../assets/images/tesoura.jpg",
      "../assets/images/papel.jpg",
      "../assets/images/pedra.jpg",
    ]; // Esta variavel foi criada para que lá na frente, poderemos embaralhar as opcoes e ramdomizar a opcao do computador.
    this.tesoura = "../assets/images/tesoura.jpg";
    this.papel = "../assets/images/papel.jpg";
    this.pedra = "../assets/images/pedra.jpg";
    this.boardCriado = false;
  }

  boardGenerator() {
    if (this.boardCriado) {
      alert("O board ja está criado");
      return;
    }
    const imgStart = document.createElement("img");
    imgStart.setAttribute("src", this.inicio);
    this.gameBoard.appendChild(imgStart);
    this.boardCriado = true;
  }
}
