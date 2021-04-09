let qtd_cartas = parseInt(prompt("Com quantas cartas você quer jogar? (apenas números pares entre 4 e 14)"));
let contadorAtivas = 0;
let contadorJogadas = 0;
const foramViradas =[];
const todasAsCartas =['img/fiestaparrot.gif', 'img/bobrossparrot.gif', 'img/explodyparrot.gif', 'img/metalparrot.gif', 'img/revertitparrot.gif', 'img/tripletsparrot.gif', 'img/unicornparrot.gif',]

function iniciarJogo() {
    //escolher o numero de cartas
    while (qtd_cartas !== 4 && qtd_cartas !== 6 && qtd_cartas !== 8 && qtd_cartas !== 10 && qtd_cartas !== 12 && qtd_cartas !== 14) {
        qtd_cartas = parseInt(prompt("Com quantas cartas você quer jogar? (apenas números pares entre 4 e 14)"));
    }
    //dar as cartas
    for (let i =0; i < (qtd_cartas/2); i++) {
        let mesa = document.querySelector('.conteudo')
        mesa.innerHTML += `        
        <div class="carta" onclick="virar(this)">
            <div class="front-face face">
                <img src="img/front.png" alt="frente">
            </div>
            <div class="back-face face">
                <img src="${todasAsCartas[i]}" alt="verso">
            </div>
        </div>
            
        <div class="carta" onclick="virar(this)">
            <div class="front-face face">
                <img src="img/front.png" alt="frente">
            </div>
            <div class="back-face face">
                <img src="${todasAsCartas[i]}" alt="verso">
            </div>
        </div>
    `;
    }
}

function virar(virada) {
    //a carta está virada?
    const foiVirada = virada.classList.contains('ativa');
    
    //se a carta não está virada, vire.
    if(foiVirada === false) {
        virada.classList.add('ativa');
        foramViradas.push(virada);
        console.log(foramViradas)
    } else if (foramViradas.length >= 2) {
        foramViradas

    } else {
        virada.classList.remove('ativa');
        foramViradas.length = (foramViradas.length-1);
        console.log(foramViradas)
    }

    contadorJogadas++
}




window.onload = iniciarJogo;