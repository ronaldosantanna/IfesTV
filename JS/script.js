//Record News = PBxK-PaOSEg // SBT Brasilia = wMDqFzSTmc0

//Para alterar o vídeo coloque o valor da url após o "=". 
//EX: https://www.youtube.com/watch?v=wMDqFzSTmc0
//o valor é "wMDqFzSTmc0".

var videos = 'PBxK-PaOSEg';

//Para alterar a frase do dia insira a nova frase entre as aspas duplas. 
//EX: var frase = "Tudo que vai volta";
//A frase sempre tem de estar entre aspas, podendo ser simples ou duplas.
//Por padrão coloque aspas duplas, mas se dentro da frase aparecer 
//aspas duplas coloque aspas simples.
//EX de uma citação: '"A situação da Grécia é crítica"'

var frase = "Nunca desista das coisas que fazem você sorrir";

//Para alterar os avisos siga o mesmo padrão da mudança de frase, 
//caso tenho menos que 3 avisos apenas apague o texto dentro das aspas duplas
//EX: var aviso2 = "";

var aviso1 = "Não haverá aula dia 7 por motivos de detetização do campus";
var aviso2 = 'Dia 21 ocorrerá o evento "Semana Cultural" no campus';


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    height: '65%',
    width: '98%',
    control: false,
    videoId: videos,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.setVolume(100);
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();  
}



function atualizaRelogio(){ 
  var momentoAtual = new Date();
  
  var vhora = momentoAtual.getHours();
  var vminuto = momentoAtual.getMinutes();
  var vsegundo = momentoAtual.getSeconds();
  
  var vdia = momentoAtual.getDate();
  var vmes = momentoAtual.getMonth() + 1;
  var vano = momentoAtual.getFullYear();
  
  if (vdia < 10){ vdia = "0" + vdia;}
  if (vmes < 10){ vmes = "0" + vmes;}
  if (vhora < 10){ vhora = "0" + vhora;}
  if (vminuto < 10){ vminuto = "0" + vminuto;}
  if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

  dataFormat = vdia + " / " + vmes + " / " + vano;
  horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

  document.getElementById("data").innerHTML = dataFormat;
  document.getElementById("hora").innerHTML = horaFormat;

  setTimeout("atualizaRelogio()",1000);
}



document.getElementById("avisos").innerHTML += "<p>" + aviso1 + "</p>";
document.getElementById("avisos").innerHTML += "<p>" + aviso2 + "</p>";



document.getElementById("frase").innerHTML += "<marquee>" + frase + "</marquee>";
