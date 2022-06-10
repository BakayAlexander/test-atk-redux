import { getCats } from '../utils/api';
import { ADMIN_LOGIN, ADMIN_PASSWORD } from '../utils/config';
import { loadingActionCreator, loginActionCreator, loginErrorActionCreator, setCatsActionCreator } from './reducer';

export const getAllCats = (amount) => async (dispatch) => {
	try {
		dispatch(loadingActionCreator(true));
		const data = await getCats(amount);
		if (data.length > 0) {
			return dispatch(setCatsActionCreator(data));
		}
	} catch (err) {
		console.log(err);
	} finally {
		dispatch(loadingActionCreator(false));
	}
};

export const login = (login, password) => (dispatch) => {
	try {
		if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
			dispatch(loginActionCreator(true));
			localStorage.setItem('login', login);
			localStorage.setItem('password', password);
			dispatch(loginErrorActionCreator(''));
		} else {
			dispatch(loginErrorActionCreator('Please enter a valid login and password'));
			dispatch(loginActionCreator(false));
			localStorage.removeItem('login');
			localStorage.removeItem('password');
		}
	} catch (err) {
		console.log(err);
	}
};

export const logout = () => (dispatch) => {
	try {
		dispatch(loginActionCreator(false));
		localStorage.removeItem('login');
		localStorage.removeItem('password');
	} catch (err) {
		console.log(err);
	}
};
