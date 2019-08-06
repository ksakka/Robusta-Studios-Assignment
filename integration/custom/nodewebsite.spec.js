describe('test_name', function() {
function FileListItem(a) {
  a = [].slice.call(Array.isArray(a) ? a : arguments)
  for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File
  if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")
  for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])
  return b.files
}

 it('what_it_does', function() {
/*
    cy.viewport(1600, 789)
 
    cy.visit('https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file')
 
    cy.get('#header-inner > #main-nav > ul > li:nth-child(2) > .main-nav-link').click()
 
    cy.visit('https://docs.cypress.io/api/api/table-of-contents.html')
 
    cy.get('#header-inner > #main-nav > ul > li:nth-child(3) > .main-nav-link').click()
 
    cy.visit('https://docs.cypress.io/plugins/')
 
    cy.get('#header-inner > #main-nav > ul > li:nth-child(4) > .main-nav-link').click()
 
    cy.visit('https://docs.cypress.io/examples/examples/recipes.html')
 
    cy.get('#header-inner > #main-nav > ul > li:nth-child(5) > .main-nav-link').click()
 
    cy.visit('https://docs.cypress.io/faq/questions/using-cypress-faq.html')
 
    cy.get('#main-nav > ul > li > .main-nav-link > .fa').click()*/
	
	
	
	
 
    cy.viewport(1600, 789)
 
    cy.visit('https://pdfcandy.com/word-to-pdf.html')
	var body = "";
	cy.fixture('/test.docx').as('attachment').get('.dzfile').then(function(el) {
		return Cypress.Blob.base64StringToBlob(this.attachment, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
		  .then(blob => {
			  
				el[0].files = new FileListItem(new File([blob], 'test.docx')) 
				
				
				el[0].dispatchEvent(new Event('change', {bubbles: true}))
			  
		  })
	  })
	  
	  
	  cy.fixture('example.json').then(function(json){
		  body = json.body;
		  console.log(body, "outside")
    cy.get('#gadget-0 > #login-container > #loginform > .field-group > #login-form-username').type(json.username)
		  
		  
	  })
		  console.log(body, "outside")
	
    //cy.get('.inner > .dropzone > .indrop > .MyDropZone > .acontainer').click()
 
 
	
	/*
	
    cy.viewport(1600, 789)
 
    cy.visit('https://jira.soprahronline.com/secure/Dashboard.jspa')
 
    cy.get('#gadget-0 > #login-container > #loginform > .field-group > #login-form-username').type('kareem.sakka')
 
    cy.get('#gadget-0 > #login-container > #loginform > .field-group > #login-form-password').type('K@reem83Doumi@57')
 
    cy.get('#login-container > #loginform > .buttons-container > .buttons > #login').click()
	
	cy.wait(6000) // wait for login to finish
	
    cy.visit('https://jira.soprahronline.com/issues/?jql=project%20%3D%20EFGHII')
 
    cy.get('tbody > #issuerow461604 > .summary > p > .issue-link').click()
 
    cy.get('#opsbar-opsbar-operations > .toolbar-item > div > #opsbar-operations_more > .dropdown-text').click()
 
	 const dropEvent = {
		dataTransfer: {
			files: [
			],
		},
	};
 
 
	 //\fixtures\test.docx
	 cy.fixture('/fixtures/test.docx').as('attachment').get('.form-body > .group > .field-group > .issue-drop-zone').then(function(el) {
		return Cypress.Blob.base64StringToBlob(this.attachment, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
		  .then(blob => {
			  // drag & drop
			  dropEvent.dataTransfer.files.push(blob);
			  cy.get('.form-body > .group > .field-group > .issue-drop-zone').trigger('drop', dropEvent);
			  
			  // file picker
			  
				//el[0].files[0] = blob
				//el[0].dispatchEvent(new Event('change', {bubbles: true}))
				
				//el[0].dispatchEvent(new Event('change', {bubbles: true}))
		  })
	  })

    
 
    cy.get('.aui-list > .aui-list-section > .aui-list-item > #attach-file > .trigger-label').click()
 
    cy.get('.form-body > .group > .field-group > .issue-drop-zone').click()*/
 
 
 })

})

