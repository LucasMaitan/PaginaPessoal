
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/* codigo para rolagem automatica */

document.addEventListener("DOMContentLoaded", function() {
    var botaoRolar = document.getElementById('bt-contato');

    botaoRolar.addEventListener('click', function() {
        var conteudo = document.querySelector('.email');
        var inicio = window.pageYOffset;
        var destino = conteudo.offsetTop;
        var duracao = 1600; // duração em milissegundos

        function animarRolagem(tempoAtual) {
            var tempoPassado = tempoAtual - inicioTempo;
            var progresso = tempoPassado / duracao;
            
            if (progresso < 1) {
                window.scrollTo(0, inicio + (destino - inicio) * progresso);
                requestAnimationFrame(animarRolagem);
            } else {
                window.scrollTo(0, destino);
            }
        }
        var inicioTempo = performance.now();
        requestAnimationFrame(animarRolagem);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var botaoRolar = document.getElementById('bt-sobre');

    botaoRolar.addEventListener('click', function() {
        var conteudo = document.querySelector('.sobre');
        var inicio = window.pageYOffset;
        var destino = conteudo.offsetTop;
        var duracao = 1000; // duração em milissegundos

        function animarRolagem(tempoAtual) {
            var tempoPassado = tempoAtual - inicioTempo;
            var progresso = tempoPassado / duracao;

            if (progresso < 1) {
                window.scrollTo(0, inicio + (destino - inicio) * progresso);
                requestAnimationFrame(animarRolagem);
            } else {
                window.scrollTo(0, destino);
            }
        }
        var inicioTempo = performance.now();
        requestAnimationFrame(animarRolagem);
    });
});



