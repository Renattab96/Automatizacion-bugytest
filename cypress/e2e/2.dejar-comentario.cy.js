// describe('Pruebas de Comentarios', () => {
//   beforeEach(() => {
//     cy.viewport(1400, 900); // define la resolucion de pantalla 
//     cy.login('renattabenitez96', 'Hol4-2024');
//     // cy.screenshot('[PASO 1 ] COMENTARIOS-  LOGIN')
//   });

//   it('Debe permitir dejar un comentario y mostrarlo en la tabla de comentarios', () => {
//     cy.wait(300)
//     cy.get('.card').first().click();
//     // cy.screenshot('[PASO 2 ] COMENTARIOS-  VISTA DEL COMENTARIO ')
//     cy.scrollTo('bottom')

//     // cy.screenshot('Comentario-Paso 3 se desplaza al final de la pagina ')
//     cy.get(':nth-child(4) > :nth-child(5) > a').click()
//     cy.wait(200)
//     // cy.screenshot('[PASO 3 ] COMENTARIOS-  Detalle de Auto seleccionado  ')
//     cy.get('#comment').scrollIntoView().should('be.visible')
//     cy.get('.form-group').should('be.visible')

//     // Ingresar un comentario y enviarlo una sola vez carga  en el siguiente login no  carga mas su comentario 

//     cy.get('.col-lg-6 > .card-block > a > .img-fluid').scrollIntoView().should('be.visible')
//     cy.get('#comment').should('be.visible').type('Este es un comentario de prueba');
//     cy.screenshot('[PASO 4 ] COMENTARIOS-  Carga del comentario para votar   ')
//     cy.get('.btn').click();

   
//   });
// });


describe('Pruebas de  Crear Comentarios', () => {
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.login('Renattabe96', 'Hol4-2024'); // Usa el comando personalizado
    //user Renattabe96 valido
  });

  it('Debe permitir dejar un comentario y mostrarlo en la tabla de comentarios', () => {
    cy.get('.card').first().click();
    cy.scrollTo('bottom');

    cy.get('[data-testid="detalle-link"]').click();  // Selector personalizado
    cy.get('#comment').scrollIntoView().should('be.visible');
    cy.get('.form-group').should('be.visible');

    cy.get('#comment').type('Este es un comentario de prueba');
    cy.get('.btn').click();
  });
});
