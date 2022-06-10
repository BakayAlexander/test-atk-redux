import React from 'react';
import './Main.css';
import developerPhoto from '../../images/developer-photo.png';

export default function Main() {
	return (
		<section className='main'>
			<div className='main__content-container'>
				<div className='main__text-element'>
					<h2 className='main__text-title'>Alexander</h2>
					<p className='main__text-subtitle'>Frontend developer</p>
					<p className='main__text'>
						I’m a sociable guy with a wide range of interests (from Renaissance architecture to the architecture of
						building modern nano-processors). I am looking for a team for a long-term and productive work. I am a novice
						specialist and I am only interested in experience, and it will be great to get it in a great company of
						like-minded people. I have been looking at IT for a long time, largely due to the fact that I have a circle
						of friends who are engaged in this field. One day I realized how close in spirit the atmosphere of
						developing to me. Gradually, I formed the idea that I could change my field of activity to one where people
						close to me in spirit work and where I can learn something new every day. And as a result, in addition to
						courses from Yandex.Practicum, I also studied JS from the textbook javascript.ru accompanied by their
						course, and also took a course on React from Vladilen Minin, I would like to mention separately the free
						video lessons of Minin and Alexander Lushchenko on YouTube.
					</p>
					<ul className='main__links'>
						<li>
							<a
								className='main__link'
								href='https://www.linkedin.com/in/alexander-bakay-b6b041224/'
								target='_blank'
								rel='noreferrer'
							>
								Linkedin
							</a>
						</li>
						<li>
							<a className='main__link' href='https://github.com/BakayAlexander' target='_blank' rel='noreferrer'>
								Github
							</a>
						</li>
					</ul>
				</div>
				<img className='main__photo' src={developerPhoto} alt='Фото Александра' />
			</div>
		</section>
	);
}
