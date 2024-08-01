describe('asser',()=> {
    it('suite1',()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("[type='submit']").click()
        cy.get("[href='/web/index.php/time/viewTimeModule']").click()
        cy.get("[type='submit']").should("be.visible").and("be.enabled")
        cy.get("[class='oxd-autocomplete-text-input oxd-autocomplete-text-input--active']").type("enter..")
        cy.get("[href='/web/index.php/pim/viewPimModule']").click()
        cy.get("[class='oxd-form-actions']").contains("Reset")
        /*it.only("Validate the dropdown option ", () => {
            cy.visit("https://www.bstackdemo.com/")
           cy.get("select").select(1).invoke("val").should("eq", "lowestprice")
           cy.get("select").select(2).invoke("val").should("not.eq", "lowestprice")

            })*/

    })

})