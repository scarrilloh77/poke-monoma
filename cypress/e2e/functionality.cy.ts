Cypress.session.clearAllSavedSessions();

describe('LoginPage', () => {
  it('should log in and redirect to DashboardPage', () => {
    cy.login('cmarquez@test.com', '12345678');
  });
});

describe('DashboardPage', () => {
  it('should display PokemonCards and paginate', () => {
    cy.get('[data-testid="pokemon-card-1"]').should('be.visible');
    cy.get('[data-testid="paginate-next"]').click();
    cy.get('[data-testid="paginate-prev"]').click();
  });
});

describe('PokemonPage', () => {
  it('should display Pokemon details', () => {
    cy.get('[data-testid="pokemon-card-1"]').click();
    cy.url().should('contain', '/pokemon/1');
    cy.get('[data-testid="pokemon-name"]').should('be.visible');
  });
});

describe('Navbar and DropdownMenu', () => {
  it('should log out and redirect to LoginPage', () => {
    cy.get('[data-testid="dashboard-link"]').click();
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="dropdown-menu-button"]').click();
    cy.get('[data-testid="logout-button"]').click();
    cy.url().should('not.include', '/dashboard');
  });
});
