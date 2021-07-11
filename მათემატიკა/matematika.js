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
function martivitushedgenili(){
    var ricxvims = document.getElementById('martivia?').value;
    var shedgenilia = false;
    for(i=0; i< ricxvims;i++){
        if(ricxvims%i==0 && i!==1){
            shedgenilia = true;
            break;
        }
    }
    if(shedgenilia = true){
        document.getElementById('pasuxisadgilims').innerHTML = ('შედგენილია');
    }else if(shedgenilia = false){
        document.getElementById('pasuxisadgilims').innerHTML = ('მარტივია');
    }
}
//მინდა დაბეჭდოს რიცხვი მარტივია თუ შედგენილი