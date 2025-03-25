nomeHeroi = "Haskel";
quantidadeExperiencia = 1500;

ehFerro = quantidadeExperiencia <= 1000;
ehBronze = 1001 <= quantidadeExperiencia <= 2000;
ehPrata = 2001 <= quantidadeExperiencia <= 5000;
ehOuro = 5001 <= quantidadeExperiencia <= 7000;
ehPlatina = 7001 <= quantidadeExperiencia <= 8000;
ehAscendente = 8001 <= quantidadeExperiencia <= 9000;
ehImortal = 9001 <= quantidadeExperiencia <= 10000;
ehRadiante = quantidadeExperiencia >= 10001;

nivelHeroi = "";
if (ehFerro) {
  nivelHeroi = "Ferro";
} else if (ehBronze) {
  nivelHeroi = "Bronze";
} else if (ehPrata) {
  nivelHeroi = "Prata";
} else if (ehOuro) {
  nivelHeroi = "Ouro";
} else if (ehPlatina) {
  nivelHeroi = "Platina";
} else if (ehAscendente) {
  nivelHeroi = "Ascendente";
} else if (ehImortal) {
  nivelHeroi = "Imortal";
} else if (ehRadiante) {
  nivelHeroi = "Radiante";
}

console.log(
  `O Herói tem de saldo de ${nomeHeroi} está no nível de ${nivelHeroi}`
);
