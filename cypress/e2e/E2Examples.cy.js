describer('Basic Login auth and Login Form auth test', function () {

    it('Login with empty data',() => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations')
    })
    // OPTION A
    it('Login using auth from Cypress',() => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('p').should('include.text', 'Congratulations')
    })
    // OPTION B (not recommended)
    it('Login with empty data',() => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations')
    })
    // Login Form
    it('Login form using /post request',() => {
        cy.visit('https://the-internet.herokuapp.com')
        cy.request( {
            method: 'POST',
            url:'/authenticate',
            form: true,
            body:{
                username:'tomsmith',
                password:'SuperSecretPassword!',
            }
        })
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')
    })

})