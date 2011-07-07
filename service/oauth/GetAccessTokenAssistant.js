var GetAccessTokenAssistant = function() {
}

GetAccessTokenAssistant.prototype.run = function(future) {
	var ctoken = this.controller.args.ctoken;
	var csecret = this.controller.args.csecret;
	
	var oa= new OAuth("http://term.ie/oauth/example/request_token.php",
                  "http://term.ie/oauth/example/access_token.php",
                  this.controller.args.ctoken,
                  this.controller.args.csecret,
                  "1.0",
                  null,
                  "HMAC-SHA1")
	oa.getOAuthRequestToken(function(err, token, secret, results) { future.result = { err: err, token: token, secret: secret, results: results}; });
}
