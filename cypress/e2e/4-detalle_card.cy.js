
describe('Detalles del Auto', () => {
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.login('Renattabe96', 'Hol4-2024'); // Usa el comando personalizado
    //user Renattabe96 valido
  });

  it('Debe mostrar la descripción, especificación y cantidad de votos del auto seleccionado', () => {
    cy.get('.card').first().click();

    // Verificar encabezado y detalles de imagen
    cy.get('.card-header').should('be.visible');
    cy.get('a > .img-fluid').should('be.visible');

    // Verificar detalles específicos del auto
    cy.get('.col-md-9 > div > :nth-child(1)').should('be.visible');
    cy.get('.col-md-9 > div > :nth-child(2)').should('be.visible');
    cy.get('.col-md-9 > div > :nth-child(3)').should('be.visible');
    cy.scrollTo('bottom');

    // Detalle adicional
    cy.get('.card-block > .container').should('exist');  // Usar selector personalizado
    cy.get(':nth-child(1) > :nth-child(5) > a').click()
    cy.contains('Votes').should('be.visible');
    cy.contains('Specification').should('be.visible');
    // cy.get('[data-testid="detalle-votos"]').should('exist');
    cy.get('h3').should('exist');
    cy.get('.container > :nth-child(2) > div > :nth-child(1)').should('exist');
    cy.get('.container > :nth-child(2) > div > :nth-child(2)').should('exist');
  });
});
