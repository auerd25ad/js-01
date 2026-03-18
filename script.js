 //alert("Hello, world!")

 function gomb() {
    document.getElementById("szoveg").innerHTML = "Hello, world!";
 }

 function osszead() {
    var szam1 = parseFloat(document.getElementById("szam1").value)
    var szam2 = parseFloat(document.getElementById("szam2").value)
    var eredmeny = szam1 + szam2
    document.getElementById("eredmeny").innerHTML = eredmeny
 }