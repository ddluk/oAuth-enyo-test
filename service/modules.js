if (typeof require === "undefined") {
	require = IMPORTS.require;
}

require.paths.unshift(__dirname + '/lib/oauth-node/lib/');

OAuth = require('oauth').OAuth;