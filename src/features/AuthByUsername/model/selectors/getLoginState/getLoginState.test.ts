import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginError', () => {
  test('should return true', () => {
    const loginForm = {
      password: '123',
      username: 'user',
      isLoading: true,
      error: 'error',
    };
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 45,
      },
      user: {
        authData: {
          id: 'red',
          username: 'red',
        },
      },
      loginForm,
    };
    expect(getLoginState(state as StateSchema)).toEqual(loginForm);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
