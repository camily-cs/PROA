//criando ARRAY para armazenar os OBJETOS onde estao os dados de cada musica
var musicas = [
    //objeto 0:
    {
    titulo:'You got it',
    artista:'Vedo',
    src:'music/VEDO - You Got It (Tradução_Legendado) (128 kbps).mp3',
    img:'img/img2.jpg'
},
    //objeto 1:
    {
    titulo:'Dona de mim',
    artista:'IZA',
    src:'music/IZA - Dona de Mim (128 kbps).mp3',
    img:'img/img3.jpg'
},    
    //objeto 2:
    {
    titulo:'Yoncé',
    artista:'Beyoncé',
    src:'music/Beyoncé - Yoncé (Lyrics) (128 kbps).mp3',
    img:'img/img4.jpg'
}
];
//

//VARIAVEIS
var musica = document.querySelector('audio');
//variavel definindo musica inicial (objeto 0)
var indexMusica = 0;

var duracaoMusica = document.querySelector('#fim');

var imagemAlbum = document.querySelector('img');

var nomeMusica = document.querySelector('#descricao h2');

var nomeArtista = document.querySelector('#descricao i');
//

//carregando os dados da musica logo ao atualizar a pag
renderizarMusica(indexMusica);


//EVENTOS:
//document.querySelector('.botao-play')-selecionando um elemento atraves da classe botao-play
//addEventListener-adc evento ao botao
//('click')-evento de tipo click
//tocarMusica-funcao que sera executada apos o evento click
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

//fazendo o mesmo para o botao pause
document.querySelector('.botao-pause').addEventListener('click', pausarMusica); 

//Adicionando um evento a var musica, utilizando a funcao atualizarBarra para mover a barra de progressao conforme a musica e tocada
musica.addEventListener('timeupdate', atualizarBarra);


//
//ARROW FUNCTIONS-funcoes anonimas(sem nome) para icones com as classes anterior e proxima (para as setas para trocar de musica)
document.querySelector('.anterior').addEventListener('click', () => {
    //possibilitando voltar uma musica
    indexMusica--;

    //tratamento de erro para quando clicar na seta ANTERIOR na musica de objeto 0
    if (indexMusica < 0){
        indexMusica = 2;
    };

    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    //possibilitando mudar para proxima musica(iterando)
    indexMusica++;

    //tratamento de erro para quando clicar na seta PROXIMA na musica de objeto 2
    if (indexMusica > 2){
        indexMusica = 0;
    };

    renderizarMusica(indexMusica);
});
//


//FUNCOES:
//criando funcao para renderizar musicas, inserindo valores dos objetos presentes no array "musicas"
//index-leva as posicoes que cada objetos ocupa dentro do array
function renderizarMusica(index){
    //redefinindo valor do src, ou seja, mudando de musica
    musica.setAttribute('src', musicas[index].src);
    
    //criando evento para quando a musica terminar de carregar, carregar tbm seus dados
    musica.addEventListener('loadeddata', () => {
        //redefinindo o nome da musica
        nomeMusica.textContent = musicas[index].titulo;
        //redefinindo nome do artista
        nomeArtista.textContent = musicas[index].artista;
        //redefinindo imagem
        imagemAlbum.src = musicas[index].img;
        //exibindo a duracao total da musica
        /* duracaoMusica.textContent = (Math.floor(musica.duration)); */
    });
}



//criando a funcao tocar a musica:
function tocarMusica(){
    //dando play na musica
    musica.play();
//substituindo o botao de play pelo botao de pause:
    //document.querySelector('.botao-pause')-selecionando um elemento atraves da classe botao-pause
    //.style.display = 'block'-alterando o css para deixar o botao de pause visível;
    document.querySelector('.botao-pause').style.display = 'block'
    //alterando o css, deixando o botao de play oculto
    document.querySelector('.botao-play').style.display = 'none'
}


//criando a funcao para pausar a musica:
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block'
    document.querySelector('.botao-pause').style.display = 'none'
}


//criando funcao para mover a barra de progresso conforme a musica toca:
function atualizarBarra(){
//criando var e inserindo o elemento pela tag (let-funciona apenas dentro da function)
    let barra = document.querySelector('progress');

//calculando a porcentage da musica apos dar o play e preenchendo a barra de progresso de acordo com essa porcentagem
    //Math.floor-arredonda para o numero menor mais proximo
    //musica.currentTime-segundos tocados
    //musica.duration-duracao da musica
    //OBS: estamos dividindo os segundos ja tocados pela duracao da musica e multiplicando por 100 para transformar em porcentagem
    //+ '%' - concatenando o calculo com o simbolo de porcentagem
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';


/* //criando var e inserindo o elemento pela classe inicio
    let tempoPercorrido = document.querySelector('#inicio');
    //mudando o conteudo do texto conforme a musica toca, até chegar ao currentTime(tempo total da musica)
    tempoPercorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime)) ; */
}


//funcao para converter segundos em minutos
/* function segundosParaMinutos(){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos =  segundos % 60;

    //fazendo o campo de segundos ter 2 casas decimais (tipo 0:00)
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    //retornando minuto:segundos
    return campoMinutos+ ':' +campoSegundos;
}; */

