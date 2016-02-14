console.log("Ajaxjs");
(function(window){

	var ajax = (function(){
		console.log('Hey ajax');

		var ajaxDef = function(){

			this.xhr = new XMLHttpRequest();

		}

		ajaxDef.prototype = {

			init:function(){
				this.xhr.onreadystatechange = function(){
					alert("Hoorey");
				}

				this.xhr.open('GET','data.json',true);
				this.xhr.send();
			}

		};

		return ajaxDef;

	})();

	window.ajax = ajax;

})(window);