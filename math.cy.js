describe('test',()=>{
    it('testsuite',()=> {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("eq","OrangeHRM")
    cy.get("[placeholder='Username']").type("Admin")
    cy.get("[placeholder='Password']").type("admin123")
    cy.get("[type='submit']").click()
    cy.get('[href="/web/index.php/leave/viewLeaveModule"]').click()
    cy.get(".oxd-table-body")
    .find(".oxd-table-card").eq(1)
    .find('[role="cell"]').eq(4)
    .invoke('text')
  .then((text) => {
    const cellValue = text.trim();
    cy.log('Value of the 5th cell in the second row:', cellValue);
    cy.log(Math.round(cellValue))
  });
    })
})