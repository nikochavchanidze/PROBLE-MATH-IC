function akvadrateba() {
    var a = document.getElementById('ricxvi').value;
    var xarisx = document.getElementById('xarisxi').value;
    document.getElementById('pasuxisadgili').innerHTML = a**xarisx;
}
function dafesveba(){
    var ricxvif = document.getElementById('ricxvif').value;
    document.getElementById('pasuxisadgilif').innerHTML = Math.sqrt( ricxvif );
}
function pitagora(){
    var kateti1 = document.getElementById('kateti1').value;
    var kateti2 = document.getElementById('kateti2').value;
    var hipkvad = (kateti1*kateti1) + (kateti2*kateti2);
    var hip = Math.sqrt( hipkvad );
    document.getElementById('pasuxisadgilip').innerHTML = hip;
}