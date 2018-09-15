import React from 'react';
import './PetCardInfo.css';

export default (props) => (
<div className="card-info">
	{props.pet !== '-'
		? (<div className="pet-card-content-wrap">
	<div className="card-img"><img src={props.pet.picture} /></div>
	<h1><small>Hi, I'm </small>{props.pet.name}</h1>
	<ul>
		<li>I am a {props.pet.breed}</li>
		<li>My age is {props.pet.age}</li>
		<li>Sex: {props.pet.sex}</li>
		<li>I am located in {props.pet.city}, {props.pet.state} {props.pet.zip}</li>
	</ul>
	<div className="contact-wrap"><p>To adopt me please call: {props.pet.phone} or email: {props.pet.email}</p></div>
	<div className="description-wrap block-with-text"><p>{props.pet.description}</p></div></div>)
		: (<h1>Search for a pet</h1>)}
</div>
)