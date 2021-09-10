function simaglisgamotvla() {
  var m = document.getElementById("mama").value;
  var d = document.getElementById("deda").value;
  var mm = parseInt(m);
  var dd = parseInt(d);
  var s = dd + mm;
  var sh = s / 2;
  var shk = sh + 5;
  document.getElementById("simagle").innerHTML = shk;
}

function simaglisgamotvlaq() {
  var m = document.getElementById("mamaq").value;
  var d = document.getElementById("dedaq").value;
  var mm = parseInt(m);
  var dd = parseInt(d);
  var s = dd + mm;
  var sh = s / 2;
  var shq = sh - 5;
  document.getElementById("simagleq").innerHTML = shq;
}
function bavshvisTmisFeri() {
  var dedis = document.getElementById("mom").value;
  var mamis = document.getElementById("dad").value;

  if (dedis == "cisq" && mamis == "cisk") {
    document.getElementById("baganastvalisferi").innerHTML =
      "  99% ცისფერი, 1% მწვანე";
  } else if (dedis == "cisq" && mamis == "mwvk") {
    document.getElementById("baganastvalisferi").innerHTML =
      "  50% მწვანე, 50% ცისფერი";
  } else if (dedis == "mwvq" && mamis == "mwvk") {
    document.getElementById("baganastvalisferi").innerHTML =
      "  75% მწვანე, 25% ცისფერი";
  } else if (dedis == "mwvq" && mamis == "yavk") {
    document.getElementById("baganastvalisferi").innerHTML =
      "  35% მწვანე, 15% ცისფერი, 50% ყავისფერი";
  } else if (dedis == "yavq" && mamis == "cisk") {
    document.getElementById("baganastvalisferi").innerHTML =
      "  50% ყავისფერი, 50% ცისფერი";
  } else if (dedis == "mwvq" && mamis == "cisk") {
    document.getElementById("baganastvalisferi").innerHTML =
      "  50% ცისფერი, 50% მწვანე";
  } else if (dedis == "yavq" && mamis == "mwvk") {
    document.getElementById("baganastvalisferi").innerHTML =
      "  35% მწვანე, 15% ცისფერი, 50% ყავისფერი";
  } else if (dedis == "cisq" && mamis == "yavk") {
    document.getElementById("baganastvalisferi").innerHTML =
      "  50% ყავისფერი, 50% ცისფერი";
  } else {
    document.getElementById("baganastvalisferi").innerHTML =
      "  75% ყავისფერი, 20% მწვანე, 5% ცისფერი";
  }
}
