import React from 'react';
import './Profile.css';

export function Profile() {
	return (
		<>
			<section className='profile'>
				<h2 className='profile__title'>Hello, admin!</h2>
				<div className='profile__text-container'>
					<p className='profile__label'>Name</p>
					<p className='profile__value'>Alexander</p>
				</div>
				<div className='profile__text-container'>
					<p className='profile__label'>Email</p>
					<p className='profile__value'>bakay.dvr@gmail.com</p>
				</div>
			</section>
		</>
	);
}
