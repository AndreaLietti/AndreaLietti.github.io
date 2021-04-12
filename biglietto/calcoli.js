function calcola(form) {
    var chilometri, prezzo;
    chilometri = document.getElementById("chilometri").value;
    var scelta = document.getElementById("numero-persone").selectedIndex;
    if (form.class1.checked) {
        switch (scelta) {
            case 0:
                prezzo = (0.43 * 1) * chilometri;
                break;
            case 1:
                prezzo = (0.43 * 2) * chilometri;
                break;
            case 2:
                prezzo = (0.43 * 3) * chilometri;
                break;
            case 3:
                prezzo = (0.43 * 4) * chilometri;
                break;
            case 4:
                prezzo = (0.43 * 5) * chilometri;
                break;
            case 5:
                prezzo = (0.43 * 6) * chilometri;
                break;
        }
    }
    else if (form.class2.checked)
    {
        switch (scelta) {
            case 0:
                prezzo = (0.21 * 1) * chilometri;
                break;
            case 1:
                prezzo = (0.21 * 2) * chilometri;
                break;
            case 2:
                prezzo = (0.21 * 3) * chilometri;
                break;
            case 3:
                prezzo = (0.21 * 4) * chilometri;
                break;
            case 4:
                prezzo = (0.21 * 5) * chilometri;
                break;
            case 5:
                prezzo = (0.21 * 6) * chilometri;
                break;
        }
    }
    document.getElementById("prezzo").innerHTML = "Prezzo:" + prezzo;
}