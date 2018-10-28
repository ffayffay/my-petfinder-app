import React from 'react';
import './PetCardInfo.css';
import NoPetCardInfo from './NoPetCardInfo.js';

export default class PetCardInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showMore: false
		}
	}	

	toggleShowMore = () => {
		this.setState({
			showMore: !this.state.showMore
		})
	}

	render() {
		return (
<div className="card-info">
	{this.props.pet !== '-'
		? (<div className="pet-card-content-wrap">
				<div className="card-img">
					<img src={this.props.pet.picture}
						 alt="https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png" />
				</div>
		<div className="pet-info">
			<h1><small>Hi, I'm </small>{this.props.pet.name}</h1>
			<ul>
				<li>I am a {this.props.pet.breed}</li>
				<li>My age is {this.props.pet.age}</li>
				<li>Sex: {this.props.pet.sex}</li>
				<li>I am located in {this.props.pet.city}, {this.props.pet.state} {this.props.pet.zip}</li>
			</ul>
			<div className="contact-wrap"><p>To adopt me please call: {this.props.pet.phone} or email: {this.props.pet.email}</p></div>
			<div className="description-wrap">
				{
					!this.state.showMore 
						? <p>{ this.props.pet.truncatedDescription !== '' ? this.props.pet.truncatedDescription : this.props.pet.description}</p>
						: <p>{ this.props.pet.description }</p>
				}
				
				{
					this.props.pet.truncatedDescription ? <button onClick={ this.toggleShowMore }>{ !this.state.showMore ? 'See more' : 'See less' }</button> : ''
				}
			</div></div></div>)
		: <NoPetCardInfo />
	}

</div>)
 

	}
}