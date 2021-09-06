class googleObjects {

    getGoToDrive(){
        return cy.get('#drawer > div > div.glue-header__container.glue-header__container--cta > div > a.glue-button.glue-button--medium-emphasis.js-drive-btn')
    }

    getFileToDownload(){
        return cy.get('#\:4 > div > c-wiz > div.i6Fqyc > c-wiz > div > div.zCNSJd > div > div:nth-child(1)')
    }

}
export default googleObjects;  