describe('Webelements',()=> {
    it('Scenario 1',()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("[type='submit']").click()
        cy.get("[href='/web/index.php/admin/viewAdminModule']").contains('Admin').click()
        cy.wait(5000);
        cy.get(".orangehrm-container")
        cy.get("tr td:nth-child(2)").each(($e1,index,$list)=>{  //WEBTABLES
            const storetext=$ele.text();
            if(storetext.includes('Admin')){
                cy.get("nth-child((2)").eq(index).then(function(taskcolumn){
                    const Tasktext = Taskcolumn.text();  //TEXT VERIFICATION
                     expect(Tasktext).to.equal("Admin");
                     
                })


            }

        })

    })
        
        describe('Mouseover', function () {
            // test case
            it('Scenario 1', function (){
               // launch URL
               cy.visit("https://learn.letskodeit.com/p/practice");
               cy.get('[href="https://www.letskodeit.com/practice"]').click()
               // show hidden element with invoke
               cy.get('div.mouse-hover-content').invoke('show');  //MOUSEACTIONS
               //click hidden element
               cy.contains('Reload').click();
               // enable cookie logging
      Cypress.Cookies.debug(true)  //COOKIES
      //set cookie
      cy.setCookie('cookie1', 'value1')
      //get cookie by name and verify value
      cy.getCookie('cookie1').should('have.property', 'value', 'value1')
      //clear cookie by name
      cy.clearCookie('cookie')
      //get all cookies
      cy.getCookies()
      //clear all cookies
      cy.clearCookies()
      //verify no cookies
      cy.getCookies().should('be.empty')

    //Asynchronous behaviour
    cy.get('[id="mousehover"]').should('have.text', 'Mouse Hover')
    cy.get('[id="mousehover"]').contains('Mouse Hover').then(function(e){
        const t = e.text()
        // get in Console
        console.log(t)
     })
     // Console message
     console.log("Text Verification")  //text verification

            });
         });
    })
