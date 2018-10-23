import React from 'react';
import './Featured-pet.css';

export default (props) => {


	return (
		<div>

	{
		props.randomDog === '-'
			? <p>butt</p>
			: <div className="feat-pets-wrap">
			
				<div className="cat-card">
					<h1>{props.randomCat.name}</h1>
					<div className="card-img">
						<img src={props.randomCat.picture} />
					</div>
					<ul>
						<li>Age: {props.randomCat.age}</li>
						<li>Sex: {props.randomCat.sex}</li>
						<li>Location: {props.randomCat.city}, {props.randomCat.state} {props.randomCat.zip}</li>
					</ul>
				</div>

				<div className="dog-card">
					<h1>{props.randomDog.name}</h1>
					<div className="card-img">
						<img src={props.randomDog.picture} />
					</div>
					<ul>
						<li>Age: {props.randomDog.age}</li>
						<li>Sex: {props.randomDog.sex}</li>
						<li>Location: {props.randomDog.city}, {props.randomDog.state} {props.randomDog.zip}</li>
					</ul>
				</div>


			</div>
	
			
		}
		</div>)
}


// displays featured pet on loading into landing page

