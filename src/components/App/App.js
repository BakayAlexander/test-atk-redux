import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { loginActionCreator } from '../../redux/reducer';
import { ADMIN_LOGIN, ADMIN_PASSWORD } from '../../utils/config';
import CardList from '../CardList/CardList';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import { Profile } from '../Profile/Profile';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const login = localStorage.getItem('login');
		const password = localStorage.getItem('password');
		const isAdminDataCorrect = login === ADMIN_LOGIN && password === ADMIN_PASSWORD;
		if (isAdminDataCorrect) {
			dispatch(loginActionCreator(true));
		}
	}, []);

	return (
		<div className='app'>
			<Header />
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/news' element={<CardList />} />
				<Route
					exact
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
