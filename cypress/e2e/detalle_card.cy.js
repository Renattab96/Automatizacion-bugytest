describe('Pruebas de Detalles del Auto', () => {
    beforeEach(() => {
      cy.login('usuario_valido', 'contraseña_valida');
    });
  
    it('Debe mostrar la descripción, especificación y cantidad de votos del auto seleccionado', () => {
      cy.get('.card').first().click(); // Navegar a la página del auto
  
      // Verificar los detalles del auto
      cy.get('#description').should('be.visible');
      cy.get('#specification').should('be.visible');
      cy.get('#voteCount').should('be.visible');
    });
  });
  