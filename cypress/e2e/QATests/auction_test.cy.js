
describe("Tests", function () {

    it("Sign in", () => {//log-in
        cy.visit('https://raelto.github.io/auctionRM/view/login.html')
    })

    it("Sign up", () => {
        cy.get('a').contains('Sign Up').should('be.visible').click()
        cy.wait(500);
        cy.get('input[placeholder="Your Username Here"]').type('rael')
        cy.get('#pass').type('1234')
        cy.get('#confirmPass').type('1234')
        cy.get('input[placeholder="Email here"]').type('rael@something.com')
        cy.get('button[type="button"]').contains('Sign Up').should('be.visible').click()
    })

    it("Sign in", () => {
        cy.title().should('eq','log-in')
        cy.location('protocol').should('eq','https:')
        cy.wait(500);
        cy.get('#username').type('rael')
        cy.get('#exampleInputPassword1').type('1234')
        cy.get('button[type="button"]').contains('Enter').should('be.visible').click()
        cy.wait(2000);
        cy.get('a').contains('Logout').should('be.visible').click()//logout
        cy.get('button[type="button"]').contains('Yes, logout').should('be.visible').click()//confirm logout
    })


});