import jwt from 'jsonwebtoken';

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): void;
    }
  }
}

Cypress.Commands.add('login', (email, password) => {
  cy.session([], () => {
    cy.visit('/');
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('button').click();
    cy.url().should('contain', '/dashboard');
  });
  cy.session(email, () => {
    cy.request({
      method: 'POST',
      url: '/api/user/login',
      body: { email, password },
    }).then(({ body }) => {
      window.localStorage.setItem('token', body.token);
    });
  });
});
