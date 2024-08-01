<reference types="cypress-iframe"/>

import 'cypress-iframe'

describe('check',()=> {
    it('check1',()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("[type='submit']").click()
        cy.wait(5000)
        cy.get('ul>li')
        .find('oxd-main-menu-item active').first().click('force:true')
        // cy.get('#iframe-id').iframe().find(':nth-child(1) > .oxd-main-menu-item > .oxd-text').contains('Admin').click()
        //cy.get("[href='/web/index.php/admin/viewAdminModule']").contains('Admin').click()
        //cy.frameloaded("#Your project: 'Test Project'")
        //cy.iframe().find(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        //cy.get("[:nth-child(2) > .oxd-main-menu-item").click()
        //cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text')
        //cy.iframe().find("[href='/web/index.php/admin/viewAdminModule']").click()
        //cy.wait(5000)
        //cy.get("[href='/web/index.php/admin/viewAdminModule']").click()
       //cy.get("[class='oxd-main-menu']").eq(1).click()

    })
})
