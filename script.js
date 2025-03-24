nomeHeroi = "Haskel"
quantidadeExperiencia = 1500

ehFerro = (quantidadeExperiencia <= 1000)
ehBronze = (1001 <= quantidadeExperiencia <= 2000)
ehPrata = (2001 <= quantidadeExperiencia <= 5000)
ehOuro = (5001 <= quantidadeExperiencia <= 7000)
ehPlatina = (7001 <= quantidadeExperiencia <= 8000)
ehAscendente = (8001 <= quantidadeExperiencia <= 9000)
ehImortal = (9001 <= quantidadeExperiencia <= 10000)
ehRadiante = (quantidadeExperiencia >= 10001)

if (ehFerro) {
    console.log("Ferro")
} else
    if (ehBronze) {
        console.log("Bronze")
    } else
        if (ehPrata) {
            console.log("Prata")
        } else
            if (ehOuro) {
                console.log("Ouro")
            } else
                if (ehPlatina) {
                    console.log("Platina")
                } else
                    if (ehAscendente) {
                        console.log("Ascendente")
                    } else
                        if (ehImortal) {
                            console.log("Imortal")
                        } else
                            if (ehRadiante) {
                                console.log("Radiante")
                            }