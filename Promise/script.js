document.addEventListener('DOMContentLoaded',function() {

    console.log('Promise example')

    function afterFiewTime(_time)  {

        var time = _time || 3000;
        return new Promise(function(resolve,reject){
             setTimeout(function(){
                resolve("After "+((time/1000))+' Seconds '); // Yay! Everything went well!
            }, time);
        });

       
    }


    afterFiewTime(5000).then(function(data){

        console.log(data);  

    })

    ajax('data.json')
        .then(function(data){
            console.log('data received ',data)
        })
        .catch(function(errr) {

            console.log(errr);
        })


        // Promise All 

        var p1 = afterFiewTime(7000);
        var p2 = ajax('data.json')

        Promise.all([p1,p2])
            .then(function(values){

                console.log('Values ',values)


            })

            .catch(function(errors){
                console.log('Errors ', err)
            });

})