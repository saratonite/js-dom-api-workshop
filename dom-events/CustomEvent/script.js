console.log("Custom Event");

// By Using Event Constructor
var foo = new Event('foo');

// Listen to foo Event
document.addEventListener('foo',function(){
  alert('Foo');
});

document.dispatchEvent(foo);

//Add Custom Data Using CustomEvent() Constructor

var bar = new CustomEvent('bar',{detail:'This is a BAR event'});


document.addEventListener('bar',function(e){

  console.log(e);

  console.log(e.detail);

})

document.dispatchEvent(bar);
