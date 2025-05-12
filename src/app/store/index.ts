

import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from '../store/reducers/auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};
