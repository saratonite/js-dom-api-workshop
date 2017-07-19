document.addEventListener('DOMContentLoaded',function(){
    
    var speakButton = document.querySelector('#btn-speak');
    var inputText = document.querySelector('#input-text');
    
    speakButton.addEventListener('click',function(){

        Speak(inputText.value)
    })
});