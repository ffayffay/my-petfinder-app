import React from 'react';
import './Nav.css';

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
				<h1>Nav</h1>
				<button className="sub-menu-button"
					onClick={() => this.toggleSubMenu()}>{this.state.isSubMenuShown ? 'Hide' : 'show'}</button>
				{this.state.isSubMenuShown
				? (<div className="sub-menu">
					<a>samson</a>
				   </div>)
				: ''}
				
			</nav>
		)
		
	}
}