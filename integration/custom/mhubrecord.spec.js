describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1600, 789)
 
    cy.visit('https://themachineryhub.com/')
 
    cy.get('.site-navigation > .mobile-wrap > #main-menu > .menu-item:nth-child(2) > a').click()
 
    cy.visit('https://themachineryhub.com/about-us-2/')
 
    cy.get('.site-navigation > .mobile-wrap > #main-menu > .menu-item:nth-child(3) > a').click()
 
    cy.visit('https://themachineryhub.com/services/')
 
    cy.get('.site-navigation > .mobile-wrap > #main-menu > .menu-item:nth-child(4) > a').click()
 
    cy.visit('https://themachineryhub.com/contact-us/')
 
    cy.get('.wpcf7-form > p > label > .your-name > .wpcf7-form-control').click()
	
	// Read Data from External File.
	cy.fixture('example.json').then(function(json){
		  cy.get('.wpcf7-form > p > label > .your-name > .wpcf7-form-control').type(json.Name1)
		  cy.get('.wpcf7-form > p > label > .your-email > .wpcf7-form-control').click()
		  cy.get('.wpcf7-form > p > label > .your-email > .wpcf7-form-control').type(json.Email1)
	})
 
    cy.get('.wpcf7-form > p > label > .your-subject > .wpcf7-form-control').click()
 
    cy.get('.wpcf7-form > p > label > .your-subject > .wpcf7-form-control').type('Test')
 
    cy.get('.wpcf7-form > p > label > .your-message > .wpcf7-form-control').click()
 
    cy.get('.wpb_wrapper > #wpcf7-f6-p1482-o1 > .wpcf7-form > p > .wpcf7-form-control').click()
 
 })

})
