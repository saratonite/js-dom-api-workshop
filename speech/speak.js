function Speak(text) {
    if(!window.speechSynthesis) {

        console.log('Web Speech api not found')
        return false;
    }
    var synth = window.speechSynthesis;
    var voice = synth.getVoices()[0]

    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voice;
    synth.speak(utterThis)
}