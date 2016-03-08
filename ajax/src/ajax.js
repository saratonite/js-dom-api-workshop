console.log("Ajaxjs");
(function(window){

	var ajax = (function(){
		console.log('Hey ajax');

		var ajaxDef = function(){

			this.xhr = new XMLHttpRequest();

			this.url = "data.json";
			this.method = "GET";

		}

		ajaxDef.prototype = {

			init:function(){
				var self = this;
				this.xhr.onreadystatechange = function(){

					console.info(self.xhr.status,self.xhr.readyState);

					console.info(self.xhr.responseText);


				};

				this.xhr.onerror = function(){
					alert("Errror");
				}

				this.xhr.open(this.method,this.url,true);
				this.xhr.send();
			}

		};

		return ajaxDef;

	})();

	window.ajax = ajax;

})(window);
