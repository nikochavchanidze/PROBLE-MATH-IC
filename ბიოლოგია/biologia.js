function simaglisgamotvla() {
    var m = document.getElementById('mama').value;
    var d = document.getElementById('deda').value;
    var mm = parseInt(m);
    var dd = parseInt(d);
    var s = dd + mm;
    var sh = s/2;
    var shk = sh + 5;
    document.getElementById('simagle').innerHTML = shk;
}
function simaglisgamotvlaq() {
    var m = document.getElementById('mamaq').value;
    var d = document.getElementById('dedaq').value;
    var mm = parseInt(m);
    var dd = parseInt(d);
    var s = dd + mm;
    var sh = s/2;
    var shq = sh - 5;
    document.getElementById('simagleq').innerHTML = shq;
}

