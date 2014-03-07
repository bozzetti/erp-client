
function App(server_url) {

    this.server_url = server_url;
    this.logged = false;
    this.updateLayout();
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
		$.ajax({
		  type: "POST",
		  url: this.server_url + '/api/auth/login',
		  data: {'email': email, 'pass': pass},
		  success: this.updateLayout,
		});
	}
}
App.prototype.logout = function() {
	this.logged = false;
	alert('deslogado');
}

var url = 'http://erp-local/';

$(document).ready(function() {                
    var app = new App(url);
    console.log(app);
});