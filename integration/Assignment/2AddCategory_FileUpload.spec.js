describe('Add Category', function() {
	
function FileListItem(a) {
  a = [].slice.call(Array.isArray(a) ? a : arguments)
  for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File
  if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")
  for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])
  return b.files
}

 it('Add Category with Files Upload Retrieving Test Data from External File', function() {

    cy.viewport(1600, 789)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
    cy.get('.row > .col-xl-4 > .btn > span > span').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories/create')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').type('Test Category ENG')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').type('Test Category ESP')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').type('Test Category DEU')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').type('Test Category FR')
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').click()
 
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').type('Test Category ITA')
 
	  
	  cy.fixture('/RobustaColor.png').as('attachment').get('#category-color-image-file').then(function(el) {
		return Cypress.Blob.base64StringToBlob(this.attachment, 'image/png')
		  .then(blob => {
			  
				el[0].files = new FileListItem(new File([blob], 'RobustaColor.png')) 
				
				
				el[0].dispatchEvent(new Event('change', {bubbles: true}))
			  
		  })
	  })
	
    cy.fixture('/SVG.svg').as('attachment').get('#category-image-file').then(function(el) {
      return Cypress.Blob.base64StringToBlob(window.btoa(this.attachment), 'image/png')
		  .then(blob => {
			  
				el[0].files = new FileListItem(new File([blob], 'SVG.svg')) 
				
				
				el[0].dispatchEvent(new Event('change', {bubbles: true}))
			  
      })
      
	  })
    cy.get('.m-form > .m-portlet__body > .m-portlet__foot > .m-form__actions > .btn-accent').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
 })

})
