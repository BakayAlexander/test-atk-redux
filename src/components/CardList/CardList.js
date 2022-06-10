import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCats } from '../../redux/reduxFunctions';
import { catsSelector, isLoadingSelector } from '../../redux/selectors';
import { Preloader } from '../Preloader/Preloader';
import Card from '../Card/Card';
import './CardList.css';

export default function CardList() {
	const cards = useSelector(catsSelector);
	const isLoading = useSelector(isLoadingSelector);
	const [cardsNumber, setCardsNumber] = useState(10);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCats(30));
	}, []);

	const handleAddMoreCards = () => {
		setCardsNumber(cardsNumber + 5);
	};
	return (
		<>
			<h1 className='cats-title'>Not news, but cats!</h1>
			{isLoading ? (
				<Preloader />
			) : (
				<>
					<ul className='cats-list'>
						{cards.slice(0, cardsNumber).map((card) => (
							<Card key={card.id} url={card.url} />
						))}
					</ul>
					<div className='cats-list__container'>
						<button
							className='cats-list_add-button'
							type='button'
							aria-label='Add more cats'
							onClick={handleAddMoreCards}
						>
							Add more cats
						</button>
					</div>
				</>
			)}
		</>
	);
}
