app.service('UsuarioService', function($http, URLS){
	this.listar = function(callback){
		$http.get(URLS.listar)
		.then(function(response){
			if(response.data && response.data.valido) return callback(response.data);
		});
	}

	this.buscar = function(callback){
		//
	}

	this.registrar = function(data, callback){
		//
	}
});