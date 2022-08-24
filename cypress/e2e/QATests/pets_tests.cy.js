
describe("Login", function () {

    it("Sign in", () => {//log-in
        cy.visit('https://emerson14.github.io/Pets/view/index.html')//visits the specified url
        cy.get('input[type="email"]').type('admin@example.com')//looks for an element with the properties that we provide
        cy.get('#exampleInputPassword1').type('1234')//it also works with id #idName
        cy.get('button[type="button"]').contains('Entrar').should('be.visible').click()//using the button type button to find and click the enter button
        cy.contains('PETS', {timeout: 10000}).should('be.visible')
    })

    it("Create a pet", () => {
        cy.get('div[data-bs-target="#modalAdopcion"]').contains('Dar En Adopcion').should('be.visible').click()
        cy.get('select[aria-label=".form-select-sm example"]').select(1).should('have.value', 'Perro')
        cy.get('#namePet').type('Caesarr')
        cy.get('input[placeholder="Ingrese raza"]').type('Criollo')
        cy.get('button[type="button"]').contains('Seleccionar imagen').click()
        cy.get('#optDDog1').should('be.visible').click()
        //cy.get('button[type="button"]').contains('Guardar').click()
        //cy.get('button[class="btn btn-danger"]').contains('Cancelar').should('be.visible').click()
    })


});