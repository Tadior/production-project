import { selectByTestId } from '../helpers/selectByTestId';

describe('Routing', () => {
  describe('Authorisated User', () => {
    beforeEach(() => {
      cy.login();
    });
    it('move to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('move to articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });

  describe('Unauthorisated User', () => {
    it('move to main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('move to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('move to profile page', () => {
      cy.visit('/profidfdffddf');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
});
