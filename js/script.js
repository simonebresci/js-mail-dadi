// Controllo email
// var email = prompt('Inserisci la tua mail:');
// var accessoOk = false;;
// accessoOk = controllaAccesso(email);

// Forza gioco in debug
email='debug';
accessoOk= true;


if (accessoOk){
  giocoDadi(email);
}else{
  alert('Mi dispiace non puoi giocare');
}


// Funzione controlla accesso al gioco tramite email
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

// Funzione debug per stampare il contenuto di un array
function printLista(arrayLista) {
  // Stampa a video utenti ammessi
  for(var i = 0; i < arrayLista.length; i++){
    console.log(arrayLista[i]);
  }
}

// Logica del gioco dei dadi
function giocoDadi(mailUtente){
  // alert('Ciao ' + mailUtente + ', benvenuto nel gioco dei dadi: ');

  // Scrivi a video nomi utenti
  document.getElementById('player1Utente').innerText = mailUtente;
  document.getElementById('player2Utente').innerText = 'CPU';

  // Chiedi quanti lanci vuoi fare
  // var nMatch = prompt('Quanti lanci vuoi fare?');
  // Forza ad 11 per debug
  nMatch =11;
  var okInt = false;
  okInt = verificaInt(nMatch);
  if (okInt === true){

    // Scrivi a video numero di Round
    // document.getElementById('round').innerText = nMatch;

    // Inizializza  var dadi
    var dadoUtente = 0, dadoCpu = 0;
    var nWinUtente = 0, nWinCpu = 0;
    document.getElementById('player1Dado').innerText = dadoUtente;
    document.getElementById('player2Dado').innerText = dadoCpu;

    for( var i=1; i<=nMatch; i++){

    console.log('====  MATCH N:' + i + '  ====');
    document.getElementById('round').innerText = i;
    // Lancia dado utente
    dadoUtente = lanciaDado();
    document.getElementById('player1Dado').innerText = dadoUtente;
    // Lancia dado cpu
    dadoCpu = lanciaDado();
    document.getElementById('player2Dado').innerText = dadoCpu;

    // Stabilisci vincitore lancio
    console.log('Utente: ' + dadoUtente);
    console.log('Cpu   : ' + dadoCpu);

    var winner='empty';
    console.log('THE WINNER IS ...' );

    // Confronta dadi
    if (dadoUtente > dadoCpu){
      winner = 'Utente';
      document.getElementById('player1Win').innerText = "WINNER";
      document.getElementById('player2Win').innerText = "";
      nWinUtente++;
    }else if(dadoUtente < dadoCpu){
      winner = 'CPU';
      document.getElementById('player1Win').innerText = "";
      document.getElementById('player2Win').innerText = "WINNER";
      nWinCpu++;
    }else{
      winner = 'Pareggio!';
      document.getElementById('player1Win').innerText = "PAREGGIO";
      document.getElementById('player2Win').innerText = "PAREGGIO";
    }

    console.log(winner);

    console.log('=====================');
    console.log('                     ');

    }

    // Stabilisci vincitore partita
    console.log('Utente ha vinto ' + nWinUtente);
    document.getElementById('player1Counter').innerText = nWinUtente;
    appo=''
    for(i=0;i<nWinUtente;i++){ appo+='X';}
    console.log(appo);


    console.log('Cpu ha vinto ' + nWinCpu);
    document.getElementById('player2Counter').innerText = nWinCpu;
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
    document.getElementById('msgBox').innerText = winner + ' HA VINTO LA PARTITA!';

  }




}

// Funzione verificaInt - verifica se un dato è un intero
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


// Funzione lanciaDado del gioco dei dadi
function lanciaDado(){
  var dado;
  dado = Math.floor(Math.random() * 6 + 1 );
  return dado;
}

// Nega variabile
function toggle(status){
  status = !status;
  return status;
}
