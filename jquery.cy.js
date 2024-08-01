describe('check',()=> {
    it('check1',()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.get(".orangehrm-login-title").then(function(e){
            Cypress.$(e).find('OrangeHRM')   //JQUERY
            const t = e.text()
            let dropdownValues = [];
            cy.get("[placeholder='Username']").type("Admin")
            cy.get("[placeholder='Password']").type("admin123")
            cy.get("[type='submit']").click()
            cy.get('[href="/web/index.php/leave/viewLeaveModule"]').click()
            cy.get(".oxd-select-text-input").contains('Select').click({force: true})
            cy.get('[role="listbox"]')
            .find(".oxd-select-option")
            .each(($option) => {
                // Extract the text of each option and store in an array
                cy.wrap($option).invoke('text').then((text) => {
                    // Store the text in an array (you may want to declare this array outside this block)
                    // Assuming 'dropdownValues' is declared earlier as an array
                    dropdownValues.push(text.trim()); // trim() removes any leading/trailing whitespace
                });
            }).then(() => {
                // After all options are processed, you can use the 'dropdownValues' array
                // For example, log the array to see the values
                cy.log('Dropdown values:', dropdownValues);
                cy.log(dropdownValues[2])   
                // Now you can use 'dropdownValues' for further assertions or actions
            });
            //let size=arr.length;
            // console.log(arr.length);
            //cy.get(".oxd-icon bi-calendar oxd-date-input-icon")

            //const arr=["Admin"]
            //let size=arr.length;
            //console.log("size");

            

    })
})
})

