describe('testverification',()=>{
    it('example',()=>{
        cypress.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cypress.get('oxd-text oxd-text--h5 orangehrm-login-title').find(login).then(function(e){
 //method text to obtain text content
         const t = e.text()
         expect(t).to.contains('login')

        })


    })
})