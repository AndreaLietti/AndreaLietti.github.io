function GeneraPdf() {
  var doc = new jsPDF();

  doc.setFont("Verdana");
      var imgData = "";

  doc.text(75, 20, "Nome:"+document.getElementById("nome").value);

  doc.text(75, 30, "Cognome:"+document.getElementById("cognome").value);

  doc.text(75, 40, "Numero di telefono:"+document.getElementById("numero").value);

  doc.text(75, 50, "Email:"+document.getElementById("mail").value);

  doc.text(75, 60, "Messaggio:"+document.getElementById("messaggio").value);
  
  doc.addImage(imgData, "JPEG", 15, 40, 60, 60);

  doc.save('FileDiProva.pdf');
}
