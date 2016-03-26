document.addEventListener("DOMContentLoaded",function(){

  setTimeout(function(){

    var p = document.querySelector('p');

    p.classList.add('blue');

  },3000);
});


// Toggle class namw

var p = document.querySelector('p');

p.addEventListener('click',function(){

  console.log(this.classList);

  this.classList.remove('blue');

  this.classList.toggle('red');

});
