(function(window){

	var ajax = (function(){

		var ajaxDef = function(){

			this.xhr = new XMLHttpRequest();

			this.url = "";
			this.method = "GET";

		}

		ajaxDef.prototype = {

			init:function(url,method,success,error){
				var self = this;
				self.method = method || 'GET';
				self.url = url || '';
				this.xhr.onreadystatechange = function(){

					//console.info(self.xhr.status,self.xhr.readyState);
					// Success call
					if(self.xhr.readyState == 4 && self.xhr.status == 200){
						success(self.xhr);
						return true;
					}

					//console.info(self.xhr.responseText);


				};

				this.xhr.onerror = function(e){
					error(e);
				}

				self.xhr.onloadend = function(s){
					console.info("onloadend:fired");
					console.log(s);
				}

				this.xhr.open(this.method,this.url,true);
				this.xhr.send();
			}

		};

		return ajaxDef;

	})();

	window.ajax = ajax;

})(window);
