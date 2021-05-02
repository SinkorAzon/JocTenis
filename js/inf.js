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
      "Joc Creat per Eric Quintana.\n\n" +
      "Manual Joc Tenis.\n" +
      "La condició per guanyar es que un dels 2 jugadors arribi\n" +
      "a 10 punts.\n" +
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
  var error = 0;

  //Save Inf user
  if(nom == "" || nom == null){
    document.getElementById("errorNom").innerHTML = "Error text massa llarg.";
    error = error + 1;
  } else {
    localStorage.setItem('nomKey', nom);
  }

  if(cognoms == "" || cognoms == null){
    document.getElementById("errorCognom").innerHTML="Error text massa llarg.";
    error = error + 1;
  } else {
    localStorage.setItem('cognomsKey', cognoms);
  }

  if(edat == "" || edat == null){
    document.getElementById("errorEdat").innerHTML="Error edat ha d'estar entre [ 0 - 105 ]";
    error = error + 1;
  } else {
    localStorage.setItem('edatKey', edat);
  }

  if(nif == "" || nif == null){
    document.getElementById("errorNif").innerHTML="Error text massa llarg.";
    error = error + 1;
  } else {
    localStorage.setItem('nifKey', nif);
  }

  if(email == "" || email == null){
    document.getElementById("errorEmail").innerHTML="Error text massa llarg.";
    error = error + 1;
  } else {
    localStorage.setItem('emailKey', email);
  }

  localStorage.setItem('provinciaKey', provincia);

  if(dataN == "" || dataN == null){
    document.getElementById("errorEmail").innerHTML="Error la data s'ha introduir.";
    error = error + 1;
  } else {
    localStorage.setItem('dataNKey', dataN);
  }

  if(telefon == "" || telefon == null){
    document.getElementById("errorTelefon").innerHTML="Error text massa llarg.";
    error = error + 1;
  } else {
    localStorage.setItem('telefonKey', telefon);
  }

  if(dataN == "" || dataN == null){
    document.getElementById("errorHora").innerHTML="Error la hora s'ha introduir.";
    error = error + 1;
  } else {
    localStorage.setItem('horaKey', hora);
  }

  localStorage.setItem('errorKey', error);
}
