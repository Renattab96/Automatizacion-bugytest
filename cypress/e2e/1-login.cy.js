// describe('Pruebas de Inicio de Sesión', () => {
//   beforeEach(() => {
//     cy.viewport(1400, 900); // define la resolucion de pantalla 
//     cy.visit('https://buggy.justtestit.org/');

//   });

//   it('Debe iniciar sesión correctamente con credenciales válidas', () => {

//     cy.login('renattabenitez96', 'Hol4-2024'); // Usa el comando personalizado
   




//     // Verificar que el usuario esté redirigido a la página de destino o que un elemento específico esté visible
//     cy.url('https://buggy.justtestit.org/model/ckl2phsabijs71623vk0%7Cckl2phsabijs71623vng').should('exist');
//     // cy.screenshot("visualizacion del home web")
//   });

//   it('Debe mostrar un mensaje de error con credenciales inválidas', () => {
//     cy.get('.input-sm').should('be.visible').type('renattabenitez96');
//     cy.get('[name="password"]').should('be.visible').type('1234566');
//     // cy.screenshot("Datos invalidos")
//     cy.get('.btn-success').click();

//     // Verificar que el mensaje de error esté visible
//     cy.contains('Invalid username/password').should('be.visible');
//     // cy.screenshot("Validacion en credenciales invalidas ")
//     // compomentes de comentario no debe de mostrarse y la url 
//     cy.get('#comment').should('not.exist')
//     cy.url('https://buggy.justtestit.org/model/ckl2phsabijs71623vk0%7Cckl2phsabijs71623vqg').should('not.include', 'ruta-indeseada');
//   });
// });

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