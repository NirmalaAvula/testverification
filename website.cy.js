describe('website', () => {
    it('openapp', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
       cy.get("[placeholder='Username']").type("admin").then(($text1) => {            
          let textValue1 = $text1.text();
          cy.log('Username: ' + textValue1 ); 
      cy.get("[placeholder='Password']").type("admin123")
      cy.get("[placeholder='Password']").should("have.length",1)
      cy.get("[type='submit']").click()
      cy.get("[href='/web/index.php/admin/viewAdminModule']").click()
      cy.get("[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
     // cy.get(".oxd-select-dropdown --postion-bottom").
     //cy.get("select").select(1).invoke("val").should("eq", "lowestprice")
     cy.get('.oxd-select-text-input').contains('-- Select --').click()
      cy.get('.oxd-select-option').contains('Admin').click()
      cy.get("[placeholder='Type for hints...']").type("Burak İkinci")
      cy.get('.oxd-select-text-input').contains('-- Select --').click()
      cy.get('.oxd-select-option').contains('Enabled').click()
      cy.get("[type='submit']").click() 
     // cy.get("input").click()//type("Syam123")
      //cy.get("[type=password]").type(123)
      //cy.get(".oxd-input oxd-input--active").type(S123)
      //cy.get("[type='submit']").click()  oxd-input oxd-input--active
      
      //cy.get(".oxd-input--active").siblings()
      //cy.get("[type='password']").siblings()
    })
  })
})
      
  /*it.only("Validate the dropdown option selection by it's index", () => {
    cy.visit("https://www.bstackdemo.com/")
    cy.get("select").select(1).invoke("val").should("eq", "lowestprice")
    })*/
    


    
  


 
  

  