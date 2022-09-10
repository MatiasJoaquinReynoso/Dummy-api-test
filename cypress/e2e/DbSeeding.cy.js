describe (() => {

    beforeEach(() => {
        cy.task('db:teardown')
        cy.task('db:seeding')
    })

})