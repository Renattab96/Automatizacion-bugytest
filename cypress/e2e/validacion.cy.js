describe('Validación de funciones con sesión activa', () => {
  beforeEach(() => {
    // Utilizamos el comando personalizado para iniciar sesión
    cy.login('renattabenitez96', 'Hol4-2024');

    // Verificar si las opciones del navbar están visibles
    cy.get('.navbar-nav .nav-link').should('have.length.at.least', 2);

    // Acceder al primer card
    cy.get('.card').first().click();
  });

  it('Debería mostrar botones de votar y comentar para usuarios autenticados', () => {
    cy.log('Verificando elementos para usuarios autenticados');
    // Aquí puedes continuar con tus pruebas adicionales
  });
});
