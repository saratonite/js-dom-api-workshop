var p = document.querySelector('p');
document.addEventListener("DOMContentLoaded",function(){

  setTimeout(function(){



    //p.classList.add('blue');

  },3000);
});

var btnAddBlue = document.getElementById('btn-add-blue');
var btnAddRed = document.getElementById('btn-add-red');
var btnToggleRed = document.getElementById('btn-toggle-red');
var btnRemoveRed = document.getElementById('btn-remove-red');
var btnHaseRed = document.getElementById('btn-has-red');

btnAddBlue.addEventListener('click',e=>{
  p.classList.add('blue');
});

btnAddRed.addEventListener('click',()=>{
  p.classList.add('red');
});

btnToggleRed.addEventListener('click',()=>{

  p.classList.toggle('red');

});

btnRemoveRed.addEventListener('click',()=>{
  p.classList.remove('red');
})
btnHaseRed.addEventListener('click',()=>{
  alert(hasClass('red',p));
})


// Toggle class namw

var p = document.querySelector('p');

p.addEventListener('click',function(){

  console.log(this.classList);

  this.classList.remove('blue');

  this.classList.toggle('red');

});

function hasClass(className,element){
  var idx = element.classList.value.split(' ').indexOf(className);
  if(idx > -1) return true;
  return false;
}
