document.addEventListener('DOMContentLoaded', function() {

    var msgDiv = document.getElementById('msg')
    var info2 = document.getElementById('info2')
    var info3 = document.getElementById('info3')

    getInfo();

    window.addEventListener("resize", getInfo);

    function getInfo() {
         info2.innerHTML = window.screen.width + 'x' + window.screen.height;
         msgDiv.innerHTML ='Inner Width/Height : ' +  window.innerWidth +' x '+ window.innerHeight;
         info3.innerHTML = 'Pixel Depth : ' + window.screen.pixelDepth;
    }
})