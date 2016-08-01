console.log('Event add/remove ');

var btn = document.querySelector('button');

function sayHello(){
  alert("Hello");
  // Remove event listener
  btn.removeEventListener('click',sayHello);
}

// Add event listener
btn.addEventListener('click',sayHello);
