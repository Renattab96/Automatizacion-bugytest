
describe('Verificación de Comentarios', () => {
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.login('Renattabe96', 'Hol4-2024'); // Usa el comando personalizado
    //user Renattabe96 valido
  });

  it('Debe permitir dejar un comentario y mostrarlo en la tabla de comentarios', () => {
    cy.get('.card').first().click();
    cy.scrollTo('bottom');
    
    cy.get('#comment').should('not.exist')
    cy.get('.form-group').should('not.exist')

    // Verificar que el comentario aparezca en la tabla
    cy.get('tbody').within(() => {
      cy.get('p.comment').should('contain', 'Este comentario es de prueba');
    });
  });
});
