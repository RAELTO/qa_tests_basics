
describe("Login", function () {
    it("Sign in", function () {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('inuka.saru@gmail.com')//looks for an element with the properties that we provide
        cy.get('input[type="password"]').type('admin1234')
        cy.get('button[type="button"]').contains('Sign in').should('be.visible').click()//using the button type button to find and click the enter button
    })
});