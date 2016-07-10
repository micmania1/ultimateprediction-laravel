module.exports = {

	'signup': function(browser) {
		browser
			.url('http://up-laravel:8080/signup')
			.waitForElementVisible('.app-container', 1000)
			.setValue('input[name="name"]', 'myusername')
			.setValue('input[name="email"]', 'myusername@example.com')
			.setValue('input[name="password"]', 'password')
			.setValue('input[name="password_confirmation"]', 'password')
			.waitForElementVisible('button[type="submit"]', 1000)
			.end()
	}/*,

	'redirectLoggedInUsers': function(browser) {
		browser.end();
	},

	'logout': function(browser) {
		browser.end();
	},

	'login': function(browser) {
		browser.end();
	}*/
}
