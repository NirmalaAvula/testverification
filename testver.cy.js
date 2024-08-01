describe('testverification',()=>{
    it('example',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").find('submit').then(function(e){
       // cy.get("[class='oxd-text oxd-text--h5 orangehrm-login-title']").find('h5').then(function(e){
 //method text to obtain text contents
         const t = e.text()
         expect(t).to.contains('Login')

        })


    })
    
})