"user strict";
(function(window,document,undefined){

    document.write("Helllo World");

    // Load Event

    window.addEventListener('load',function(event){
       alert("Event:load");
       console.log('window::load - Event');
    });

    document.addEventListener('DOMContentLoaded', function()
    {
    //JavaScript methods go here.
        alert("I love Cofee ::DOMContentLoaded");
        console.log('I love Coffee');
    });


    // The readystatechange event is fired when the readyState attribute of a document has changed
    document.onreadystatechange = function () {
        console.log("Document Ready Satate :"+ document.readyState);
    if (document.readyState == "interactive") {
        console.log("Cool");

    }

    // Unload event
    window.addEventListener('unload', function(event) {
        alert("Event:unload");
       console.log('I am the 3rd one.');
      });

    // Before unload
    window.addEventListener('beforeunload', function(event) {
       alert('Event:beoreunload');
      });

}

})(window,document);
