// window.open("Purchase.aspx","purchaseWin2", "location=0,status=0,scrollbars=0,width=700,height=400");
document.addEventListener("DOMContentLoaded", function() {

    console.log('DOM Loaded')

    var button = document.getElementById('btn')

    btn.addEventListener('click',function(e){

        console.log('Event ',e)

        var childWindow = window.open("childpage.html","purchaseWin2", "location=0,status=0,scrollbars=0,width=700,height=400");
        console.log('Child Window Node ',childWindow);

        childWindow.onload = function() {

            console.log('Child window loaded');

            var contentDiv = childWindow.document.getElementById('childContent');
            var childIframe = childWindow.document.getElementById('childIframe');

            contentDiv.innerHTML = "Hello how are you";
            setTimeout(function(){

                console.log('Thanks');

                contentDiv.innerHTML = "Thanks";

                childIframe.src = "ipages/2.html";
                //childWindow.close();

            },3000);
        }

    })

});