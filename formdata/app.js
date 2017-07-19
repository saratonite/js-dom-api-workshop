console.log("Formdata");

document.addEventListener('DOMContentLoaded',function(){

    var submitButton = document.querySelector('#submit');
    var myForm = document.querySelector('#myform');

    console.log(myForm)

    submitButton.addEventListener('click',function(){
        var form = new FormData(myForm);
        form.append('newName','Hello')
        console.log(form);
        console.log(form.entries());

        // Initiate ajax
        var xhr = new XMLHttpRequest;
        
        xhr.open('POST', '/', true);
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send(form);
        xhr.onreadystatechange = function(res) {
            console.log(res)
        }
    })

   


});