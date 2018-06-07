describe('Writing on our own', () => {
  it('should open up a page', () => {
    cy.visit('http://localhost:3000');

    cy.title().should('include', 'React');
  });

  it('should change value', () => {
    cy.get('input').type('batman');

    // cy.contains('some new data');
  });
});
