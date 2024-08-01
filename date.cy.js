describe('test',()=>{
    it('testsuite',()=> {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("eq","OrangeHRM")
    cy.get("[placeholder='Username']").type("Admin")
    cy.get("[placeholder='Password']").type("admin123")
    cy.get("[type='submit']").click()
    cy.get('[href="/web/index.php/leave/viewLeaveModule"]').click()
    cy.get('[placeholder="yyyy-dd-mm"]').eq(0).invoke('val').then((value) => {
        cy.log('The value in the first field is: ' + value);
      });
    })
})
