import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
	<div className='center'>
		<h1 className='lead'>Hey there! How are you feeling today?</h1>
		<div>
			<Link to='map'>
				<button className='btn btn-lg btn-primary'> Angry </button>
			</Link>
		</div>
	</div>
);

export default HomePage;
