function ini()
{
    var sesso = ["Maschio","Femmina"];
    var a = document.getElementById("sesso");

    for (var i=0;i<sesso.length;i++) {
        a.add(new Option(sesso[i]));
    }

    var ColoreOcchi=["azzurri","verdi","blu","grigi","marroni"];
    var b=document.getElementById("colore");

    for (var i=0;i<ColoreOcchi.length;i++) {
        b.add(new Option(ColoreOcchi[i]));
    }

    var resi=["CO","MI","TO","VA"];
    var b=document.getElementById("residenzaProv");

    for (var i=0;i<resi.length;i++) {
        b.add(new Option(resi[i]));
    }
}