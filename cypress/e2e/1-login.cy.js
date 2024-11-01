describe('Pruebas de Inicio de Sesión', () => {
    beforeEach(() => {
      cy.visit('https://buggy.justtestit.org/');
    });
  
    it('Debe iniciar sesión correctamente con credenciales válidas', () => {
      cy.login('renattabenitez96', 'Hol4-2024'); // Usa el comando personalizado
  cy.screenshot('ingresar credenciales ')
      // Verificar que el usuario esté redirigido a la página de destino o que un elemento específico esté visible
      // cy.get('.elemento-unico-dashboard', { timeout: 10000 }).should('be.visible');
      cy.url('https://buggy.justtestit.org/model/ckl2phsabijs71623vk0%7Cckl2phsabijs71623vng').should('exist');
      cy.screenshot("visualizacion del home web")
    });
  
    it('Debe mostrar un mensaje de error con credenciales inválidas', () => {
      cy.get('.input-sm').should('be.visible').type('renattabenitez96');
      cy.get('[name="password"]').should('be.visible').type('1234566');
      cy.screenshot("Datos invalidos")
      cy.get('.btn-success').click();
  
      // Verificar que el mensaje de error esté visible
      cy.contains('Invalid username/password').should('be.visible');
      cy.screenshot("Validacion en credenciales invalidas ")
    });
  });
  