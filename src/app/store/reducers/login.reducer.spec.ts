import { loginSuccess, setErrorMessage } from '../actions/login.actions';
import { User } from 'src/app/models/user.model';
import { initialState, LoginState } from '../login.state';
import { loginReducer } from './login.reducers';

describe('Login Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {
        type: 'unknown'
      };
      const result = loginReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });
  describe('login success action', () => {
    it('should update the state in immutable way', () => {
      const newState: LoginState = {
        user: new User('test@test.com', '1231234', 'sfsdafsdfsdf'),
        errorMessage: ''
      };
      const action = loginSuccess({ user: new User('test@test.com', '1231234', 'sfsdafsdfsdf') });
      const result = loginReducer(initialState, action);

      expect(result).toEqual(newState);
      expect(result).not.toBe(newState);
    });
  });
  describe('login fail action', () => {
    it('should update the state in immutable way', () => {
      const newState: LoginState = {
        user: null,
        errorMessage: 'Email not found'
      };
      const action = setErrorMessage({ message: 'Email not found' });
      const result = loginReducer(initialState, action);

      expect(result).toEqual(newState);
      expect(result).not.toBe(newState);
    });
  });
});
