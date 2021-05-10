function elabora() {
    var punteggio=0;
    var cognome=document.getElementById("cognome").value;
   
       for(var i=0;i<cognome.length;i++){
            
        if(cognome.charAt(i)!=cognome.charAt(i).toUpperCase()){
            alert("Cognome va scritto tutto in maiuscolo");
            break;
        }

       }
        if(document.getElementById("ris1").value=="SQL")
            punteggio++;
        if(document.getElementById("mese").value=="2")
            punteggio++;
        if(document.getElementById("ris3A").checked)
            punteggio++;
        if(document.getElementById("ris4A").checked&&document.getElementById("ris4C").checked)
            punteggio++;
        
            
        if(document.getElementById("ris5").value=="1 byte")
            punteggio++;
        
        document.getElementById("punteggio").innerHTML=punteggio;
}

function UP() {
    var utenteConPunteggio="";
    
    utenteConPunteggio+=(document.getElementById("cognome").value).substring(0,3);

    utenteConPunteggio+=(document.getElementById("nome").value).substring(0,3);

    utenteConPunteggio+=(document.getElementById("mese").value).substring(0,3);
    
    utenteConPunteggio+=(document.getElementById("Anno").value).substring(2,4);

    utenteConPunteggio+=(parseInt(document.getElementById("punteggio").innerHTML)*10).toString();



    document.getElementById("punteggioUtente").innerHTML=utenteConPunteggio;

}