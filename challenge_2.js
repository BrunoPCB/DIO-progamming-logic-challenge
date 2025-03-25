function calculaRanking(derrotas, vitorias) {
  return vitorias - derrotas;
}

derrotas = 50;
vitorias = 1000;

resultado = calculaRanking(derrotas, vitorias);

ehFerro = resultado <= 10;
ehBronze = 11 <= resultado && resultado <= 20;
ehPrata = 21 <= resultado && resultado <= 50;
ehOuro = 51 <= resultado && resultado <= 80;
ehDiamante = 81 <= resultado && resultado <= 90;
ehLendario = 91 <= resultado && resultado <= 100;
ehImortal = resultado >= 101;

nivelHeroi = "";

if (ehFerro) {
  nivelHeroi = "Ferro";
} else if (ehBronze) {
  nivelHeroi = "Bronze";
} else if (ehPrata) {
  nivelHeroi = "Prata";
} else if (ehOuro) {
  nivelHeroi = "Ouro";
} else if (ehDiamante) {
  nivelHeroi = "Diamante";
} else if (ehLendario) {
  nivelHeroi = "Lendário";
} else if (ehImortal) {
  nivelHeroi = "Imortal";
}

console.log(
  `O Herói tem de saldo de ${resultado} está no nível de ${nivelHeroi}`
);
