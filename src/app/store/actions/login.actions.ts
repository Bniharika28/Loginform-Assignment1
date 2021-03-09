import { createAction, props } from '@ngrx/store';
import { Authenticate } from 'src/app/models/authentication.model';
import { User } from 'src/app/models/user.model';

export const LOGIN_START = '[login start] from login';
export const LOGIN_SUCCESS = '[login success]  from login';
export const LOGIN_FAIL = '[login fail] from login';
// export const LOGOUT = '[logout] from Confirm Logout';
// export const LOGOUT_CANCEL = '[logout] from  Logout cancel';
// export const LOGOUT_CONFIRMED = '[logout] from  Logout confirmed';
// export const LOGOUT_COMPLETE = '[logout] from  Logout complete';

export const loginStart = createAction(LOGIN_START, props<{  email: string; password: string}>());

export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User }>());

export const setErrorMessage = createAction(LOGIN_FAIL, props<{ message:string }>());

// export const logOut = createAction(LOGOUT);

// export const logoutCancel = createAction(LOGOUT_CANCEL );

// export const logoutConfirmed = createAction(LOGOUT_CONFIRMED );

// export const logoutComplete = createAction(LOGOUT_COMPLETE );



