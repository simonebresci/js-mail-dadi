

// Controllo email
// var email = prompt('Inserisci la tua mail:');
// var accessoOk = false;;
// accessoOk = controllaAccesso(email);

// Forza gioco in debug
email='debug';
accessoOk= true;

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

  // Chiedi quanti lanci vuoi fare
  var nMatch = prompt('Quanti lanci vuoi fare?');
  var okInt = false;
  okInt = verificaInt(nMatch);
  if (okInt === true){

    // Inizializza  var dadi
    var dadoUtente = 0, dadoCpu = 0;
    var nWinUtente = 0, nWinCpu = 0;
    for( var i=1; i<=nMatch; i++){

    console.log('====  MATCH N:' + i + '  ====');
    // Lancia dado utente
    dadoUtente = lanciaDado();

    // Lancia dado cpu
    dadoCpu = lanciaDado();

    // Stabilisci vincitore lancio
    console.log('Utente: ' + dadoUtente);
    console.log('Cpu   : ' + dadoCpu);

    var winner='empty';
    console.log('THE WINNER IS ...' );

    // Confronta dadi
    if (dadoUtente > dadoCpu){
      winner = 'Utente';
      nWinUtente++;
    }else if(dadoUtente < dadoCpu){
      winner = 'CPU';
      nWinCpu++;
    }else{
      winner = 'Pareggio!';
    }

    console.log(winner);

    console.log('=====================');
    console.log('                     ');

    }

    // Stabilisci vincitore partita
    console.log('Utente ha vinto ' + nWinUtente);
    appo=''
    for(i=0;i<nWinUtente;i++){ appo+='X';}
    console.log(appo);

    console.log('Cpu ha vinto ' + nWinCpu);
    appo=''
    for(i=0;i<nWinCpu;i++){ appo+='X';}
    console.log(appo);

    // Confronta dadi
    if (nWinUtente > nWinCpu){
      winner = 'Utente';
    }else if(nWinUtente < nWinCpu){
      winner = 'CPU';
    }else{
      winner = 'NESSUNO';
    }

    // VINCITORE FINALE
    console.log(winner + ' HA VINTO LA PARTITA!');
  }




}


function verificaInt(dato){
  var esito;
  if (isNaN === true){
    // Non è un numerico
    esito='false';
  }else{

    // TODO: Controlla ulteriore se intero o float

    esito = true;
  }

  return esito;
}

function lanciaDado(){
  var dado;
  dado = Math.floor(Math.random() * 6 + 1 );
  return dado;
}
