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
    this.iniciouOJogo = false; // Somente para verificar a condicao e nao deixar imprimir outra img qndo o botao for clicado.
    this.jogadaFeita = false;
  }

  iniciaOJogo() {
    if (this.iniciouOJogo) {
      alert("O jogo já foi iniciado !");
      return;
    }
    const imgStart = document.createElement("img");
    imgStart.setAttribute("src", this.inicio);
    this.gameBoard.appendChild(imgStart);
    this.iniciouOJogo = true;
    if (this.iniciouOJogo) {
    }
  }

  jogadaPedra() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada !");
      return;
    }
    const imgPedra = document.createElement("img");
    imgPedra.setAttribute("src", this.pedra);
    this.gameBoard.appendChild(imgPedra);
    this.jogadaFeita = true;
  }

  jogadaPapel() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada !");
      return;
    }
    const imgPapel = document.createElement("img");
    imgPapel.setAttribute("src", this.papel);
    this.gameBoard.appendChild(imgPapel);
    this.jogadaFeita = true;
  }

  jogadaTesoura() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada !");
      return;
    }
    const imgTesoura = document.createElement("img");
    imgTesoura.setAttribute("src", this.tesoura);
    this.gameBoard.appendChild(imgTesoura);
    this.jogadaFeita = true;
  }
}

// Criando 3 botoes para substituir o de teste
// botao1 = pedra, botao2 = papel, botao3 = tesoura.

// const imgPedra = document.createElement("img");
// imgPedra.setAttribute("src", this.pedra);
// this.gameBoard.appendChild(imgPedra);
// const imgPapel = document.createElement("img");
// imgPapel.setAttribute("src", this.papel);
// this.gameBoard.appendChild(imgPapel);
// const imgTesoura = document.createElement("img");
// imgTesoura.setAttribute("src", this.papel);
// this.gameBoard.appendChild("src", this.tesoura);
