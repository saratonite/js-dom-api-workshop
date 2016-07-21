/*

Filereader.js


*/

var fileInput = document.getElementById('input');

 var output = document.getElementById('output');

fileInput.addEventListener('change',openFile);

function openFile(e){

  var input = e.target;

   var reader = new FileReader();

   reader.onload = function(){
     var dataUrl = reader.result;

     output.src = dataUrl;

   }

   reader.readAsDataURL(input.files[0]);


}
output.addEventListener('error',function(event){
  console.log('On Error');
  console.log(event);

});
