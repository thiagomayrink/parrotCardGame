let qtd_cartas = parseInt(prompt("Com quantas cartas você quer jogar? (apenas números pares entre 4 e 14)"));
let contadorCertas = 0;
let contadorJogadas = 0;
const foramViradas =[];
const todasAsCartas = ['img/fiestaparrot.gif', 'img/fiestaparrot.gif','img/bobrossparrot.gif', 'img/bobrossparrot.gif', 'img/explodyparrot.gif', 'img/explodyparrot.gif', 'img/metalparrot.gif', 'img/metalparrot.gif', 'img/revertitparrot.gif', 'img/revertitparrot.gif', 'img/tripletsparrot.gif', 'img/tripletsparrot.gif', 'img/unicornparrot.gif', 'img/unicornparrot.gif']

function iniciarJogo() {
    //escolher o numero de cartas
    while (qtd_cartas !== 4 && qtd_cartas !== 6 && qtd_cartas !== 8 && qtd_cartas !== 10 && qtd_cartas !== 12 && qtd_cartas !== 14) {
        qtd_cartas = parseInt(prompt("Com quantas cartas você quer jogar? (apenas números pares entre 4 e 14)"));
    }

    //embaralha cartas
    function comparador() { 
        return Math.random() - 0.5; 
    }

    //embaralha cartas e define quantidade.
    let cartasEmbaralhadas = [];
    cartasEmbaralhadas = todasAsCartas;
    cartasEmbaralhadas.length = qtd_cartas;
    cartasEmbaralhadas = cartasEmbaralhadas.sort(comparador);
    
    //dar as cartas
    for (let i =0; i < qtd_cartas; i++) {
        let mesa = document.querySelector('.conteudo')
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
        //else if (foramViradas[0].innerHTML !== foramViradas[1].innerHTML)
        else {
            function desvirar() {
                cartasAtivas[0].classList.remove('ativa');
                cartasAtivas[1].classList.remove('ativa'); 
            }
            setTimeout(desvirar,1000)
        }
        foramViradas.length = 0;
    }
    contadorJogadas++
    if (contadorCertas === qtd_cartas){
        setTimeout(alert,1000,`Você ganhou em ${contadorJogadas} jogadas!`)
        //alert(`Você ganhou em ${contadorJogadas} jogadas!`);
    }
}

window.onload = iniciarJogo;