import React from 'react';
import './Card.css';

export default function Card({ url }) {
	const onMouseOver = (e) => {
		const card = e.currentTarget;
		card.classList.add('card_active');
	};

	const onMouseLeave = (e) => {
		const card = e.currentTarget;
		card.classList.remove('card_active');
	};

	return (
		<li className='card' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
			<img className='card__image' src={url} alt='Cat pic' />
		</li>
	);
}
