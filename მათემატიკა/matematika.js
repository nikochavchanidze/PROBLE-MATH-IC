function akvadrateba() {
    var a = document.getElementById('ricxvi').value;
    var xarisx = document.getElementById('xarisxi').value;
    document.getElementById('pasuxisadgili').innerHTML = a**xarisx;
}
function dafesveba() {
    var ricxvif = document.getElementById('ricxvif').value;
    document.getElementById('pasuxisadgilif').innerHTML = Math.sqrt( ricxvif );
}
function pitagora() {
    var kateti1 = document.getElementById('kateti1').value;
    var kateti2 = document.getElementById('kateti2').value;
    var hipkvad = (kateti1*kateti1) + (kateti2*kateti2);
    var hip = Math.sqrt( hipkvad );
    document.getElementById('pasuxisadgilip').innerHTML = hip;
}
function martivitushedgenili() {
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
function fartobi() {
    var x=document.getElementById('sigrdze').value;
    var y=document.getElementById('sigane').value;
    var fartobi=x*y;
    document.getElementById('pasuxiA').innerHTML = fartobi;
}
function moculobaaa() {
    var x =document.getElementById('sigrdzem').value;
    var y =document.getElementById('siganem').value;
    var k =document.getElementById('simagle').value;
    var moculobaa = x*y*k;
    document.getElementById('pasuxiB').innerHTML = moculobaa;
}
function perimetri() {
    var x =document.getElementById('gverdi1').value;
    var y =document.getElementById('gverdi2').value;
    var z =document.getElementById('gverdi3').value;
    var l =document.getElementById('gverdi4').value;
    var xx = parseInt(x);
    var yy = parseInt(y);
    var zz = parseInt(z);
    var ll = parseInt(l);
    var perimetrii = xx + yy + zz + ll;
    document.getElementById('pasuxiC').innerHTML = perimetrii;
}
function kvadratul(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = (b**2) - (4*a*c);
    var am = 1;
    if(d<0){
        am=0;
    }else if(d>0){
        am=2;
    }else{
        am=1;
    }
    
    document.getElementById('pasuxisadgilik').innerHTML = am;
}