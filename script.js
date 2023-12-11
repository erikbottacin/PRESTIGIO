const csvFile = 'DATASET_TIMELINE.csv'; // Sostituisci con il percorso del tuo file CSV

Papa.parse(csvFile, {
  download: true,
  header: true,
  complete: function(results) {
    const arrayDati = results.data; // Otteniamo l'array dei dati dal file CSV

    const contenitore = document.getElementById('contenitore');

    // Creiamo rettangoli basati sui valori nel CSV
    arrayDati.forEach(function(row) {
      const valore = parseInt(row['valore']); // Assicurati di sostituire 'valore' con il nome della colonna contenente i dati dei rettangoli

      const rettangolo = document.createElement('div');
      rettangolo.classList.add('rettangolo');
      rettangolo.style.width = valore * 10 + 'px'; // Imposta la larghezza basata sul valore nel CSV
      contenitore.appendChild(rettangolo);
    });
  },
  error: function(error) {
    console.error('Si è verificato un errore durante il caricamento del file CSV:', error);
  }
});
