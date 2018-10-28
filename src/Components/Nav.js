import React from 'react';
import './Nav.css';
import adopt from '../adopt.png';

export default (props) => {

	return(
		<nav className="nav">
			<div className="img-container">
				<img src={ adopt } alt="logo" />
			</div>

			<div className="nav-links">
				<a href="">Random Pet</a>
				<a href="">Advanced Search</a>
			</div>
		</nav>
	)
}
