describe('test_name', function() {

 it('what_it_does', function() {
	
	cy.clearCookies()
	
    cy.viewport(1600, 789)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
    cy.get('tbody > .odd:nth-child(7) > td > .m-portlet__nav-link > .la').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories/56/edit')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').type('Cat Eng Edit')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').type('Cat ESP Edit')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').type('DEU Cat Edit')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').type('Cat FR Edit')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').type('Cat ITA Edit')
 
    cy.get('.m-form > .m-portlet__body > .m-portlet__foot > .m-form__actions > .btn-accent').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories/56')
 
 })

})
