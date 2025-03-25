class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  ataque() {
    let ataqueAtual;

    if (this.tipo == "mago") {
      ataqueAtual = "magia";
    } else if (this.tipo == "guerreiro") {
      ataqueAtual = "espada";
    } else if (this.tipo == "monge") {
      ataqueAtual = "artes marciais";
    } else if (this.tipo == "ninja") {
      ataqueAtual = "shuriken";
    }

    return ataqueAtual;
  }

  atacar() {
    console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);
  }
}

ninja = new Heroi("Naruto", 25, "ninja");
ninja.atacar();

guerreiro = new Heroi("Maximus", 40, "guerreiro");
guerreiro.atacar();

mago = new Heroi("Davy Jones", 50, "mago");
mago.atacar();

monge = new Heroi("Saitama", 37, "monge");
monge.atacar();
