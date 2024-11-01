describe('Detalles del Auto', () => {
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.login('renattabenitez96', 'Hol4-2024');
    cy.screenshot('[PASO 1] detalle-card- login a buggytest')
  });

  it('Debe mostrar la descripción, especificación y cantidad de votos del auto seleccionado', () => {
    cy.screenshot('[PASO 2] detalle-card- pantalla principal buggytest')
        cy.wait(50)
        cy.get('.card').first().click()
        // Verificar los detalles del auto
        cy.get('.card-header').should('be.visible')
        cy.get('a > .img-fluid').should('be.visible')
        cy.wait(300)
    //verificar si se tiene detalles de card
    cy.screenshot('[PASO 3]Detalle card- los card ')
        cy.get('.col-md-9 > div > :nth-child(1)').should('be.visible')
        cy.get('.col-md-9 > div > :nth-child(2)').should('be.visible')
        cy.get('.col-md-9 > div > :nth-child(3)').should('be.visible')
        cy.scrollTo('bottom')
    
    cy.screenshot( '[PASO 4] Detalle de Card Datos ')

        cy.wait(10)
        //view more card 
        cy.get(':nth-child(5) > :nth-child(5) > a').click()
        cy.wait(20)
        cy.scrollTo('bottom')
    cy.screenshot('[PASO 5]Detalle card-  - datos del card seleccionado  ')
        // nombre del modelo  si existe o no este dato 
        cy.get('.col-lg-6 > .card-block > a > .img-fluid').should('exist')
        //imagen del modelo si existe o no este dato 
        cy.get('.col-lg-6 > .card-block > a > .img-fluid')
        // votos si existe o no este dato 
        cy.get(':nth-child(2) > :nth-child(1) > h4').should('exist')
        cy.get('.thead-inverse > :nth-child(1)').scrollIntoView().should('be.visible')
    
    cy.screenshot('[PASO 6]Detalle de el auto de  y los comentarios ')
        //titulo si existe o no este dato 
        cy.get('h3').should('exist')
        // cuerpo por parrafo -si existe o no este dato 
        cy.get('my-model > .container > :nth-child(2) > div > :nth-child(1)').should('exist')
        cy.get('.container > :nth-child(2) > div > :nth-child(2)').should('exist')
        
  });
});
