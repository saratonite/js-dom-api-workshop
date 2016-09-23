console.log("Script");
var ajax = new ajax();
ajax.init('data.json','GET',function(response){

  console.info("SUCCESS");
  console.log(response);
  document.write((response.response));

});
