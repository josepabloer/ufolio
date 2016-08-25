app.service('UsuarioService', function($http, URLS){

	this.listar = function(callback){
		$http.get(URLS.usuario.listar)
		.then(function(response){
			if(response.data && response.data.valido) return callback(response.data);
		});
	}

	this.buscar = function(id ,callback){

		$http.get(URLS.usuario.buscar + id)
		.then(function(response){
			if(response.data && response.data.valido) return callback(response.data);
		});
		
	}

	this.registrar = function(data, callback){
		//
	}
});