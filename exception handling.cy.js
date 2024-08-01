
it('exception handling',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/login',{failOnStatusCode: false})
  })
  it('exception', () => {  
    cy.on('uncaught:exception', (err, runnable) => {
      if(err.message.includes('Unexpected token')){
        console.log('Application Error Javascript Token')
        return false;
      }
      return true
    })

})