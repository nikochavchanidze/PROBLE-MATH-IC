function simkvrivisgamotvla() {
  var x = document.getElementById("masa").value;
  var y = document.getElementById("moculoba").value;
  var simkvrive = x / y;
  document.getElementById("pasuxi").innerHTML = simkvrive;
}
function wnevisgamotvla() {
  var x = document.getElementById("simkvrive").value;
  var y = document.getElementById("simagle").value;
  var wneva = x * 9.8 * y;
  document.getElementById("pasuxiA").innerHTML = wneva;
}
function wneva() {
  var x = document.getElementById("simdzimisdzala").value;
  var y = document.getElementById("fartobi").value;
  var wnev = x / y;
  document.getElementById("pasuxiB").innerHTML = wnev;
}
function sichkare() {
  var x = document.getElementById("mandzili").value;
  var y = document.getElementById("dro").value;
  var sichqare = x / y;
  document.getElementById("pasuxiC").innerHTML = sichqare;
}
function dro() {
  var x = document.getElementById("mandzili1").value;
  var y = document.getElementById("sichqare").value;
  var dro = x / y;
  document.getElementById("pasuxiD").innerHTML = dro;
}
function mandzili() {
  var x = document.getElementById("drom").value;
  var y = document.getElementById("sichkare").value;
  var mandzili = x * y;
  document.getElementById("pasuxiE").innerHTML = mandzili;
}
function masa() {
  var x = document.getElementById("simkvrivem").value;
  var y = document.getElementById("moculobam").value;
  var masa = x * y;
  document.getElementById("pasuxiF").innerHTML = masa;
}
function moculobaa() {
  var x = document.getElementById("simkvrivemm").value;
  var y = document.getElementById("masam").value;
  var moculoba = x / y;
  document.getElementById("pasuxiG").innerHTML = moculoba;
}
