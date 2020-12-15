

// Controllo email
var email = prompt('Inserisci la tua mail:');
var accessoOk = false;;
accessoOk = controllaAccesso(email);

if (accessoOk === true){
  giocoDadi(email);
}else{
  alert('Mi dispiace non puoi giocare');
  }


function controllaAccesso(utenteEmail){
  var arrayLista = ['Gianni@gmail.com','Francesco@gmail.com','Pierberto@gmail.com','Mauro@gmail.com','Ernesto@gmail.com', 'debug'];

  printLista(arrayLista);

  // Cerca mail nella lista
  var esito = false;
  for(var i = 0; i < arrayLista.length; i++){
    if (arrayLista[i] === utenteEmail){
      esito = true;
    }
  }

  //Elemento non trovato
  return esito;

}

function printLista(arrayLista) {
  // Stampa a video utenti ammessi
  for(var i = 0; i < arrayLista.length; i++){
    console.log(arrayLista[i]);
  }
}

// Gioco dadi

function giocoDadi(mailUtente){
  alert('Ciao ' + mailUtente + ', benvenuto nel gioco dei dadi: ');
}
