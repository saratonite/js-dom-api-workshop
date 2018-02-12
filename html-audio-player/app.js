document.addEventListener('DOMContentLoaded', function() {

    var player = document.getElementById('player')
    console.log(player)
    player.controls = false;

    player.addEventListener('loadeddata', function() {
        console.log(`Source ${player.currentSrc}`)
        console.log(`Duration : ${player.duration}`)
    })
    function play() {
        player.play();

        console.log(`Playing Volume ${player.volume}`)
        
    }

    function pause() {
        player.pause(); 
    }

    function stop() {
        player.pause();

        player.currentTime = 0;

    }

    function mute() {
        player.volume = 0;
    }

    // Custom controller buttons

    var playBtn = document.getElementById('play')
    var pauseBtn = document.getElementById('pause')
    var stopBtn = document.getElementById('stop')
    var muteBtn = document.getElementById('mute')

    var vloumeRange = document.getElementById('volumeRange');

    playBtn.addEventListener('click', play)
    pauseBtn.addEventListener('click', pause)
    stopBtn.addEventListener('click', stop)
    muteBtn.addEventListener('click', mute)

    vloumeRange.addEventListener('change', function(e) {

        console.log(`Range Value : ${e.target.value}`)

        var cVol = e.target.value < 1 ? 0 : e.target.value/100;
        
        player.volume = cVol;
    })
});