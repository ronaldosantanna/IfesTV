//Record News = PBxK-PaOSEg // SBT Brasilia = wMDqFzSTmc0

//Para alterar o vídeo coloque o valor da url após o "=". EX: https://www.youtube.com/watch?v=wMDqFzSTmc0
//o valor é "wMDqFzSTmc0".
var listVideos = ['PBxK-PaOSEg','QEB_pubP9Vk', 'XREYt6K4m_Q', 'vwhew4LZPsk','4hjjyBgsyo0'];



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
    videoId: listVideos[0],
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
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
