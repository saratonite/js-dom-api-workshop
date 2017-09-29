document.addEventListener('DOMContentLoaded',() => {

    console.log('Yep')

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if( !window.SpeechRecognition ) {
        throw Error('Browser not support speach recognition api')
    }

    let textEl = document.getElementById('text');

    let stopListening = false;
    let sr = new SpeechRecognition();

    sr.interimResults = true;
    sr.lang = 'en-US';


    sr.addEventListener('result', e => {

        let transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .map(ts => {
                console.log(ts);
                
                return ts;
            })

            console.info(transcript);

            textEl.textContent = transcript;

            if(transcript.includes('stop')) {
                stopListening = true;
            }
    })

    sr.start();

    sr.addEventListener('end',e => {

        if( stopListening ) {
            return;
        }

        sr.start();

    });


})