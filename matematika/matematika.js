function akvadrateba() {
    var a = document.getElementById('ricxvi').value;
    var xarisx = document.getElementById('xarisxi').value;
    document.getElementById('pasuxisadgili').innerHTML = a**xarisx;
}
function dafesveba(){
    var ricxvif = document.getElementById('ricxvif').value;
    document.getElementById('pasuxisadgilif').innerHTML = Math.sqrt( ricxvif );
}