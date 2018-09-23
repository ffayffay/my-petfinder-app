import React from 'react';
import './Nav.css';
import adopt from '../adopt.png';

export default class Nav extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isSubMenuShown: true,
		}
	}

	toggleSubMenu() {
		this.setState({
			isSubMenuShown: !this.state.isSubMenuShown
		})
	}

	render() {
		return (
			<nav className="nav">
				<div className="img-container">
					<img src={ adopt } />
				</div>

				<div className="nav-links">
					<a href="">Random Pet</a>
					<a href="">Advanced Search</a>
				</div>
			</nav>
		)
		
	}
}