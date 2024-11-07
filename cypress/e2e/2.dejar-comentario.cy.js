
describe('Pruebas de  Crear Comentarios', () => {
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.login('Renattabe96', 'Hol4-2024'); // Usa el comando personalizado
    //user Renattabe96 valido
  });

  it('Debe permitir dejar un comentario y mostrarlo en la tabla de comentarios', () => {
    cy.get('.card').first().click();
    cy.scrollTo('bottom');

    cy.get(':nth-child(5) > :nth-child(5) > a').click();  // Selector personalizado
    cy.get('.jumbotron').should('exist')
    cy.get('#comment').scrollIntoView().should('be.visible');
    cy.get('.form-group').should('be.visible');

    cy.get('#comment').type('Este es un comentario de prueba');
    cy.get('.btn').click();

   
    // cy.get('.card-text').scrollIntoView().should('contain', 'Thank you for your vote!');
    cy.get('.card-text', { timeout: 10000 }).scrollIntoView()
     cy.get('.card-text').should('contain', 'Thank you for your vote!');
  });
});
