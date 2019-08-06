describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1600, 789)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
    cy.get('.row > .col-xl-4 > .btn > span > span').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories/create')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').type('1')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').type('2')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').type('3')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').type('4')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').type('5')
 
    cy.get('.m-portlet__body > .form-body > .form-group > .col-md-6 > #category-image-file').click()
 
 })

})
