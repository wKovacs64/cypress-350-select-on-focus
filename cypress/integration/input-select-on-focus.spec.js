describe('input', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('selects value on focus', () => {
    cy.get('input')
      .should('have.value', '42')
      .click()
      // input has just been focused so its value should now be selected
      // (and thus typing would replace the value, not append to it)
      .type('36')
      // fail - input value is 4236
      .should('have.value', '36');
  });
});
