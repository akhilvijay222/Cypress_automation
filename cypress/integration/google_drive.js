import googleObjects from '../support/googlePageObject.js'

const googleObj = new googleObjects()

describe('Google Login', function () {
    beforeEach(function () {
      cy.loginByGoogleApi()
    })
  
    it('Shows onboarding', function () {
      cy.contains('Google Drive').should('be.visible')
    })

    it('Entering into the Google Drive page', function () {
      cy.contains('Go to Drive').should('be.visible')
      googleObj.getGoToDrive().should('be.visible')
      googleObj.getGoToDrive().first().click()
      
    })

    it('Selecting the file', function () {
      
      googleObj.getFileToDownload.should('be.visible')
      googleObj.getFileToDownload.rightclick()
    })

    it('Downloading the selected file', function () {
      cy.contains('Download').should('be.visible')

      if(cy.contains('Download').first().click()){
        cy.log("File Downloaded Successfully!!!")
      }
      
    })
})


  


