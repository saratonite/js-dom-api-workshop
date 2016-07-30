function checkConnection(){

  // Create XHR
  var xhr = new XMLHttpRequest();
  var file = "index.html";
  var randomNum = Math.round(Math.random()*10000);

  xhr.open('HEAD',file+'?r='+randomNum);

  xhr.onreadystatechange = function(){

    console.log(xhr.status);

    if(xhr.status >=200 && xhr.status < 304){
      return true;
    }
    else{
      alert("Connection lost");
    }

  }

    xhr.send();

}
