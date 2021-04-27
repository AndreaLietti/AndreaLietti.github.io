function elabora() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    //se nome o cognome non sono tutti in caps
    if (nome.toUpperCase() != nome || cognome.toUpperCase() != cognome) {
        alert("Nome e Cognome devono essere MAIUSCOLI");
    }
    else {
        var data = document.getElementById("giorno").value + "/" + document.getElementById("mese").selectedIndex + 1 + "/" + document.getElementById("anno").value;
        //risposta 1
        var risposta1 = document.getElementById("ris1").value;
        //risposta 2
        var risposta2 = document.getElementById("ris2").value;
        //risposta 3
        var risposta3;
        if (document.getElementById("ris3A").checked) {
            ris3 = "statiche";
        } else {
            ris3 = "dinamiche";
        }
        //risposta 4
        var risposta4;
        if (document.getElementById("ris4A").checked) {
            risposta4 = "void ";
        }
        if (document.getElementById("ris4B").checked) {
            risposta4 += "integer";
        }
        if (document.getElementById("ris4C").checked) {
            risposta4 += "char";
        }
        //risposta 5
        var risposta5 = document.getElementById("ris5").value;
        var punti = 0;
        if (risposta1 == "HTML") {
            punti++;
        }
        if (risposta2 == "2") {
            punti++;
        }
        if (risposta3 == "statiche") {
            punti++;
        }
        if (risposta4 == "void char") {
            punti++;
        }
        if (risposta5 == "un byte") {
            punti++;
        }
        document.getElementById("punteggio").innerHTML = "Punteggio: " + punti;
        var temp = cognome.substr(0, 3) + nome.substr(0, 3) + (document.getElementById("mese").value).substr(0, 3) + (document.getElementById("anno").value).substr(2, 2);
        document.getElementById("codiceUtente").innerHTML = "CodiceUtente: " + temp;
        document.getElementById("punteggioUtente").innerHTML ="Punteggio: " + punti * 10;
    }
}

function cancella() {
    document.getElementById("nome").value = " ";
    document.getElementById("cognome").value = " ";
    document.getElementById("giorno").value = " ";
    document.getElementById("mese").selectedIndex = 0;
    document.getElementById("Anno").value = " ";
    document.getElementById("ris1").value = " ";
    document.getElementById("ris2").selectedIndex = 0;
    document.getElementById("ris3A").checked = false;
    document.getElementById("ris3B").checked = false;
    document.getElementById("ris4A").checked = false;
    document.getElementById("ris4B").checked = false;
    document.getElementById("ris4C").checked = false;
    document.getElementById("ris5").value = " ";
}
function UP() {
    document.getElementById("nome").value = "ANDREA";
    document.getElementById("cognome").value = "LIETTI";
    document.getElementById("giorno").value = "6";
    document.getElementById("mese").selectedIndex = 11;
    document.getElementById("anno").value = "2003";
    document.getElementById("ris1").value = "HTML";
    document.getElementById("ris2").selectedIndex = 1;
    document.getElementById("ris3A").checked = true;
    document.getElementById("ris3B").checked = false;
    document.getElementById("ris4A").checked = true;
    document.getElementById("ris4B").checked = false;
    document.getElementById("ris4C").checked = true;
    document.getElementById("ris5").value = "un byte";
}