describe('Pruebas de Votación', () => {
    beforeEach(() => {
      cy.login('renattabenitez96', 'Juan Perez ');
    });
  
    it('Debe permitir votar si el usuario tiene la sesión activa', () => {
      cy.get('.card').first().click(); // Navegar a la página del auto
  
      // Verificar que el botón de votar esté visible y votar
      cy.get('#voteButton').should('be.visible').click();
  
      // Verificar que el voto se haya registrado
      cy.get('#voteCount').should('contain', '1'); // Ajusta según el incremento esperado
    });
  });
  