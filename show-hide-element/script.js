document.addEventListener('DOMContentLoaded',function(){

  var p1 = document.querySelector('.p1');
  var p2 = document.querySelector('.p2');

  p2.addEventListener('click',function(){
    console.log(p1.style);

    if(p1.style.display == "none"){
      p1.style.display = "block";
      return;
    }
    p1.style.display ="none";
  });

});
