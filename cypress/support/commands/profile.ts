export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileid: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileid}`,
    headers: { Authorization: 'sddds' },
    body: {
      id: '4',
      firstName: 'Test name',
      lastName: 'asf',
      age: 465,
      currency: 'RUB',
      country: 'Belarus',
      city: 'Moscow',
      username: 'testuser',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-Ux29e_Mrd0RrU7-' +
        'xm9brmZqr9Y9cxXYr_pcfJvzgKO1VRwLj_41YDrvYdwUrpSI56c&usqp=CAU',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;

      resetProfile(profileid: string): Chainable<void>;
    }
  }
}
