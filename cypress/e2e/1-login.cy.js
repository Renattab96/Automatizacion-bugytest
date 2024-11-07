

describe('Pruebas de Inicio de Sesión', () => {
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.visit('https://buggy.justtestit.org/');
  });

  it('Debe iniciar sesión correctamente con credenciales válidas', () => {
    cy.login('Renattabe96', 'Hol4-2024'); // Usa el comando personalizado
    //user Renattabe96 valido
    console.log('se debe ingresar a la pantalla principal ')
    // cy.url({ timeout: 100000 }).should('include', '/model'); 
    cy.get('.navbar').should('exist')
    cy.get(':nth-child(1) > .nav-link').should('exist')
    cy.get(':nth-child(2) > .nav-link').should('exist')
    cy.get(':nth-child(3) > .nav-link').should('exist')
  
  });

  it('Debe mostrar un mensaje de error con credenciales inválidas', () => {
    cy.get('.input-sm').should('be.visible').type('renattabenitez96');
      //user renattabenitez96 invalido 
    cy.get('[name="password"]').should('be.visible').type('1234566');
    cy.get('.btn-success').click();
    cy.contains('Invalid username/password').should('be.visible');
    cy.get('#comment').should('not.exist');
    cy.url().should('not.include', '/model');
  })
});