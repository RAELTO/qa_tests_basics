
describe("Create and mark-unmark as favorite", function () {
    it("Sign in", function () {
        cy.visit('https://react-redux.realworld.io/#/login')//visits the specified url
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('inuka.saru@gmail.com')//looks for an element with the properties that we provide
        cy.get('input[type="password"]').type('eli987')//it also works with id #idName
        cy.get('.btn').contains('Sign in').should('be.visible').click()//using the button type button to find and click the enter button
        cy.contains('Your Feed', {timeout: 10000}).should('be.visible')//this command works with a timeout of 4 seconds where the Your Feed text should appear or it will fail the test
        //we can extend the default timeout
    })

    it("Create a post", () => {//works with arrow functions too
        cy.contains("New Post").click()
        cy.hash().should('include', '#/editor')//the url contains #/editor
        //cy.location('hash').should('include', '#/editor') //this do the same as cy.hash
        cy.get('input[placeholder="Article Title"]').type('Test2')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test about')//the backslash ignores the apostrophe sign
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test in textarea')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')  //verifying that the article was created
        //cy.url returns the complete url of the current active page
    })

    it("Mark-unmark as favorite", () => {
        cy.get('.nav-link').contains('raelto').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').click()
        //cy.reload()//refreshing the page to check if the post was deleted from favorites, this will reload the page
        //cy.contains('No articles are here... yet.').should('be.visible')
        //cy.go('back')//browser go back
        //cy.go(-1)//works the same as go back
        //cy.go('forward') //go forwards
        //cy.go(1)//also go forwards

    })

});