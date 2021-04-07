let qtd_cartas = parseInt(prompt("Com quantas cartas você quer jogar? (apenas números pares entre 4 e 14)"));

while (qtd_cartas !== 4 && qtd_cartas !== 6 && qtd_cartas !== 8 && qtd_cartas !== 10 && qtd_cartas !== 12 && qtd_cartas !== 14) {
    qtd_cartas = parseInt(prompt("Com quantas cartas você quer jogar? (apenas números pares entre 4 e 14)"));
}