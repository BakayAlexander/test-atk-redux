import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../redux/reduxFunctions';
import { isLoggedInSelector } from '../../redux/selectors';
import './Header.css';

export default function Header() {
	const isLoggedIn = useSelector(isLoggedInSelector);
	const dispatch = useDispatch();

	return (
		<header className='header'>
			<nav className='header__container'>
				<nav className='header__pages-links'>
					<NavLink
						className={(navData) =>
							navData.isActive ? `header__pages-link header__link_active` : 'header__pages-link'
						}
						to='/'
					>
						Main
					</NavLink>
					<NavLink
						className={(navData) =>
							navData.isActive ? `header__pages-link header__link_active` : 'header__pages-link'
						}
						to='/news'
					>
						News
					</NavLink>
				</nav>
				<nav className='header__profile-links'>
					<NavLink
						className={(navData) =>
							navData.isActive ? `header__profile-link header__link_active` : 'header__profile-link'
						}
						to='/profile'
					>
						Profile
					</NavLink>
					<NavLink className='header__profile-icon-link' to='/profile'></NavLink>
					{!isLoggedIn ? (
						<Link className='header__login-link' to='/login'>
							Sign in
						</Link>
					) : (
						<button
							className='header__logout-button'
							onClick={() => {
								dispatch(logout());
							}}
						>
							Sign out
						</button>
					)}
				</nav>
			</nav>
		</header>
	);
}
