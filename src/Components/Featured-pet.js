import React from 'react';

export default (props) => {
	console.log(props.pet)
	const pic = props.pet.picture
	const name = props.pet.name
	const city = props.pet.contact.city
	const state = props.pet.contact.state

	return (
			<div>
			

				<h1>Featured Pet</h1>
				<div className="card-img"><img src={pic} /></div>
				<h1>{name}</h1>
				<h2>{city}, {state}</h2>

			</div>
		)
}


// displays featured pet on loading into landing page

