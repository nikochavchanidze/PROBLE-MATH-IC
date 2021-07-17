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
    for(i=2; i< ricxvims;i++){
        if(ricxvims%i==0){
            shedgenilia = true;
            break;
        }
    }
    if(shedgenilia === true){
        document.getElementById('pasuxisadgilims').innerHTML = 'შედგენილი';
    }else if(shedgenilia === false){
        document.getElementById('pasuxisadgilims').innerHTML = 'მარტივი';
    }
}
function fartobi(){
    var x=document.getElementById('sigrdze').value;
    var y=document.getElementById('sigane').value;
    var fartobi=x*y;
    document.getElementById('pasuxiA').innerHTML=fartobi;
}
function moculoba(){
    var x=document.getelementbyid('sigrdze').value;
    var y=document.getelementbyid('sigane').value;
    var k=document.getElementById('simagle').value;
    var moculoba=x*y*k;
    document.getelementbyid('pasuxiB').innerHTML=moculoba;
}
function perimetri(){
    var x=document.getelementbyid('sigrdze').value;
    var y=document.getelementbyid('sigane').value;
    var perimetri=(x+y)*2;
    document.getelementbyid('pasuxiC').innerHTML=perimetri;
}