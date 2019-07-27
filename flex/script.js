function startDictation(event) {
  event.preventDefault();
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(e) {
      document.getElementById('transcript').value = e.results[0][0].transcript;
      recognition.stop();
    };

    recognition.onerror = function(e) {
      recognition.stop();
    };
  }
}

document.getElementById('speak').addEventListener('click', startDictation);
