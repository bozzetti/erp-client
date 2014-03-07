
function App() {
    this.server_url = null;
    this.logged = false;
    //this.updateLayout();
}
App.prototype.updateLayout = function() {
	if(this.logged) {
		$('#content').load('../html/layout.html');
	}else{
		$('#content').load('../html/login.html');
	}  
},
App.prototype.status = function() {
    if(retorno) {
    	this.logged = false;
    }else{
    	this.logged = true;
    }
},
App.prototype.login = function() {
	this.logged = true;
	var pass = $('#password').val();
	var email = $('#email').val();
	if(pass != '' && email != '') {
		$.post(this.server_url + '/api/auth/login', {'email': email, 'pass': pass})
		  .done(function( data ) {
		    alert( "Data Loaded: " + data );
		  });
	}
}
App.prototype.logout = function() {
	this.logged = false;
	alert('deslogado');
}

//var url = ;

$(document).ready(function() {                
    var appz = new App();
    App.prototype.server_url = 'http://erp-local';
    App.prototype.updateLayout();
});