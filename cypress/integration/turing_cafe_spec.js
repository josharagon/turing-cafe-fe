describe('Page Load', () => {
    beforeEach(() => {
        cy.fixture('reservations.json')
            .then(reservationData => {
                cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
                    statusCode: 200,
                    body: reservationData
                })
            })
        cy.visit('http://localhost:3000/')
    })

    it('Should show title on page load', () => {
        cy.get('h1').contains('Turing Cafe Reservations')
    })

    it('Should show all reservations on page load', () => {
        cy.get('.reservation-cards').children().should('have.length', 4)
    })
})

describe('Making New Reservation', () => {
    beforeEach(() => {
        cy.fixture('reservations.json')
            .then(reservationData => {
                cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
                    statusCode: 200,
                    body: reservationData
                })
            })
        cy.visit('http://localhost:3000/')
    })

    it('Should be able to input new reservation data', () => {
        cy.get('input[name="name"]').type('Cypress').should('have.value', 'Cypress')
        cy.get('input[name="date"]').type('7/11').should('have.value', '7/11')
        cy.get('input[name="time"]').type('7:11').should('have.value', '7:11')
        cy.get('input[name="number"]').type('7').should('have.value', '7')

    })

    it('Should be able to add new reservation to existing list', () => {
        cy.get('input[name="name"]').type('Slurpee')
        cy.get('input[name="date"]').type('7/11')
        cy.get('input[name="time"]').type('7:11')
        cy.get('input[name="number"]').type('11')
        cy.get('.new-button').click()
        cy.get('.reservation-cards').children().should('have.length', 5)
    })
})