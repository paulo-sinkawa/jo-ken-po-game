class Game {
  constructor(gameBoard) {
    // Sera onde iremos criar toda a plataforma do jogo.
    this.gameBoard = gameBoard; //
    this.inicio = "../assets/images/inicio.jpg";
    // this.opcao = [
    //   "../assets/images/tesoura.jpg",
    //   "../assets/images/papel.jpg",
    //   "../assets/images/pedra.jpg",
    // ]; // Esta variavel foi criada para que lá na frente, poderemos embaralhar as opcoes e ramdomizar a opcao do computador.
    this.tesoura = "../assets/images/tesoura.jpg";
    this.papel = "../assets/images/papel.jpg";
    this.pedra = "../assets/images/pedra.jpg";
    this.jogadaFeita = false;
    this.compJajogou = false;
    this.opcaoJogador = "";
    this.opcaoComputador = 0;
  }

  jogadaPedra() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada !");
      return;
    }
    this.opcaoJogador = "pedra";
    this.jogadaFeita = true;
  }

  jogadaPapel() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada !");
      return;
    }
    this.opcaoJogador = "papel";
    this.jogadaFeita = true;
  }

  jogadaTesoura() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada !");
      return;
    }
    this.opcaoJogador = "tesoura";
    this.jogadaFeita = true;
  }

  jogadaComputador() {
    if (!this.compJajogou) {
      this.opcaoComputador = Math.random();
      if (this.opcaoComputador < 0.33333) {
        this.opcaoComputador = "pedra";
        this.compJajogou = true;
      } else if (this.opcaoComputador < 0.66666) {
        this.opcaoComputador = "papel";
        this.compJajogou = true;
      } else {
        this.opcaoComputador = "tesoura";
        this.compJajogou = true;
      }
    }
    return;
  }

  verificaVencedor() {
    if (this.opcaoJogador === "pedra" && this.opcaoComputador === "tesoura") {
      alert("Voce venceu !");
    } else if (
      this.opcaoJogador === "tesoura" &&
      this.opcaoComputador === "papel"
    ) {
      alert("Voce venceu !");
    } else if (
      this.opcaoJogador === "papel" &&
      this.opcaoComputador === "pedra"
    ) {
      alert("Voce venceu !");
    } else if (
      this.opcaoComputador === "pedra" &&
      this.opcaoJogador === "tesoura"
    ) {
      alert("Voce perdeu !");
    } else if (
      this.opcaoComputador === "tesoura" &&
      this.opcaoJogador === "papel"
    ) {
      alert("Voce perdeu !");
    } else if (
      this.opcaoComputador === "papel" &&
      this.opcaoJogador === "pedra"
    ) {
      alert("Voce perdeu !");
    } else {
      alert("Empate !");
    }
  }
}

// verificaVencedor() {
//   const primeiraOpcao =
//     this.opcaoJogador === "pedra" && this.opcaoComputador === "tesoura";
//   const segundaOpcao =
//     this.opcaoJogador === "tesoura" && this.opcaoComputador === "papel";
//   const terceiraOpcao =
//     this.opcaoJogador === "papel" && this.opcaoComputador === "pedra";
//   const quartaOpcao =
//     this.opcaoComputador === "pedra" && this.opcaoJogador === "tesoura";
//   const quintaOpcao =
//     this.opcaoComputador === "tesoura" && this.opcaoJogador === "papel";
//   const sextaOpcao =
//     this.opcaoComputador === "papel" && this.opcaoJogador === "pedra";
//   const setimaOpcao = this.opcaoJogador === this.opcaoComputador;
//   if (primeiraOpcao || segundaOpcao || terceiraOpcao) {
//     alert("O jogador venceu o computador !");
//   } else if (quartaOpcao || quintaOpcao || sextaOpcao) {
//     alert("O computador venceu o jogador !");
//   } else {
//     alert("Empate !");
//   }
// }
