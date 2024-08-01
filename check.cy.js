describe('check',()=> {
    it('check1',()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("[type='submit']").click()
        //cy.get('ul>li')
        //.find('a.oxd-main-menu-item active')
        cy.get("[href='/web/index.php/admin/viewAdminModule']").contains('Admin').click()
        cy.get("[type='checkbox']").check({force:true}).should('be.checked')
        cy.get(50000)
        cy.get("[type='checkbox']").uncheck({force:true})  //CHECKBOX
        cy.get('[href="/web/index.php/leave/viewLeaveModule"]').click()
        cy.get(".oxd-select-text-input").contains('Select').click({force: true})
        cy.get(".oxd-select-option").contains('Rejected').click()  //DROPDOWN
        cy.get("[href='/web/index.php/admin/viewAdminModule']").contains('Admin').click()
        /*cy.get("tr td:nth-child(2)").each(($e1,index,$list)=>{   //TEXT VERIFICATION
            const storetext=$ele.text();
            if(storetext.includes('Admin')){
                cy.get("nth-child((2)").eq(index).then(function(taskcolumn){
                    const Tasktext = Taskcolumn.text();
                     expect(Tasktext).to.equal("Admin");
                })


            }

        })*/

        //cy.get("[href='/web/index.php/recruitment/viewRecruitmentModule']").contains('Recruitment').click()
        //cy.get(".oxd-icon bi-caret-down-fill oxd-select-text--arrow").click()
        
    })
   describe('tab', function () {   //TAB
   it('tab1', function (){
    // url launch
    cy.visit("https://the-internet.herokuapp.com/windows")
    // delete target attribute with invoke for link
    cy.get('.example>a').invoke('removeAttr','target').click()
    // verify tab url
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    // shift to parent window
   cy.go('back');
   })
})
   
   //--used for test the app
   describe('Alert', function () {   //ALERT
   // test case
   it('Scenario 1', function (){
      // launch url
      cy.visit("https://register.rediff.com/register/register.php");
      // click submit
      cy.get('input[type="submit"]').click();
      // fire event with method on
      cy.on('window:alert',(t)=>{
         //assertions
         expect(t).to.contains('Your full name');
   
       })
    })

    describe('Childwindows', function () {  //CHILDWINDOWS
        // test case
        it('Scenario 1', function (){
           // url launch
           cy.visit("https://the-internet.herokuapp.com/windows")
           // delete target attribute with invoke for link
           cy.get("[href='/windows/new']").invoke('removeAttr', 'target').click()
           // verify child window url
           cy.url()
           .should('include', 'https://the-internet.herokuapp.com/windows/new')
           // shift to parent window
           cy.go('back');
        });
     });

     describe('hiddenelements',function() {   //HIDDEN ELEMENTS
        it('Scenario 1',function(){
            cy.visit("https://www.flipkart.com/")
            cy.get('[title="Login"]').invoke('show')
            cy.contains('Sign Up').click({force: true});

        })

     })
})
    })
