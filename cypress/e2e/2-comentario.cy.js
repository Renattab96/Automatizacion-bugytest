describe('Pruebas de Comentarios', () => {
    beforeEach(() => {
      cy.viewport(1400, 900); // Ancho de 1400 y alto de 900 píxeles
      cy.login('renattabenitez96', 'Hol4-2024');
    });
  
    it('Debe permitir dejar un comentario y mostrarlo en la tabla de comentarios', () => {
      cy.wait(300)
      // cy.url('https://buggy.justtestit.org/make/ckl2phsabijs71623vk0').should('existe')
      cy.screenshot('Comentario-Paso 1 Vista home ')
      cy.get('.card').first().click();
      cy.screenshot('Comentario-Paso 2 Card seleccionado ')
      cy.scrollTo('bottom')
      cy.screenshot('Comentario-Paso 3 se desplaza al final de la pagina ')
      cy.get(':nth-child(4) > :nth-child(5) > a').click()
      cy.wait(200)
      cy.screenshot('Comentario-Paso 4  detalles del auto seleccionado ')
      cy.get('#comment').scrollIntoView().should('be.visible')
      cy.get('.form-group').should('be.visible')
      // Ingresar un comentario y enviarlo una sola vez carga  en el siguiente login no  carga mas su comentario 
      //varia en cada prueba el bloque de prueba 
      cy.get('.col-lg-6 > .card-block > a > .img-fluid').scrollIntoView().should('be.visible')
      cy.get('#comment').should('be.visible').type('Este es un comentario de prueba');
      cy.screenshot('Comentario-Paso 5 datos cargados ')
      cy.get('.btn').click(); 
  
      // Verificar que el comentario aparezca en la tabla

      cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain', 'Este es un comentario de prueba');
      cy.get('tbody > :nth-child(1) > :nth-child(3)').within(() => {
        cy.contains(':nth-child(1) > .text-nowrap').should('be.visible');
        cy.contains('tbody > :nth-child(1) > :nth-child(2)').should('be.visible');
        cy.contains('tbody > :nth-child(1) > :nth-child(3)').should('be.visible');
      });
      cy.screenshot('Comentario-Paso 6 Comentario cargado se visualiza en la tabla   ')
    });
  });
  