import { createReducer, on } from '@ngrx/store';
import { loginSuccess, setErrorMessage } from '../actions/login.actions';
import { initialState } from '../login.state';

export const loginReducer = createReducer(initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
        };
    }),
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message,
        };
    })
);
