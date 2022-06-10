import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/reduxFunctions';
import { isLoggedInSelector, loginErrorSelector } from '../../redux/selectors';
import './Login.css';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoggedIn = useSelector(isLoggedInSelector);
	const loginError = useSelector(loginErrorSelector);

	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	function validateEmail(email) {
		if (email.length === 0) {
			setIsEmailValid(false);
		} else {
			setIsEmailValid(true);
		}
	}

	function validatePassword(password) {
		if (password.length === 0) {
			setIsPasswordValid(false);
		} else {
			setIsPasswordValid(true);
		}
	}

	useEffect(() => {
		validateEmail(email);
		validatePassword(password);
	}, [email, password]);

	function handleSubmitLogin(e) {
		e.preventDefault();
		dispatch(login(email, password));
	}

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/profile');
		}
	}, [isLoggedIn]);

	return (
		<section className='login'>
			<div className='login__container'>
				<h2 className='login__title'>Happy to see you</h2>
				<form className='login__form' onSubmit={handleSubmitLogin}>
					<label className='login__form-label'>
						Login
						<input
							className='login__form-input'
							id='email-input'
							type='text'
							placeholder='Enter your email'
							value={email ?? ''}
							onChange={handleChangeEmail}
						></input>
					</label>
					<label className='login__form-label'>
						Password
						<input
							className='login__form-input'
							id='password-input'
							type='password'
							placeholder='Enter your password'
							value={password ?? ''}
							onChange={handleChangePassword}
						></input>
					</label>

					<button className='login__submit-button' type='submit' disabled={!isEmailValid || !isPasswordValid}>
						Sign in
					</button>
					{!!loginError && <span className='login__form-error'>{loginError}</span>}
				</form>
			</div>
		</section>
	);
}
