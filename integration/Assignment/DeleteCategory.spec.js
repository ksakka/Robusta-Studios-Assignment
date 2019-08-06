describe('Delete', function() {

 it('what_it_does', function() {

    cy.viewport(1600, 789)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
    cy.get('.odd:nth-child(7) > td > form > .btn > .la').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
 })

})
