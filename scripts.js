// variaveis globais
let qtdCartas = parseInt(prompt("Com quantas cartas você quer jogar? (apenas números pares entre 4 e 14)"));
let contadorCertas = 0;
let contadorJogadas = 0;
const foramViradas =[];
const todasAsCartas = ['img/fiestaparrot.gif', 'img/fiestaparrot.gif','img/bobrossparrot.gif', 'img/bobrossparrot.gif', 'img/explodyparrot.gif', 'img/explodyparrot.gif', 'img/metalparrot.gif', 'img/metalparrot.gif', 'img/revertitparrot.gif', 'img/revertitparrot.gif', 'img/tripletsparrot.gif', 'img/tripletsparrot.gif', 'img/unicornparrot.gif', 'img/unicornparrot.gif']
//interromper jogadas.
let bloquear = false;
function iniciarJogo() {
    //escolher o numero de cartas
    while (qtdCartas !== 4 && qtdCartas !== 6 && qtdCartas !== 8 && qtdCartas !== 10 && qtdCartas !== 12 && qtdCartas !== 14) {
        qtdCartas = parseInt(prompt("Com quantas cartas você quer jogar? (apenas números pares entre 4 e 14)"));
    }
    //embaralha cartas
    function comparador() { 
        return Math.random() - 0.5; 
    }
    //embaralha cartas e define quantidade.
    let cartasEmbaralhadas = [];
    cartasEmbaralhadas = todasAsCartas;
    cartasEmbaralhadas.length = qtdCartas;
    cartasEmbaralhadas = cartasEmbaralhadas.sort(comparador);
    //dar as cartas
    for (let i =0; i < qtdCartas; i++) {
        let mesa = document.querySelector('.conteudo');
        mesa.innerHTML += `        
        <div class="carta" onclick="virar(this)">
            <div class="front-face face">
                <img src="img/front.png" alt="frente">
            </div>
            <div class="back-face face">
                <img src="${cartasEmbaralhadas[i]}" alt="verso">
            </div>
        </div>
    `;
    }
}
function virar(virada) {
    //a carta está virada?
    const foiVirada = virada.classList.contains('ativa');
    //se a carta não está virada, vire e adicione à lista de cartas viradas.
    if (bloquear){
        return;
    }
    if(foiVirada === false) {
        virada.classList.add('ativa');
        foramViradas.push(virada);
    } 
    // se duas cartas foram viradas, verifique se possuem o mesmo conteudo.
    while (foramViradas.length === 2) {
        const cartasAtivas = document.querySelectorAll('.ativa')
        if (foramViradas[0].innerHTML === foramViradas[1].innerHTML){
            cartasAtivas[0].classList.add('certa');
            cartasAtivas[1].classList.add('certa');
            cartasAtivas[0].classList.remove('ativa');
            cartasAtivas[1].classList.remove('ativa');
            cartasAtivas[0].setAttribute('onclick', "");
            cartasAtivas[1].setAttribute('onclick', "");
            contadorCertas +=2;
        } 
        // caso não possuam o mesmo conteudo, vire as duas cartas para baixo.
        else {
            function desvirar() {
                    cartasAtivas[0].classList.remove('ativa');
                    cartasAtivas[1].classList.remove('ativa');
                if (bloquear) {
                    bloquear = false;
                }
            }
            //impede que uma terceira carta seja virada antes de desvirar as duas anteriores.
            bloquear = true;
            setTimeout(desvirar,1000)
        }
        foramViradas.length = 0;
    }
    contadorJogadas++
    if (contadorCertas === qtdCartas){
        setTimeout(alert,1000,`Você ganhou em ${contadorJogadas} jogadas!`)
    }
}
//inicia o jogo ao carregar a página.
window.onload = iniciarJogo;