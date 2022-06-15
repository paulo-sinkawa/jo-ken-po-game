class Game {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.jogadaFeita = false;
    this.compJajogou = false;
    this.opcaoJogador = "";
    this.opcaoComputador = 0;
    this.existeVencedor = false;
  }

  jogadaPedra() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada ! Aperte F5 para atualizar a pagina.");
      return;
    }
    this.opcaoJogador = "pedra";
    this.jogadaFeita = true;
    return;
  }

  jogadaPapel() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada ! Aperte F5 para atualizar a pagina.");
      return;
    }
    this.opcaoJogador = "papel";
    this.jogadaFeita = true;
    return;
  }

  jogadaTesoura() {
    if (this.jogadaFeita) {
      alert("Voce ja fez sua jogada ! Aperte F5 para atualizar a pagina.");
      return;
    }
    this.opcaoJogador = "tesoura";
    this.jogadaFeita = true;
    return;
  }

  jogadaComputador() {
    if (!this.compJajogou) {
      this.opcaoComputador = Math.random();
      console.log(this.opcaoComputador);
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
    if (!this.existeVencedor) {
      if (this.opcaoJogador === "pedra" && this.opcaoComputador === "tesoura") {
        alert(
          "O computador escolheu tesoura, voce venceu ! Aperte F5 para jogar novamente"
        );
        this.existeVencedor = true;
        return;
      } else if (
        this.opcaoJogador === "tesoura" &&
        this.opcaoComputador === "papel"
      ) {
        alert(
          "O computador escolheu papel, voce venceu ! Aperte F5 para jogar novamente"
        );
        this.existeVencedor = true;
        return;
      } else if (
        this.opcaoJogador === "papel" &&
        this.opcaoComputador === "pedra"
      ) {
        alert(
          "O computador escolheu pedra, voce venceu ! Aperte F5 para jogar novamente"
        );
        this.existeVencedor = true;
        return;
      } else if (
        this.opcaoComputador === "pedra" &&
        this.opcaoJogador === "tesoura"
      ) {
        alert(
          "O computador escolheu pedra, voce perdeu ! Aperte F5 para jogar novamente"
        );
        this.existeVencedor = true;
        return;
      } else if (
        this.opcaoComputador === "tesoura" &&
        this.opcaoJogador === "papel"
      ) {
        alert(
          "O computador escolheu tesoura, voce perdeu ! Aperte F5 para jogar novamente"
        );
        this.existeVencedor = true;
        return;
      } else if (
        this.opcaoComputador === "papel" &&
        this.opcaoJogador === "pedra"
      ) {
        alert(
          "O computador escolheu papel, voce perdeu ! Aperte F5 para jogar novamente"
        );
        this.existeVencedor = true;
        return;
      } else {
        alert("Empate !");
        this.existeVencedor = true;
        return;
      }
    }
  }
}
