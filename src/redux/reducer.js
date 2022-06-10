import { combineReducers } from 'redux';
import { actions } from './actions';

let defaultState = {
	isLoading: true,
	cats: [],
	isLoggedIn: false,
	loginError: '',
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.LOADING:
			return { ...state, isLoading: action.data };
		case actions.SET_CATS:
			return { ...state, cats: action.data };
		case actions.LOGIN:
			return { ...state, isLoggedIn: action.data };
		case actions.ERROR: {
			return { ...state, loginError: action.data };
		}
		default:
			return state;
	}
};

export const loadingActionCreator = (data) => ({
	type: actions.LOADING,
	data,
});

export const setCatsActionCreator = (data) => ({ type: actions.SET_CATS, data });

export const loginActionCreator = (data) => ({ type: actions.LOGIN, data });

export const loginErrorActionCreator = (data) => ({ type: actions.ERROR, data });

export const rootReducer = combineReducers({
	reducer,
});
