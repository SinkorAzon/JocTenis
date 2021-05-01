export var startArray = false;
document.getElementById("startGame").onclick = settingsGame;

function settingsGame(){
  var nPlayer;
  if(document.getElementById("player1").checked == true) {
    nPlayer = document.getElementById("player1").value;
  } else if(document.getElementById("player2").checked == true) {
    nPlayer = document.getElementById("player2").value;
  }

  var dif;
  if(document.getElementById("easy").checked == true) {
    dif = document.getElementById("easy").value;
  } else if(document.getElementById("stan").checked == true) {
    dif = document.getElementById("stan").value;
  } else if(document.getElementById("hard").checked == true) {
    dif = document.getElementById("stan").value;
  } else if(document.getElementById("hell").checked == true) {
    dif = document.getElementById("hell").value;
  }

  var music = document.getElementById("music").value;
  var mapa = document.getElementById("mapa").value;

  
    localStorage.setItem('nPlayerKey', nPlayer);
    localStorage.setItem('difKey', dif);
    localStorage.setItem('musicKey', music);
    localStorage.setItem('mapaKey', mapa);
    startArray = [true, nPlayer, dif, music, mapa];

}
