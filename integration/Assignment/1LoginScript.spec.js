describe('Login1111', function() {

    it('Login retrieving credentials from external file', function() {

    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/auth/login')
	
	cy.clearCookies()
    cy.log('Cache cleared')	
    cy.viewport(1600, 789)
	
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/auth/login')
 
    cy.get('.m-login__container > .m-login__signin > .m-login__form > .form-group:nth-child(2) > .form-control').click()
	
	// Read Email, Password Data from External File.
	cy.fixture('LoginData.json').then(function(json){
		  cy.get('.m-login__container > .m-login__signin > .m-login__form > .form-group:nth-child(2) > .form-control').type(json.Email)
		  cy.get('.m-login__container > .m-login__signin > .m-login__form > .form-group > .m-login__form-input--last').click()
		  cy.get('.m-login__container > .m-login__signin > .m-login__form > .form-group > .m-login__form-input--last').type(json.Password)
	})
 
    cy.get('.m-login__container > .m-login__signin > .m-login__form > .m-login__form-action > .btn').click()
 
    cy.log('Logged in successfully')
})
})
