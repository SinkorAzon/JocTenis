var navName = window.navigator.appName;
var navVersion = window.navigator.appVersion;
var navInfoSO = window.navigator.appVersion.toLowerCase();
var so = window.navigator.platform;
var lastModidyDate = document.lastModified;
var navIdioma = window.navigator.language;
var hostIp = location.hostname;
var hostUrl = location.host;

function info(){
  window.alert(
      "Navegador: " + navName + "\n" +
      "Versió Navegador: " + navVersion + "\n" +
      "SO Navagador: " + so + "\n" +
      "Ultima Modificació: " + lastModidyDate + "\n" +
      "Idioma: " + navIdioma + "\n" +
      "Ip HostName: " + hostIp + "\n" +
      "Url HostName: http://" + hostUrl + "\n"
    );
}

function infGame(){
  window.alert(
      "Manual Tenis.\n" +
      "La condició per guanyar es que un dels 2 jugadors arribi\n" +
      "a 10 punts." +
      "A mesura que entre els 2 jugadors es van pasan la bola, la " +
      "velocita de la bola es veu incrementada."
    );
}

function saveUser(){
  var nom = document.getElementById("nom").value;
  var cognoms = document.getElementById("cognoms").value;
  var edat = document.getElementById("edat").value;
  var nif = document.getElementById("nif").value;
  var email = document.getElementById("email").value;
  var provincia = document.getElementById("provincia").value;
  var dataN = document.getElementById("dataN").value;
  var telefon = document.getElementById("telefon").value;
  var hora = document.getElementById("hora").value;

  //Save Inf user
  localStorage.setItem('nomKey', nom);
  localStorage.setItem('cognomsKey', cognoms);
  localStorage.setItem('edatKey', edat);
  localStorage.setItem('nifKey', nif);
  localStorage.setItem('emailKey', email);
  localStorage.setItem('provinciaKey', provincia);
  localStorage.setItem('dataNKey', dataN);
  localStorage.setItem('telefonKey', telefon);
  localStorage.setItem('horaKey', hora);
}
