
/* https://www.kirupa.com/html5/creating_dom_elements_and_other_stuff.htm */
// Create dom element
var batman = document.createElement('div');

// Setting content

batman.textContent = "Hello";

// Adding Style

batman.style.color = "red";


// Append to an element
document.body.appendChild(batman);

var spiderman = document.createElement('p');

spiderman.textContent = "Hey";

//Insert Before

document.body.insertBefore(spiderman,document.querySelector('div'));
